const express = require('express');
const router = express.Router();
const surveyController = require('../controllers/survey');

// Existing routes...
router.post('/submit', surveyController.submitSurvey);

module.exports = router;