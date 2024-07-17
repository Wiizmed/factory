const conn = require("../database/mydatabaseconnection");

const bcrypt = require('bcrypt');

module.exports = {
  

  
      findByUsername: function(username, callback) {
        const sql = 'SELECT * FROM users WHERE username = ?';
        conn.query(sql, [username], function(error, results, fields) {
          callback(error, results); 
        });
      },
    
      addUser: async function(username, password, callback) {
        
        const hashedPassword = await bcrypt.hash(password, 10);
    
        const sql = 'INSERT INTO users (username, password) VALUES (?, ?)';
        conn.query(sql, [username, hashedPassword], function(error, results, fields) {
          callback(error, results);
        });
      }

    };
