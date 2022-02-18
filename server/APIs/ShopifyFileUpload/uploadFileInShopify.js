import { CREATE_FILE } from "./Files/createFile";
import { GQL_GET_FILE_BY_NAME } from "./Files/getFile";
import { GQL_STAGED_UPLOADS_CREATE } from "./Files/uploadFile";
const fs = require("fs");
var FormData = require("form-data");

const file = ctx.request.files["customers_uploaded_files[]"];
const fileSize = file.size.toString();
const fileName = file.name;

// Getting temporary url
try {
  const tmpFileUploadResponse = await client.mutate({
    mutation: GQL_STAGED_UPLOADS_CREATE,
    variables: {
      input: {
        fileSize,
        filename: fileName,
        httpMethod: "POST",
        mimeType: file.type,
        resource: "FILE", // Important to set this as FILE and not IMAGE. Or else when you try and create the file via Shopify's api there will be an error.
      },
    },
  });
}
catch (error) {
  console.log(error, tokenInfo, "GQL_STAGED_UPLOAD_ERROR")
}

console.log(tmpFileUploadResponse);

// Save the target info.
const target =
  tmpFileUploadResponse.data.stagedUploadsCreate.stagedTargets[0];

// Parameters contain all the sensitive info we'll need to interact with the aws bucket.
const params = target.parameters;

// This is the url you'll use to post data to aws. It's a generic s3 url that when combined with the params sends your data to the right place.
const url = target.url;

// This is the specific url that will contain your image data after you've uploaded the file to the aws staged target.
const resourceUrl = target.resourceUrl;

console.log(target, "target")

/*------------------------
Post to temp target.
---
A temp target is a url hosted on Shopify's AWS servers.
------------------------*/
// Generate a form, add the necessary params and append the file.
// Must use the FormData library to create form data via the server.
const form = new FormData();

// Add each of the params we received from Shopify to the form. this will ensure our ajax request has the proper permissions and s3 location data.
params.forEach(({ name, value }) => {
  form.append(name, value);
});

// Add the file to the form.
form.append("file", fs.readFileSync(file.path));

console.log(form, "form Data")

// Post the file data to shopify's aws s3 bucket. After posting, we'll be able to use the resource url to create the file in Shopify.
await fetch(url, {
  method: "post",
  body: form,
  headers: {
    ...form.getHeaders(),
    // Pass the headers generated by FormData library. It'll contain content-type: multipart/form-data. It's necessary to specify this when posting to aws.
    "Content-Length": fileSize + 5000,
    // AWS requires content length to be included in the headers. This may not be automatically passed so you'll need to specify. And ... add 5000 to ensure the upload works. Or else there will be an error saying the data isn't formatted properly.
  },
});

console.log(ff, {...form.getHeaders(),"Content-Length": fileSize + 5000},"fetched called")

await client.mutate({
  mutation: CREATE_FILE,
  variables: {
    input: {
      alt: "alt-tag",
      contentType: "IMAGE",
      originalSource: resourceUrl,
    },
  },
  //refetchQueries: []
});

let result = await client.query({
  query: GQL_GET_FILE_BY_NAME(file.name),
});

ctx.body = {
  status: true,
  initialPreview: [
    result.data.files.edges[0].node.preview.image.url,
  ],
  // initialPreviewAsData: true,
  initialPreviewConfig: [
    // {
    //   caption: file.name,
    //   downloadUrl: result.data.files.edges[0].node.preview.image.url,
    //   width: '120px',
    //   url: '/tools/custom_api?action=delete_file&file_name='+file.name,
    //   key: 100,
    //   extra: {id: 100}
    // }
  ],
  // initialPreviewThumbTags:[
  //   {
  //     '{CUSTOM_TAG_NEW}': ' ',
  //     '{CUSTOM_TAG_INIT}': '<span class=\'custom-css\'>CUSTOM MARKUP</span>'
  //   }
  // ],
  // append: true,
  data: result.data.files.edges[0].node.preview.image.url,
  result,
}