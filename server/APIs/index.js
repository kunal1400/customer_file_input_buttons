var url = require("url");
import "isomorphic-fetch";
import { createClient } from "../handlers/client";
import { GET_SHOP_INFO } from "./Shop/ShopInfo";

export const handle_proxy_apis = async (ctx) => {
  // Setting response headers
  ctx.set("Content-Type", "application/json");

  // Parsing the request URL and its parameters
  let queryData = url.parse(ctx.req.url, true).query;

  // GraphQLClient takes in the shop url and the accessToken for that shop.
  const client = createClient(
    "test-print-a-wave.myshopify.com",
    "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"
  );

  try {
    let responseData = {};
    if (queryData.action) {
      // Each case is the action of the query param
      switch (queryData.action) {
        case "get_shop_info":
          let result = await client.query({
            query: GET_SHOP_INFO,
          });
          // creating response with data
          responseData = {
            status: true,
            data: result.data,
          };
          break;

        default:
          responseData = {
            status: false,
            message: "Invalid action",
          };
          break;
      }
    } else {
      responseData = {
        status: false,
        message: "action is required",
      };
    }

    // Sending final response after all execution
    ctx.body = responseData;
  } catch (error) {
    ctx.throw(401, {
      data: {
        error,
      },
    });
  }
};
