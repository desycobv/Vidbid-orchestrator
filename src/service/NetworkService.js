const cardanoNodeClient = require("../client/CardanoNodeClient");

class NetworkService {
  async getNetwork() {
    return await cardanoNodeClient.networkInfo();
  }
}

module.exports = new NetworkService();
