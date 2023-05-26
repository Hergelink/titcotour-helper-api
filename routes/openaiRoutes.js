const express = require('express');
const { translateGenerator } = require('../controllers/translate');
const { translateToTurkish } = require('../controllers/translate-to-turkish');
const { grammerChecker } = require('../controllers/grammer-check');
const { tourAdvice } = require('../controllers/tour-advice');

const router = express.Router();

router.post('/translate', translateGenerator);
router.post('/translate-to-turkish', translateToTurkish);
router.post('/grammer-check', grammerChecker);
router.post('/tour-advisor', tourAdvice);


module.exports = router;