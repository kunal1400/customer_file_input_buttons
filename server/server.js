import "@babel/polyfill";
import dotenv from "dotenv";
import "isomorphic-fetch";
import shopifyAuth, { verifyRequest } from "@shopify/koa-shopify-auth";
import Shopify, { ApiVersion } from "@shopify/shopify-api";
import Koa from "koa";
import Router from "koa-router";
import bodyParser from "koa-bodyparser";
var url = require("url");

// Custom routes
import { handle_proxy_apis } from "./APIs";
import { handle_post_requests } from "./APIs/handlePostRequests";

dotenv.config();
const port = parseInt(process.env.PORT, 10) || 8081;

Shopify.Context.initialize({
  API_KEY: process.env.SHOPIFY_API_KEY,
  API_SECRET_KEY: process.env.SHOPIFY_API_SECRET,
  SCOPES: process.env.SCOPES.split(","),
  HOST_NAME: process.env.HOST.replace(/https:\/\/|\/$/g, ""),
  API_VERSION: ApiVersion.October20,
  IS_EMBEDDED_APP: true,
  // This should be replaced with your preferred storage strategy
  SESSION_STORAGE: new Shopify.Session.MemorySessionStorage(),
});

// Storing the currently active shops in memory will force them to re-login when your server restarts. You should
// persist this object in your app.
const ACTIVE_SHOPIFY_SHOPS = {
  "test-print-a-wave.myshopify.com": {
    offlineToken: "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",
    scope: "write_products,write_customers,write_draft_orders",
  },
};

const app = new Koa();
// To handle post requests we need bodyParser
app.use(bodyParser());
const router = new Router();
app.keys = [Shopify.Context.API_SECRET_KEY];

// Sets up shopify auth
app.use(
  shopifyAuth({
    accessMode: "offline",
    async afterAuth(ctx) {
      const { shop, accessToken, scope } = ctx.state.shopify;

      console.log(shop, accessToken, scope, "shop, accessToken, scope");

      const host = ctx.query.host;
      // ACTIVE_SHOPIFY_SHOPS[shop] = scope;

      // Your app should handle the APP_UNINSTALLED webhook to make sure merchants go through OAuth if they reinstall it
      const response = await Shopify.Webhooks.Registry.register({
        shop,
        accessToken,
        path: "/webhooks",
        topic: "APP_UNINSTALLED",
        webhookHandler: async (topic, shop, body) =>
          delete ACTIVE_SHOPIFY_SHOPS[shop],
      });

      if (!response.success) {
        console.log(
          `Failed to register APP_UNINSTALLED webhook: ${response.result}`
        );
      }

      // Redirect to app with shop parameter upon auth
      ctx.redirect(`/?shop=${shop}&host=${host}`);
    },
  })
);

router.get("/", async (ctx) => {
  const shop = ctx.query.shop;

  // If this shop hasn't been seen yet, go through OAuth to create a session
  if (ACTIVE_SHOPIFY_SHOPS[shop] === undefined) {
    ctx.redirect(`/auth?shop=${shop}`);
  } else {
    // Load app skeleton. Don't include sensitive information here!
    ctx.body =
      "This is the Index page of the application and here we have to check session first";
  }
});

router.post("/webhooks", async (ctx) => {
  try {
    await Shopify.Webhooks.Registry.process(ctx.req, ctx.res);
    console.log(`Webhook processed, returned status code 200`);
  } catch (error) {
    console.log(`Failed to process webhook: ${error}`);
  }
});

// // Everything else must have sessions
// router.get("(.*)", verifyRequest(), async (ctx) => {
//   // Your application code goes here
//   let session = await Shopify.Utils.loadCurrentSession(ctx.req, ctx.res);
//   console.log(session, "=========== session ============")
// });

/**
 * Middleware for checking shop name and signature before any api calls
 * */
const check_shopname_and_signature = (ctx, next) => {
  ctx.set("Content-Type", "application/json");
  if (ctx && ctx.req.url && ctx.req.url.indexOf("shop=") !== -1) {
    var queryData = url.parse(ctx.req.url, true).query;
    if (queryData && queryData.shop) {
      if (queryData.signature) {
        ctx.queryData = queryData;
        return next();
      } else {
        ctx.body = {
          status: false,
          message: "signature is missing",
        };
      }
    } else {
      ctx.body = {
        status: false,
        message: "shop param is missing",
      };
    }
  } else {
    ctx.body = {
      status: false,
      message: "Either url or shop query string is missing from URL",
    };
  }
};

/**
 * Handling GET API requests from stores in which my app is installed
 * */
router.get("/proxy", check_shopname_and_signature, handle_proxy_apis);

/**
 * Handling POST API requests from stores in which my app is installed
 * */
router.post("/proxy", check_shopname_and_signature, handle_post_requests);

app.use(router.allowedMethods());
app.use(router.routes());
app.listen(port, () => {
  console.log(`> Ready on http://localhost:${port}`);
});
