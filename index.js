// [SECTION] Dependencies and Modules
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

// [SECTION] Routes
const surveyRoutes = require("./routes/survey");

// [SECTION] Environment Setup
const app = express();
const PORT = process.env.PORT || 5000;
const corsOptions = {
    origin: ["http://localhost:3000",
        'https://survey-app-api-ypn3.onrender.com'],
    credentials: true,
    optionsSuccessStatus: 200,
};

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));

// [SECTION] Database Connection
mongoose.connect(process.env.MONGODB_STRING, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log("Now connected to MongoDB Atlas."))
    .catch((err) => console.error("MongoDB connection error:", err));

// [SECTION] Backend Routes
app.use("/surveys", surveyRoutes);

// [SECTION] Error Handling Middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: "Internal Server Error", error: err.message });
});

// [SECTION] Server Gateway Response
if (require.main === module) {
    app.listen(PORT, () => {
        console.log(`API is now online on port ${PORT}`);
    });
}

// Export the app and mongoose for testing or external use
module.exports = { app, mongoose };