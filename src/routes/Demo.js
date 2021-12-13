const express = require("express");
const demoController = require("../controllers/DemoController");

const router = express.Router();

router.get("", demoController.getAllDemos);
router.post("", demoController.createDemo);
router.get("/:demoId", demoController.getDemo);
router.put("/:demoId", demoController.updateDemo);
router.patch("/:demoId", demoController.patchDemo);
router.delete("/:demoId", demoController.deleteDemo);


module.exports = router;
