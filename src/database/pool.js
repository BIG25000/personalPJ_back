const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Pong_2540",
  database: "dearnpa",
});

const execute = async (sql, values) => {
  const [data] = await pool.execute(sql, values);
  return data;
};

module.exports = execute;
