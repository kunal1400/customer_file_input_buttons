var url = require("url");
import { createClient } from "../handlers/client";
import { GET_SHOP_INFO } from "./Shop/ShopInfo";
import Shopify from "@shopify/shopify-api";

export const handle_proxy_apis = async (ctx) => {
  // Setting response headers
  // ctx.set("Content-Type", "application/json");

  // GraphQLClient takes in the shop url and the accessToken for that shop.
  const client = new Shopify.Clients.Rest(
    "test-print-a-wave.myshopify.com",
    "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"
  );

  // Use client.query and pass your query as `data`
  const response = await client.get({
    path: "products",
  });

  console.log(response.body);

  ctx.body = {
    status: true,
    data: [],
  };
  return;

  // // Parsing the request URL and its parameters
  // let queryData = url.parse(ctx.req.url, true).query;

  // // Creating apollo client for each request
  // let client = createClient(
  //   "test-print-a-wave.myshopify.com",
  //   "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"
  // );

  // let responseToSend = {
  //   shop: queryData.shop,
  //   action: queryData.action
  // }

  // if( queryData.action ) {

  //   // GraphQLClient takes in the shop url and the accessToken for that shop.
  //   const client = new Shopify.Clients.Graphql(
  //     "test-print-a-wave.myshopify.com",
  //     "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"
  //   );

  //   // Use client.query and pass your query as `data`
  //   const response = await client.query({
  //     data: `{
  //         products (first: 10) {
  //           edges {
  //             node {
  //               id
  //               title
  //               descriptionHtml
  //             }
  //           }
  //         }
  //       }`,
  //   });

  //   console.log(response.data);

  //   ctx.body = {
  //     status: true,
  //     data: response.data
  //   }

  //   // // Each case is the action of the query param
  //   // switch( queryData.action ) {
  //   //   case 'get_shop_info':
  //   //     const result = await client.request( GET_SHOP_INFO )
  //   //     console.log(client, result);

  //   //     /*.then(({ error, data }) => {
  //   //       if (error) {
  //   //         throw new Error(error);
  //   //       }
  //   //       else {
  //   //         return data
  //   //       }
  //   //     })
  //   //     .then((response)=> {
  //   //       ctx.body = {
  //   //         status: true,
  //   //         data: response.data
  //   //       }
  //   //     })
  //   //     .catch((error)=> {
  //   //       console.log(error, "....error....")
  //   //       ctx.body = {
  //   //         status: false,
  //   //         error
  //   //       }
  //   //     })*/

  //   //     ctx.body = {
  //   //       status: true,
  //   //       data: queryData
  //   //     }
  //   //   break;

  //   //   default:
  //   //     ctx.body = {
  //   //       status: true,
  //   //       data: queryData
  //   //     }
  //   //   break;
  //   // }
  // }
  // else {
  //   ctx.body = {
  //     status: false,
  //     message: "action is required"
  //   }
  // }
};
