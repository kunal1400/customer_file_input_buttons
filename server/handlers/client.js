import { GraphQLClient } from "graphql-request";
import { setContext } from "@apollo/client/link/context";

/**
 *
 * @param {*} shop
 * @param {*} accessToken
 * @returns apollo client for calling graphql queries
 */
export const oldcreateClient = (shop, accessToken) => {
  const httpLink = createHttpLink({
    uri: `https://${shop}/admin/api/2019-10/graphql.json`,
  });

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        "X-Shopify-Access-Token": accessToken,
        "User-Agent": `shopify-app-node ${process.env.npm_package_version} | Shopify App CLI`,
      },
    };
  });

  return new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache(),
  });
};

export const createClientOld = (shop, accessToken) => {
  const client = new ApolloClient({
    uri: `https://${shop}/admin/api/2022-01/graphql.json`,
    cache: new InMemoryCache(),
    headers: {
      "X-Shopify-Access-Token": accessToken,
    },
  });
  return client;
};

export const createClient = (shop, accessToken) => {
  const graphQLClient = new GraphQLClient(
    `https://${shop}/admin/api/2022-01/graphql.json`,
    {
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Access-Token": accessToken,
      },
    }
  );

  return graphQLClient;
};
