import { gql } from "@apollo/client";

/**
 * image will be null untill the status is ready
 * status - UPLOADED, PROCESSING, READY, FAILED
 */
export const CREATE_FILE = gql`
  mutation fileCreate($input: [FileCreateInput!]!) {
    fileCreate(files: $input) {
      files {
        alt
        createdAt
        fileErrors {
          code
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
