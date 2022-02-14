import mysql from "mysql";
import pool from "./connnection";

/**
 * This is checking if shop token present or not. If not present then inserting in db and then returning
 * @param {T} shop
 * @param {*} scope
 * @param {*} token
 * @returns
 */
export const handleToken = async (shop, scope, token) => {
  try {
    let tokenInfo = await getToken(shop);
    if (tokenInfo instanceof Array && tokenInfo.length == 0) {
      let insertResponse = await insertToken(shop, scope, token);
      return await getToken(shop);
    } else {
      return tokenInfo;
    }
  } catch (error) {
    return error;
  }
};

/**
 * Getting shop token from DB
 * @param {*} shop
 * @returns Promise of data or error
 */
export const getToken = (shop) => {
  let selectQuery = "SELECT * FROM ?? WHERE ?? = ? limit 0,1";
  let query = mysql.format(selectQuery, ["ufu_users", "shop", shop]);

  return new Promise((resolve, reject) => {
    pool.query(query, (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
};

/**
 * This will insert token
 * @param {*} shop
 * @param {*} scope
 * @param {*} token
 * @returns
 */
export const insertToken = (shop, scope, token) => {
  let insertQuery = "INSERT INTO ?? SET ?";
  let query = mysql.format(insertQuery, [
    "ufu_users",
    {
      shop,
      scope: JSON.stringify(scope),
      token,
    },
  ]);

  return new Promise((resolve, reject) => {
    pool.query(query, (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
};

/**
 * Soft Delete token
 * @param {*} shop
 * @param {*} scope
 * @param {*} token
 * @returns
 */
export const softDeleteToken = (topic, shop, body) => {
  let deleteQuery = "DELETE FROM ?? WHERE ?? = ??";
  let query = mysql.format(deleteQuery, ["ufu_users", "shop", shop]);

  return new Promise((resolve, reject) => {
    pool.query(query, (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
};

/**
 * Hard Delete token
 * @param {*} shop
 * @param {*} scope
 * @param {*} token
 * @returns
 */
export const hardDeleteToken = (topic, shop, body) => {
  let deleteQuery = "DELETE FROM ?? WHERE ?? = ??";
  let query = mysql.format(deleteQuery, ["ufu_users", "shop", shop]);

  console.log(query, "app delete query");

  return new Promise((resolve, reject) => {
    pool.query(query, (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
};
