const express = require("express");
const demoController = require("../controllers/DemoController");

const router = express.Router();

router.get("", demoController.getDemo);


module.exports = router;
