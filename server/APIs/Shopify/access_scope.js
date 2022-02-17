import Shopify from '@shopify/shopify-api';

/**
 * This will return the scopes associated with the passed token
 *
 * @param {*} shop URL not graphql/Rest API end point
 * @param {*} accessToken
 */
export const getAccessScope = async (shop, accessToken) => {
  const client = new Shopify.Clients.Rest(shop, accessToken);
  const result = await client.get({
    path: '/admin/oauth/access_scopes.json',
  });
  return result;
}

