import "@babel/polyfill";
import dotenv from "dotenv";
import "isomorphic-fetch";
import shopifyAuth, { verifyRequest } from "@shopify/koa-shopify-auth";
import Shopify, { ApiVersion } from "@shopify/shopify-api";
import Koa from "koa";
import Router from "koa-router";
import koaBody from "koa-body";

var url = require("url");

// Custom modules
import { handleToken, getToken, hardDeleteToken } from "./db/token";
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
  SESSION_STORAGE: new Shopify.Session.MemorySessionStorage(),
});

// Storing the currently active shops in memory will force them to re-login when your server restarts. You should
// persist this object in your app.
const ACTIVE_SHOPIFY_SHOPS = {}

const app = new Koa();
// To handle post requests & file upload
app.use(koaBody({ multipart: true }));
const router = new Router();
app.keys = [Shopify.Context.API_SECRET_KEY];

// Sets up shopify auth
app.use(
  shopifyAuth({
    accessMode: "offline",
    async afterAuth(ctx) {
      const { shop, accessToken, scope } = ctx.state.shopify;
      const host = ctx.query.host;

      // Saving offline token in db
      let tokenInfo = await handleToken(shop, scope, accessToken);

      console.log(tokenInfo, "==> Shopify Auth");

      // Your app should handle the APP_UNINSTALLED webhook to make sure merchants go through OAuth if they reinstall it
      const response = await Shopify.Webhooks.Registry.register({
        shop,
        accessToken,
        path: "/webhooks",
        topic: "APP_UNINSTALLED",
        webhookHandler: async (topic, shop, body) => {
          //delete ACTIVE_SHOPIFY_SHOPS[shop],
          await hardDeleteToken(topic, shop, body);
        },
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

/**
 * This is the root path of the app
 */
router.get("/", async (ctx) => {
  // If shop is present
  if (ctx.query.shop) {
    let tokenInfo = await getToken(ctx.query.shop);

    console.log(tokenInfo, "tokenInfo on server file");

    if (tokenInfo instanceof Array && tokenInfo.length == 0) {
      ctx.redirect(`/auth?shop=${ctx.query.shop}`);
      // ctx.body = "No Token info for this shop";
    } else {
      ctx.body =
        "This is the Index page of the application and here we have to check session first";
    }
  } else {
    ctx.body = "Shop paramter is not present";
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
