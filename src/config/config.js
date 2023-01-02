class Configuration {
  blockFrostUrl() {
    return process.env.BLOCKFROST_API_URL || "https://cardano-testnet.blockfrost.io"
  }
  blockFrostKey() {
    return process.env.BLOCKFROST_API_KEY || "preprodLtmKAJvEjCDqePD4XLLpCqciaszcrgI0"
  }
  rosettaUrl() {
    return process.env.BLOCKFROST_API_URL || "https://rosetta-api.testnet.dandelion.link"
  }

  timeout() {
    return Number(process.env.TIMEOUT);
  }
}

module.exports = new Configuration();
