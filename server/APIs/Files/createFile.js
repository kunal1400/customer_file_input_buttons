import { gql } from "@apollo/client";

export const CREATE_FILE = gql`
  mutation fileCreate($input: [FileCreateInput!]!) {
    fileCreate(files: $input) {
      files {
        alt
        createdAt
        fileErrors {
          details
          message
        }
        fileStatus
        preview {
          image {
            id
          }
          status
        }
      }
      userErrors {
        message
        field
        code
      }
    }
  }
`;
