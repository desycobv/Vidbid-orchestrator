const demoService = require("../service/DemoService");
const { logger } = require("../utils/logger/logger");

class DemoController {
  async getDemo(req, res, next) {
    try {
      req.data = await demoService.getDemo();
      next();
    } catch (err) {
      next(err);
    }
  }

}

module.exports = new DemoController();
