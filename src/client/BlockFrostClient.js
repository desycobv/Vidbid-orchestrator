const { logError } = require("../utils/logger/logger");
const ClientError = require("../utils/ClientError");
const {blockFrostApi}  = require('../config/blockFrostApi')

class BlockFrostClient {
  async healthcheck() {
    try {
      const response = await blockFrostApi.get("/api/v0/health")
      return response.data;
    } catch (err) {
      logError(err, "Couldn't perform health check.");
      throw new ClientError("Couldn't perform health check.", 400);
    }
  }
}

module.exports = new BlockFrostClient();
