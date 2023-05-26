const express = require('express');
const { translateGenerator } = require('../controllers/translate');
const { translateToTurkish } = require('../controllers/translate-to-turkish');
const { grammerChecker } = require('../controllers/grammer-check');

const router = express.Router();

router.post('/translate', translateGenerator);
router.post('/translate-to-turkish', translateToTurkish);
router.post('/grammer-check', grammerChecker);


module.exports = router;