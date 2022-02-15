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
      let insertTokenResponse = await insertToken(shop, scope, token);
      return await getToken(shop);
    }
    else {
      let scopeInDb = JSON.parse( tokenInfo[0].scope );
      // If scope in DB matched with the required scope then no need to update record
      if( scopeInDb == scope ) {
        return await getToken(shop);
      }
      else {
        await updatedToken(shop, scope, token);
        return await getToken(shop);
      }
    }
  }
  catch (error) {
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
}

/**
 * Getting shop token from DB
 * @param {*} shop
 * @returns Promise of data or error
 */
 export const updatedToken = (shop, scope, token) => {
  let updateQuery = "UPDATE ?? SET updated_at=NOW(), scope=?, token=? WHERE shop=?";
  let query = mysql.format(updateQuery, ["ufu_users", JSON.stringify(scope), token, shop]);

  console.log("==> update query <==", query)

  return new Promise((resolve, reject) => {
    pool.query(query, (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
}

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
export const hardDeleteToken = ( shop ) => {
  let deleteQuery = "DELETE FROM ?? WHERE shop=?";
  let query = mysql.format(deleteQuery, ["ufu_users", shop]);

  return new Promise((resolve, reject) => {
    pool.query(query, (err, data) => {
      if (err) {
        reject(err);
      }
      resolve(data);
    });
  });
};
