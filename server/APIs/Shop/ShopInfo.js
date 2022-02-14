import { gql } from "@apollo/client";

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
