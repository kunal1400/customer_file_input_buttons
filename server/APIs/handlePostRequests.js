var url = require("url");
import "isomorphic-fetch";

export const handle_post_requests = async (ctx) => {
  // Setting response headers
  ctx.set("Content-Type", "application/json");

  // Parsing the request URL and its parameters
  let queryData = url.parse(ctx.req.url, true).query;

  console.log(ctx.request.body);

  try {
    let responseData = {};
    if (queryData.action) {
      // Each case is the action of the query param
      switch (queryData.action) {
        case "add_product":
          // creating response with data
          responseData = {
            status: true,
            data: [],
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
