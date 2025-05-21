const Survey = require('../models/survey');

// Create a survey (core functionality)
exports.createSurvey = async (req, res) => {
    try {
      console.log("Request body:", req.body); // Debug: Log the entire request body
  
      if (!req.body) {
        return res.status(400).json({ 
          message: "Request body is missing" 
        });
      }
  
      const { answers } = req.body;
  
      if (!answers) {
        return res.status(400).json({ 
          message: "Field 'answers' is required in the request body" 
        });
      }
  
      // ...rest of the code
    } catch (error) {
      console.error("Error details:", error);
      res.status(500).json({ 
        message: "Error creating survey",
        error: error.message 
      });
    }
  };

// Get all surveys
exports.getSurveys = async (req, res) => {
  try {
    const surveys = await Survey.find(); // Fetch all surveys from the database
    res.status(200).json({
      message: "Surveys fetched successfully!",
      data: surveys
    });
  } catch (error) {
    console.error("Error fetching surveys:", error); // Log the full error
    res.status(500).json({
      message: "Error fetching surveys",
      error: error.message // Include error details
    });
  }
};