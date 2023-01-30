const express = require("express");
const cardanoController = require("../controllers/CardanoController");

const router = express.Router();

router.get("/tx/:addr", cardanoController.getTx);
router.post("/tx/submit", cardanoController.submitTx);


module.exports = router;
