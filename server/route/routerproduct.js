const express = require('express');
const router = express.Router();


const {getAll,addp,getOnep,deleteOnep } = require('../controller/controllerproduct.js');
const { route } = require('./routerauthentification.js');




router.get('/', getAll);

router.get('/:name', getOnep);

router.post('/add',addp);

router.delete('/:name',deleteOnep);






module.exports = router;