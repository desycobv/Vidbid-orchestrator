const { mnemonicToEntropy } = require( "bip39");
const CardanoWasm = require("@emurgo/cardano-serialization-lib-nodejs");

const entropy = mnemonicToEntropy(
  [ "fuel", "erode", "cotton", "pole", "unit", "grace", "forum", "shed", "solid", "corn", "nose", "play", "exit", "liquid", "case" ].join(' ')
);


class WalletService{
  getPrivateKey (){
    const keyDetails = this.getKeyDetails();
    return keyDetails.privateKey;
  }
  getPublicKey(){

    const keyDetails = this.getKeyDetails();

    return keyDetails.publicKey;

  }
  getBaseAddress(){
    const keyDetails = this.getKeyDetails()
    return CardanoWasm.BaseAddress.new(
      CardanoWasm.NetworkInfo.testnet().network_id(),
      CardanoWasm.StakeCredential.from_keyhash(keyDetails.utxoPubKey.to_raw_key().hash()),
      CardanoWasm.StakeCredential.from_keyhash(keyDetails.stakeKey.to_raw_key().hash()),
    );
  }

  getKeyDetails(){
    const rootKey = CardanoWasm.Bip32PrivateKey.from_bip39_entropy(
      Buffer.from(entropy, 'hex'),
      Buffer.from(''),
    );
    const privateKey = rootKey.to_raw_key();
    const publicKey = rootKey.to_public().to_raw_key();
    const accountKey = rootKey
      .derive(this.harden(1852)) // purpose
      .derive(this.harden(1815)) // coin type
      .derive(this.harden(0)); // account #0

    const utxoPubKey = accountKey
      .derive(0) // external
      .derive(0)
      .to_public();

    const stakeKey = accountKey
      .derive(2) // chimeric
      .derive(0)
      .to_public();
    return { privateKey, publicKey, utxoPubKey, stakeKey }
  }

  harden(num){
    return 0x80000000 + num;
  }
}

module.exports = new WalletService();