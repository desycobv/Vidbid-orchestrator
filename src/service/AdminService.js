const pabClient = require('../client/CardanoPabClient');
const pabRequestWrapper = require('../mappers/PabRequestWrapper');
const pabResponseWrapper = require('../mappers/PabResponseWrapper');
const configuration = require("../config/config");

class AdminService {
  constructor() {
    this.platformWallet = {
      walletId: configuration.platformWalletId(),
      walletPkh: configuration.platformWalletPkh()
    }
    this.instanceId = null
  }

  async createInstance() {
    if(this.instanceId === null ){
      const walletId = this.platformWallet.walletId;
      const pabBody = pabRequestWrapper.vidBidInstanceCreationBody({ walletId })
      this.instanceId =  await pabClient.createVidBidInstance(pabBody);
      console.log(this.instanceId)
    }
    return this.instanceId
  }

  async status() {
    const instanceId = await this.createInstance();
    const resp = await pabClient.status(instanceId);
    await pabClient.stopVidBidInstance(instanceId);
    return pabResponseWrapper.mapStatusBody(resp);
  }

  async mint(body) {
    const instanceId = await this.createInstance();
    const pabBody = pabRequestWrapper.mintBody(body)
    console.log(pabBody)
    await pabClient.mint(instanceId, pabBody);
  }

  async payday(body) {
    const instanceId = await this.createInstance();
    const pabBody = pabRequestWrapper.paydayBody(body)
    await pabClient.payday(instanceId, pabBody);
  }
  async destroy(body) {
    const instanceId = await this.createInstance();
    const pabBody = pabRequestWrapper.destroyBody(body)
    await pabClient.destroy(instanceId, pabBody);
  }

  async lookup(body) {
    const instanceId = await this.createInstance();
    const pabBody = pabRequestWrapper.lookupBody(body)
    await pabClient.lookup(instanceId, pabBody)
  }
}

module.exports = new AdminService();