const express = require('express');
const router = express.Router();
const pollingUnit = require('../controllers/pollingUnit');

router.get('/',pollingUnit.index);

router.get('/polling_unit',pollingUnit.getPollingUnit);

router.get('/lga',pollingUnit.getLga);

router.get('/polling_unit/result/:id',pollingUnit.getPollingUnitLga);



module.exports = router;