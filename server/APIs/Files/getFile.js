import { gql } from "@apollo/client";

export const GQL_GET_FILE_BY_NAME = (filename) => {
  return gql`
  {
    files(query: "filename:${filename}", first:1) {
      edges {
        node{
          alt
          preview{
            image {
              url
            }
            status
          }
        }
      }
    }
  }`;
};
