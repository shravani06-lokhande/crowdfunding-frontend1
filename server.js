const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

// Initialize Express App
const app = express();

// Middleware
app.use(cors());
app.use(express.json()); // Body parser

// MongoDB Connection
mongoose.connect("mongodb://localhost:27017/crowdfunding", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log("✅ MongoDB Connected Successfully");
})
.catch(err => {
    console.error("❌ MongoDB Connection Error:", err);
});

// Routes
const userRoutes = require("./routes/userRoutes");
const campaignRoutes = require("./routes/campaignRoutes");

app.use("/api/users", userRoutes);
app.use("/api/campaigns", campaignRoutes);

// Start Server
const PORT = 5000;
app.listen(5000, () => {
    console.log("🚀 Server running on port 5000");
});
