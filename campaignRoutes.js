const express = require("express");
const router = express.Router();
const Campaign = require("../models/Campaign");

// Create a Campaign
router.post("/create", async (req, res) => {
    try {
        const { title, description, goalAmount, creator } = req.body;
        const campaign = new Campaign({ title, description, goalAmount, creator });
        await campaign.save();
        res.status(201).json({ message: "Campaign Created Successfully" });
    } catch (error) {
        res.status(500).json({ error: "Error Creating Campaign" });
    }
});

// Get All Campaigns
router.get("/", async (req, res) => {
    try {
        const campaigns = await Campaign.find();
        res.json(campaigns);
    } catch (error) {
        res.status(500).json({ error: "Error Fetching Campaigns" });
    }
});

module.exports = router;
