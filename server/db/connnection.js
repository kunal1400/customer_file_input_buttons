const mysql = require("mysql");

const pool = mysql.createPool({
  connectionLimit: 100, //important
  host: process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

/**
 * Checking remote connection
 */
export const checkConnection = () => {
  pool.getConnection((err, connection) => {
    if (err) {
      return err;
    } else {
      return connection;
    }
  });
};

export default pool;
