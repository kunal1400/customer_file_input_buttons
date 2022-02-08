import { gql } from "graphql-request";

export const GET_SHOP_INFO = gql`
  {
    shop {
      description
      primaryDomain {
        url
      }
    }
  }
`;
