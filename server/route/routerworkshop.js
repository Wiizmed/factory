const express = require('express');
const router = express.Router();


const {getAllsh,addwsh,getOnesh,deletesh} = require('../controller/workshopcontroller.js');




router.get('/', getAllsh);

router.get('/:wId', getOnesh);

router.post('/add',addwsh);

router.delete('/delete/:wId',deletesh)



module.exports = router;