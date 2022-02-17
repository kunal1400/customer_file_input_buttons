import "isomorphic-fetch";

// Custom modules
import { createClient } from "../handlers/client";
import { getToken } from "../db/token";
import { uploadFile } from "./s3";

export const handle_post_requests = async (ctx) => {
  let {action} = ctx.params
  ctx.request.socket.setTimeout(10 * 60 * 1000);

  // Setting response headers
  ctx.set("Content-Type", "application/json");

  console.log(action, "action")

  try {
    let tokenInfo = await getToken(ctx.query.shop);

    // GraphQLClient takes in the shop url and the accessToken for that shop.
    const client = await createClient(ctx.query.shop, tokenInfo[0].token);

    if (action) {
      // Each case is the action of the query param
      switch (action) {
        case "add_product":
          // creating response with data
          ctx.body = {
            status: true,
            data: [],
          };
        break;

        case 'upload_file':
          const uploadedFile = ctx.request.files["customers_uploaded_files[]"];
          try {
            let s3response = await uploadFile( uploadedFile );
            ctx.body = {
              status: true,
              initialPreview: [s3response.Location],
              initialPreviewConfig: [],
              append: true,
              data: s3response
            }
          }
          catch (error) {
            console.log(error, "==> Error while uploading in s3")
            ctx.body = {
              status: false,
              error: 'An error occured while uploading',
              initialPreview: [],
              initialPreviewConfig: [],
              append: true
            }
          }
        break;

        default:
          ctx.body = {
            status: false,
            message: "Invalid action",
          };
          break;
      }
    }
    else {
      ctx.body = {
        status: false,
        message: "action is required",
      };
    }
  }
  catch (error) {
    ctx.throw(401, {
      data: {
        error,
      },
    });
  }
};
