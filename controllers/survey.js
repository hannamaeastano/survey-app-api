const Submission = require('../models/survey'); // Import the Submission model

// Submit survey answers
exports.submitSurvey = async (req, res) => {
  try {
    const { Q1, Q2, Q3 } = req.body;

    // Validate that all questions are answered
    if (!Q1 || !Q2 || !Q3) {
      return res.status(400).json({
        message: "All questions (Q1, Q2, Q3) must be answered"
      });
    }

    // Validate that answers are within the range "1" to "5"
    if (!Q1 || !Q2 || !Q3) {
        return res.status(400).json({
          message: "All questions (Q1, Q2, Q3) must be answered"
        });
      }
      
      const validAnswers = ["1", "2", "3", "4", "5"];
      if (![Q1, Q2, Q3].every(answer => validAnswers.includes(answer))) {
        return res.status(400).json({
          message: "Answers must be values between '1' and '5'"
        });
      }

    // Save the submission to the database
    const newSubmission = new Submission({ answers: { Q1, Q2, Q3 } });
    await newSubmission.save();

    res.status(201).json({
      message: "Survey submitted successfully!",
      data: newSubmission
    });
  } catch (error) {
    console.error("Error submitting survey:", error);
    res.status(500).json({
      message: "Error submitting survey",
      error: error.message
    });
  }
};