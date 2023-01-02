const blockFrostClient = require("../client/BlockFrostClient");
const rosettaClient = require("../client/RosettaClient");

class VidBidService {
    async healthcheck() {
        // await blockFrostClient.healthcheck();
        return await rosettaClient.getBlock(100);
    }
}

module.exports = new VidBidService();