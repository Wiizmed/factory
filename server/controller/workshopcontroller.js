const db=require('../database/db.js');
const workshop = require("../model/modelworkshop.js");

module.exports={

    getAllsh: function (req, res) {
        workshop.getAllshop(function (err, results) {
          if (err) res.status(500).send(err);
          else res.json(results);
        });
      },
      
    
      addwsh: function (req, res) {
        const neww = req.body;
    
        workshop.addoneworkshop(neww, function (err, results) {
          if (err) res.status(500).send(err);
          else res.json(results);
        });
      },
      
      getOnesh: function (req, res) {
        
        workshop.getOneshop(req.params.id, function (err, results) {
          if (err) res.status(500).send(err);
          else res.json(results);
        });
      },
      deletesh: function (req, res) {
        const idd = req.params.id;
        workshop.deleteOneworkshop(idd, function (err, result) {
          if (err) res.status(500).send(err);
          else res.json(result);
        });
      },


};