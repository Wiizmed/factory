const conn = require("../database/mydatabaseconnection");

module.exports = {

  getAll: function (callback) {
    const sql = "SELECT * FROM product";
    conn.query(sql, function (error, results, fields) {
      callback(error, results);
    });
  },

  
  getOne: function (name, callback) {
    const sql = "SELECT * FROM product WHERE name= ?";
    conn.query(sql,name, function (error, results, fields) {
    callback(error,results)
        
      
    });
  },

  
   add: function (newp, callback) {
    const sql = "INSERT INTO product (name,imageurl) VALUES (?,?)";
    conn.query(sql,[newp.name,newp.imageurl], function (error, results, fields) {
      callback(error,results)
    });
  },

  deleteOnep:(name, callback)=>{
    const sql="DELETE  FROM product WHERE name=?"
    conn.query(sql, name, function(error, result){
      callback(error, result)
    })
  }



}