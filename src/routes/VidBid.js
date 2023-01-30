const express = require("express");
const vidBidController = require("../controllers/VidBidController");

const router = express.Router();

router.get("/health", vidBidController.healthcheck);
router.post("/upload", vidBidController.upload);


module.exports = router;
