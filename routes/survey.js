const express = require("express");
const { getSurveys, createSurvey } = require("../controllers/survey");

const router = express.Router();

// Route to get all surveys
router.get("/", getSurveys);

// Route to create a new survey
router.post("/", createSurvey);

module.exports = router;