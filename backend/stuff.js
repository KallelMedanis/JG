const express = require('express');
const router = express.Router();

const stuffCtrl=require('./stuffController')

router.post('/chezNousSend',stuffCtrl.postThingChezNous);
router.post('/domicileSend',stuffCtrl.postThingDomicile);
router.get('/getBase',stuffCtrl.getBase)
module.exports = router;

