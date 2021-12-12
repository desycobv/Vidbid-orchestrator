const { cardanoNodeApi } = require("../config/axios");
const { logError } = require("../utils/logger/logger");
const ClientError = require("../utils/ClientError");

class CardanoNodeClient {
  async networkInfo() {
    try {
      const url = `/v2/wallets/00017652db349e9f634e51d05b8c9c1b899967fd7c339c4281bc55e24dc43ddb528c2b99bd777c64de1b4fa7b88a1fdfa9ca7783396a24c7c7`
      const response = await cardanoNodeApi.get(url);
      console.log(response)
    } catch (err) {
      logError(err, "Couldn't fetch users.");
      throw new ClientError("Couldn't fetch users.", 400);
    }
  }
}

module.exports = new CardanoNodeClient();
