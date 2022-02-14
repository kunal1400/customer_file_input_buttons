import "@babel/polyfill";
import dotenv from "dotenv";
import "isomorphic-fetch";
import shopifyAuth, { verifyRequest } from "@shopify/koa-shopify-auth";
import Shopify, { ApiVersion } from "@shopify/shopify-api";
import Koa from "koa";
import Router from "koa-router";
var url = require("url");

import { handleToken, getToken, hardDeleteToken } from "./db/token";

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
const ACTIVE_SHOPIFY_SHOPS = {};

const app = new Koa();
const router = new Router();
app.keys = [Shopify.Context.API_SECRET_KEY];

// Sets up shopify auth
app.use(
  shopifyAuth({
    async afterAuth(ctx) {
      const { shop, accessToken, scope } = ctx.state.shopify;

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
      ctx.redirect(`/?shop=${shop}`);
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

// Everything else must have sessions
router.get("/proxy", async (ctx) => {
  ctx.set("Content-Type", "application/json");

  // If shop parameter is present then get shop url & access token from DB
  if (ctx && ctx.req.url && ctx.req.url.indexOf("shop=") !== -1) {
    var queryData = url.parse(ctx.req.url, true).query;

    console.log(
      "Proxy payload from shopify store ===>> ",
      JSON.stringify(queryData)
    );

    if (queryData && queryData.shop) {
      if (queryData.signature) {
        ctx.body = {
          status: true,
          data: queryData,
        };
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
});

app.use(router.allowedMethods());
app.use(router.routes());
app.listen(port, () => {
  console.log(`> Ready on http://localhost:${port}`);
});
