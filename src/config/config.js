class Configuration {
  cardanoNodeUrl() {
    return process.env.CARDANO_NODE_BASE_URL
  }
  cardanoPABUrl() {
    return process.env.CARDANO_PAB_BASE_URL
  }
  blockFrostUrl() {
    return process.env.BLOCKFROST_API_URL
  }
  blockFrostKey() {
    return process.env.BLOCKFROST_API_KEY
  }
  platformWalletPkh() {
    return process.env.PLATFORM_WALLET_PKH;
  }
  platformWalletId() {
    return process.env.PLATFORM_WALLET_ID;
  }


  timeout() {
    return Number(process.env.TIMEOUT);
  }
}

module.exports = new Configuration();
