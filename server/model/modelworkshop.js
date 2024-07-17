const conn = require("../database/mydatabaseconnection.js")

module.exports = {

  getAllshop: function (callback) {
    const sql = "SELECT * FROM workshop";
    conn.query(sql, function (error, results) {
      callback(error, results);
    });
  },

  
  getOneshop: function (id, callback) {
    const sql = "SELECT * FROM workshop WHERE id= ?";
    conn.query(sql, [id], function (error, results) {
    callback(error,results)
        
      
    });
  },

  
   addoneworkshop: function (newworkshop, callback) {
    const sql = " INSERT INTO workshop ( classe,factworkers_wId) VALUES (?, ?)";
    conn.query(sql,[newworkshop.classe,newworkshop.factworkers_wId], function (error, results) {
      callback(error,results)
    });
  },
  // addoneworkshop: function (newworkshop, callback) {
  //   const insertSql = "INSERT INTO workshop (classe, factworkers_wId) VALUES (?, ?)";
  //   const alterSql = "ALTER TABLE workshop ADD CONSTRAINT FK_factworkers_wId FOREIGN KEY (factworkers_wId) REFERENCES factworkers (wId)";
  //   conn.query(insertSql,alterSql, [newworkshop.classe, newworkshop.factworkers_wId], function (error, results) {
  //   callback(error,results)
  //   });
  // },




 deleteOneworkshop:(id, callback)=>{
  const sql="DELETE  FROM workshop WHERE id= ?"
  conn.query(sql,id, function(error, result){
    callback(error, result)
  })
}

};











