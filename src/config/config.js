class Configuration {
  cardanoNodeUrl() {
    return process.env.CARDANO_NODE_BASE_URL
  }
  blockFrostUrl() {
    return process.env.BLOCKFROST_API_URL
  }
  blockFrostKey() {
    return process.env.BLOCKFROST_API_KEY
  }

  timeout() {
    return Number(process.env.TIMEOUT);
  }
}

module.exports = new Configuration();
