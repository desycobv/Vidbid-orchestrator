const demoService = require("../service/DemoService");
const { logger } = require("../utils/logger/logger");

class DemoController {
  async getAllDemos(req, res, next) {
    try {
      req.data = await demoService.getAllDemos();
      next();
    } catch (err) {
      next(err);
    }
  }
  async getDemo(req, res, next) {
    try {
      req.data = await demoService.getDemo(req.params.demoId);
      next();
    } catch (err) {
      next(err);
    }
  }
  async createDemo(req, res, next) {
    try {
      req.data = await demoService.createDemo(req.body);
      next();
    } catch (err) {
      next(err);
    }
  }
  async updateDemo(req, res, next) {
    try {
      req.data = await demoService.updateDemo(req.params.demoId, req.body);
      next();
    } catch (err) {
      next(err);
    }
  }
  async patchDemo(req, res, next) {
    try {
      req.data = await demoService.patchDemo(req.params.demoId, req.body);
      next();
    } catch (err) {
      next(err);
    }
  }
  async deleteDemo(req, res, next) {
    try {
      req.data = await demoService.deleteDemo(req.params.demoId);
      next();
    } catch (err) {
      next(err);
    }
  }

}

module.exports = new DemoController();
