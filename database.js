const mysql = require('mysql');

const config = require('./config');

const db = mysql.createConnection({
  host: config.dbHost,
  user: config.dbUser,
  password: config.dbPassword,
  database: config.database
});

db.connect(err => {
  if (err) throw err;
  console.log("DB Connected");
});

module.exports = db;
