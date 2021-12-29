const pabClient = require('../client/CardanoPabClient');
const pabRequestWrapper = require('../mappers/PabRequestWrapper');
const pabResponseWrapper = require('../mappers/PabResponseWrapper');
const configuration = require("../config/config");


class PabService {
  async createInstance(body) {
    const pabBody = pabRequestWrapper.vidBidInstanceCreationBody(body)
    const instanceId =  await pabClient.createVidBidInstance(pabBody);
    return {
      instanceId
    };
  }

  async status(instanceId) {
    const resp = await pabClient.status(instanceId);
    return pabResponseWrapper.mapStatusBody(resp);
  }

  async init(instanceId, body) {
    const platformPkh = configuration.platformWalletPkh()
    const pabBody = pabRequestWrapper.initBody(body,platformPkh)
    await pabClient.init(instanceId, pabBody);
  }

  async mint(instanceId, body) {
    const pabBody = pabRequestWrapper.mintBody(body)
    await pabClient.mint(instanceId, pabBody);
  }
  async open(instanceId, body) {
    const pabBody = pabRequestWrapper.openBody(body)
    await pabClient.open(instanceId, pabBody);
  }
  async bid(instanceId, body) {
    const pabBody = pabRequestWrapper.bidBody(body)
    await pabClient.bid(instanceId, pabBody);  }
  async grab(instanceId, body) {
    const pabBody = pabRequestWrapper.grabBody(body)
    await pabClient.grab(instanceId, pabBody);
  }
  async payday(instanceId, body) {
    const pabBody = pabRequestWrapper.paydayBody(body)
    await pabClient.payday(instanceId, pabBody);
  }
  async destroy(instanceId, body) {
    const pabBody = pabRequestWrapper.destroyBody(body)
    await pabClient.destroy(instanceId, pabBody);
  }
  async lookup(instanceId, body) {
    const pabBody = pabRequestWrapper.lookupBody(body)
    await pabClient.lookup(instanceId, pabBody)
  }
}

module.exports = new PabService();