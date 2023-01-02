const { logError } = require("../utils/logger/logger");
const ClientError = require("../utils/ClientError");
const {rosettaApi}  = require('../config/rosettaApi')

const network_identifier = {
    blockchain: "cardano",
    network: "testnet"
}
class RosettaClient {
    async getBlock(index) {
        try {
            const response = await rosettaApi.post("/block", {
                network_identifier,
                block_identifier: {
                    index
                }
            });
            return response.data;
        } catch (err) {
            logError(err, "Couldn't perform health check.");
            throw new ClientError("Couldn't perform health check.", 400);
        }
    }
}

module.exports = new RosettaClient();