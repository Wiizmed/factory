const workers = require("../model/modelworkers.js");
const db = require("../database/db.js");
module.exports = {


  getAll: function (req, res) {
    workers.getAll(function (err, results) {
      if (err) res.status(500).send(err);
      else res.json(results);
    });
  },
  

  addw: function (req, res) {
    const neww = req.body;

    workers.add(neww, function (err, results) {
      if (err) res.status(500).send(err);
      else res.json(results);
    });
  },
  
  getOnew: function (req, res) {
    
    workers.getOne(req.params.wId, function (err, results) {
      if (err) res.status(500).send(err);
      else res.json(results);
    });
  },
  updatew: function (req, res) {
    const w = req.body;
    const wid = req.params.wId;
    workers.updateWorkers([wid, w], function (err, result) {
      if (err) res.status(500).send(err);
      else res.json(result);
    });
  },

  deletew: function (req, res) {
    const idd = req.params.wId;
    workers.deleteOnew(idd, function (err, result) {
      if (err) res.status(500).send(err);
      else res.json(result);
    });
  },
};
