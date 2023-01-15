const CardanoWasm = require("@emurgo/cardano-serialization-lib-nodejs");
const fs = require("fs");
const walletService = require("./WalletService");

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
}

module.exports = new CardanoService();


