// routes/barrelRoutes.js

const express = require("express");
const router = express.Router();
const { submitBarrelData } = require("../controllers/barrelController"); // Import controller

// POST route to handle barrel data submission
router.post("/", submitBarrelData);

module.exports = router;