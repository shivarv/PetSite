// app.js

const express = require("express");
const cors = require("cors");
const mainRoutes = require("./routes/mainRoute");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/", mainRoutes);

module.exports = app;