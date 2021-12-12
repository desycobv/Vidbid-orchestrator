const express = require("express");

const healthRouter = express.Router();
healthRouter.get("/health", (req, res) => res.json({status: "UP"}));

module.exports = healthRouter;
