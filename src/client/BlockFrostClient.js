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

  async getTx(addr) {
    try {
      const response = await blockFrostApi.get(`/api/v0/addresses/${addr}/utxos`)
      return response.data;
    } catch (err) {
      logError(err, "Couldn't perform address tx lookup.");
      throw new ClientError("Couldn't perform address tx lookup.", 400);
    }
  }
  async submitTx(signedTx) {
    try {
      const response = await blockFrostApi.post(`/api/v0/tx/submit`, signedTx, {
        headers: {
          'content-type': 'application/cbor'
        }
      });
      return response.data;
    } catch (err) {
      console.log(err)
      logError(err, "Couldn't submit tx.");
      throw new ClientError("Couldn't submit tx.", 400);
    }
  }

}

module.exports = new BlockFrostClient();
