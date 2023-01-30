const CardanoWasm = require("@emurgo/cardano-serialization-lib-nodejs");
const fs = require("fs");
const walletService = require("./WalletService");
const blockFrostClient = require("../client/BlockFrostClient");

class CardanoService {

  async signTx(tx){
    try{
      const rawTx = CardanoWasm.Transaction.from_bytes(Buffer.from(tx, 'hex'));
      const transactionWitnessSet = rawTx.witness_set();

      const vkeyWitnesses = transactionWitnessSet.vkeys() || CardanoWasm.Vkeywitnesses.new();

      const txHash = CardanoWasm.hash_transaction(rawTx.body());
      const vkey = CardanoWasm.make_vkey_witness(txHash, walletService.getPrivateKey());
      vkeyWitnesses.add(vkey);
      transactionWitnessSet.set_vkeys(vkeyWitnesses);
      return CardanoWasm.Transaction.new(
        rawTx.body(),
        transactionWitnessSet
      ).to_hex();
    }catch (e) {
      console.log(e)
      throw e;
    }
  };
  async getTx(addr) {
    return await blockFrostClient.getTx(addr)
  }

  async submitTx({ signedTx }){
    console.log(signedTx)
    return blockFrostClient.submitTx(signedTx)
  }
}

module.exports = new CardanoService();


