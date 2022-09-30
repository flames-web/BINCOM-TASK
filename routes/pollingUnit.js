const express = require('express');
const router = express.Router();
const pollingUnit = require('../controllers/pollingUnit');
const catchAsync = require('../utils/catchAsync');

router.get('/',catchAsync(pollingUnit.index));

router.get('/polling_unit',catchAsync(pollingUnit.getPollingUnit));

router.get('/lga',catchAsync(pollingUnit.getLga));

router.get('/new',catchAsync(pollingUnit.newPu));

router.post('/new',catchAsync(pollingUnit.postPu));

router.get('/lga/:id',catchAsync(pollingUnit.getPuLga));

router.get('/polling_unit/result/:id',catchAsync(pollingUnit.getPollingUnitLga));


module.exports = router;