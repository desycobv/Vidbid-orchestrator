const express = require("express");
const pabController = require("../controllers/PabController");

const router = express.Router();

router.post("/instance", pabController.createInstance);
router.get("/:instanceId/status", pabController.status);
router.post("/:instanceId/init", pabController.init);
router.post("/:instanceId/open", pabController.open);
router.post("/:instanceId/bid", pabController.bid);
router.post("/:instanceId/grab", pabController.grab);


module.exports = router;
