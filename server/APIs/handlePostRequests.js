var url = require("url");
import "isomorphic-fetch";
import { STAGED_UPLOADS_CREATE } from "./Files/uploadFile";
import { CREATE_FILE } from "./Files/createFile";
import { createClient } from "../handlers/client";

export const handle_post_requests = async (ctx) => {
  // Setting response headers
  ctx.set("Content-Type", "application/json");

  // Parsing the request URL and its parameters
  let queryData = url.parse(ctx.req.url, true).query;

  // console.log(ctx.request.body);
  // console.log(ctx.request.files['customers_uploaded_files[]'], ctx.request.body);

  try {
    if (queryData.action) {
      // Each case is the action of the query param
      switch (queryData.action) {
        case "add_product":
          // creating response with data
          ctx.body = {
            status: true,
            data: [],
          };
          break;

        case "upload_file":
          try {
            let file = ctx.request.files["customers_uploaded_files[]"];
            const client = createClient(
              "test-print-a-wave.myshopify.com",
              "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"
            );

            let tmpFileUploadResponse = await client.mutate({
              mutation: STAGED_UPLOADS_CREATE,
              variables: {
                input: {
                  fileSize: file.size.toString(),
                  filename: file.name,
                  httpMethod: "POST",
                  mimeType: file.type,
                  resource: "IMAGE",
                },
              },
            });

            let fileUploadResponse = await client.mutate({
              mutation: CREATE_FILE,
              variables: {
                input: {
                  originalSource:
                    "https://shopify.s3.amazonaws.com/tmp/55807377564/products/f334cc15-6fbe-4dca-944a-13b7c00f8c8d/Download_free_image_of_Blue_wall_shadow_background_with_pink_flower_decor_by_PLOYPLOY_about_tape_texture_quotes_background_shadow_and_quote_2561393.jpeg",
                  contentType: "FILE",
                  alt: "",
                },
              },
            });

            ctx.body = {
              status: true,
              data: tmpFileUploadResponse.data,
              finalData: fileUploadResponse,
            };
          } catch (e) {
            ctx.body = {
              error: e,
            };
          }

          break;

        default:
          ctx.body = {
            status: false,
            message: "Invalid action",
          };
          break;
      }
    } else {
      ctx.body = {
        status: false,
        message: "action is required",
      };
    }
  } catch (error) {
    ctx.throw(401, {
      data: {
        error,
      },
    });
  }
};
