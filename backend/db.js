const Pool = require("pg").Pool;

const pool = new Pool({
  user: "postgres",
  password: "preeti",
  host: "localhost",
  port: 5432,
  database: "hostel"
});

pool.on("error", (error, client) => {
  console.log(error);
});

module.exports = {
  pool
};
