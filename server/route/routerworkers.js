const express = require('express');
const router = express.Router();


const {getAll,addw,getOnew,updatew,deletew  } = require('../controller/workerscontroller.js');




router.get('/', getAll);
router.post('/add',addw);

router.get('/:wId', getOnew);


router.put('/:wId',updatew);

router.delete('/:wId',deletew)



module.exports = router;