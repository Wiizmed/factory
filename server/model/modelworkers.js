const conn = require("../database/mydatabaseconnection");

module.exports = {

  getAll: function (callback) {
    const sql = "SELECT * FROM factworkers";
    conn.query(sql, function (error, results, fields) {
      callback(error, results);
    });
  },

  
  getOne: function (id, callback) {
    const sql = "SELECT * FROM factworkers WHERE wId = ?";
    conn.query(sql, [id], function (error, results, fields) {
    callback(error,results)
        
      
    });
  },

  
   add: function (newworker, callback) {
    const sql = "INSERT INTO factworkers (username, gradel,imageurl) VALUES (?, ?,?)";
    conn.query(sql,[newworker.username,newworker.gradel,newworker.imageurl], function (error, results, fields) {
      callback(error,results)
    });
  },


 updateWorkers:(id, values, callback)=>{
  const sql="UPDATE factworkers SET ? WHERE wId=?"
  conn.query(sql, [values, id], function(error, result){
    callback(error, result)
  })
},



 deleteOnew:(id, callback)=>{
  const sql="DELETE  FROM factworkers WHERE wId=?"
  conn.query(sql, id, function(error, result){
    callback(error, result)
  })
}

};