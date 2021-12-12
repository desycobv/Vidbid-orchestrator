const networkService = require("../service/NetworkService");
const { logger } = require("../utils/logger/logger");

class NetworkController {
  async getNetwork(req, res, next) {
    try {
      req.data = await networkService.getNetwork();
      next();
    } catch (err) {
      next(err);
    }
  }

}

module.exports = new NetworkController();
