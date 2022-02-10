var url = require("url");
import "isomorphic-fetch";
import { STAGED_UPLOADS_CREATE } from "./Files/uploadFile";
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
            // Calling mutation
            let tmpFileUploadResponse = await createClient(
              "test-print-a-wave.myshopify.com",
              "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"
            ).mutate({
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

            ctx.body = {
              status: true,
              data: tmpFileUploadResponse.data,
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
