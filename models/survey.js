const mongoose = require('mongoose');

const submissionSchema = new mongoose.Schema({
  answers: {
    Q1: { type: String, required: true },
    Q2: { type: String, required: true },
    Q3: { type: String, required: true }
  }
});

module.exports = mongoose.model('Survey', submissionSchema);