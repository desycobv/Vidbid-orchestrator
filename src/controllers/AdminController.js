const adminService = require("../service/AdminService");

class PabController {
  async mint(req, res, next) {
    try {
      req.data = await adminService.mint(req.body);
      next();
    } catch (err) {
      next(err);
    }
  }

  async status(req, res, next) {
    try {
      req.data = await adminService.status(req.body);
      next();
    } catch (err) {
      next(err);
    }
  }
  async payday(req, res, next) {
    try {
      req.data = await adminService.payday(req.body);
      next();
    } catch (err) {
      next(err);
    }
  }
  async destroy(req, res, next) {
    try {
      req.data = await adminService.destroy(req.body);
      next();
    } catch (err) {
      next(err);
    }
  }
}

module.exports = new PabController();
