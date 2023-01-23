const blockFrostClient = require("../client/BlockFrostClient");
const youtubeService = require("./YoutubeService");
const cardanoService = require("./CardanoService");

class VidBidService {
    async healthcheck() {
        // await blockFrostClient.healthcheck();
    }
    async getTx(addr) {
        const utxos = await blockFrostClient.getTx(addr);
        console.log(utxos);
        return utxos
    }
    async upload({unSignedTx, userChangeAddress, vidDetails}) {
        // await blockFrostClient.healthcheck();
        const vidId = youtubeService.upload(vidDetails)
        const signedTx =await cardanoService.signTx(unSignedTx);
        return {
            signedTx,
            vidId
        };
    }
}

module.exports = new VidBidService();