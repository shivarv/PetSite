// mainRoutes.js

const express = require("express");
const router = express.Router();
const { getHome } = require("../controllers/mainController");

// Define the routes
router.get("/", getHome);

module.exports = router;