
const mysql=require('mysql2');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');

// // "localhost",
// "root", 
// "factory"

const connection = mysql.createConnection({
  host: "localhost",
  user:"root",
  password: "Meddatabase123" ,
  database:"factory"
});


connection.connect((err) => {
  if (err) console.log(err);
  else console.log("db is connected");
});
module.exports = connection;