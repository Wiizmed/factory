const product = require("../model/modelproduct.js");
const db = require("../database/db.js");
module.exports = {


  getAll: function (req, res) {
    product.getAll(function (err, results) {
      if (err) res.status(500).send(err);
      else res.json(results);
    });
  },
  

  addp: function (req, res) {
    const newp = req.body;

    product.add(newp, function (err, results) {
      if (err) res.status(500).send(err);
      else res.json(results);
    });
  },
  
  getOnep: function (req, res) {
    
    product.getOne(req.params.name, function (err, results) {
      if (err) res.status(500).send(err);
      else res.json(results);
    });
  },
  deleteOnep: function (req, res) {
    const name = req.params.name;
    product.deleteOnep(name, function (err, result) {
      if (err) res.status(500).send(err);
      else res.json(result);
    });
  },


 
};