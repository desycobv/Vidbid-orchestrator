const express = require("express");
const vidBidController = require("../controllers/VidBidController");

const router = express.Router();

router.get("/health", vidBidController.healthcheck);


module.exports = router;
