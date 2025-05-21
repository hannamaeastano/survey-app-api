const mongoose = require("mongoose");

const surveySchema = new mongoose.Schema({
    answers: { type: Object, required: true }, // Store answers as a JSON object
    createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Survey", surveySchema);