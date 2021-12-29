const express = require("express");
const adminController = require("../controllers/AdminController");

const router = express.Router();

router.get("/status", adminController.status);
router.post("/mint", adminController.mint);
router.post("/payday", adminController.payday);
router.post("/destroy", adminController.destroy);


module.exports = router;
