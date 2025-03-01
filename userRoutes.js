const express = require("express");
const router = express.Router();
const User = require("../models/User");

// Register User
router.post("/register", async (req, res) => {
    try {
        const { name, email, password } = req.body;
        const user = new User({ name, email, password });
        await user.save();
        res.status(201).json({ message: "User Registered Successfully" });
    } catch (error) {
        res.status(500).json({ error: "Error Registering User" });
    }
});

// Login User
router.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email, password });
        if (!user) return res.status(400).json({ error: "Invalid Credentials" });
        res.json({ message: "Login Successful", user });
    } catch (error) {
        res.status(500).json({ error: "Error Logging In" });
    }
});

module.exports = router;
