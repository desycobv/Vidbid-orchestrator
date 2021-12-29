const pabService = require("../service/PabService");

class PabController {
  async createInstance(req, res, next) {
    try {
      req.data = await pabService.createInstance(req.body);
      next();
    } catch (err) {
      next(err);
    }
  }
  async init(req, res, next) {
    try {
      req.data = await pabService.init(req.params.instanceId, req.body);
      next();
    } catch (err) {
      next(err);
    }
  }
  async mint(req, res, next) {
    try {
      req.data = await pabService.mint(req.params.instanceId, req.body);
      next();
    } catch (err) {
      next(err);
    }
  }
  async open(req, res, next) {
    try {
      req.data = await pabService.open(req.params.instanceId, req.body);
      next();
    } catch (err) {
      next(err);
    }
  }
  async bid(req, res, next) {
    try {
      req.data = await pabService.bid(req.params.instanceId, req.body);
      next();
    } catch (err) {
      next(err);
    }
  }
  async grab(req, res, next) {
    try {
      req.data = await pabService.grab(req.params.instanceId, req.body);
      next();
    } catch (err) {
      next(err);
    }
  }
  async status(req, res, next) {
    try {
      req.data = await pabService.status(req.params.instanceId, req.body);
      next();
    } catch (err) {
      next(err);
    }
  }

}

module.exports = new PabController();
