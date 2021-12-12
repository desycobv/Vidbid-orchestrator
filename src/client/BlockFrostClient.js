const { logError } = require("../utils/logger/logger");
const ClientError = require("../utils/ClientError");
const { BlockFrostAPI } = require("@blockfrost/blockfrost-js");

const API = new BlockFrostAPI({
  projectId: "testnet7OXo57luqDciae8BBxhoO8K6mqaO7A2L", // see: https://blockfrost.io
});

class BlockFrostClient {
  async getNetwork() {
    try {
      const response = await API.health();
      console.log(response)
    } catch (err) {
      logError(err, "Couldn't perform health check.");
      throw new ClientError("Couldn't perform health check.", 400);
    }
  }
}

module.exports = new BlockFrostClient();
