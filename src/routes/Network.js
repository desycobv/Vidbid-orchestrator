const express = require("express");
const networkController = require("../controllers/NetworkController");

const router = express.Router();

router.get("", networkController.getNetwork);


module.exports = router;
