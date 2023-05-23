const express = require('express');
const { translateGenerator } = require('../controllers/openaiController');
const router = express.Router();

router.post('/translate', translateGenerator);

module.exports = router;