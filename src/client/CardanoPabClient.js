const { cardanoPabApi } = require("../config/axios");
const { logError } = require("../utils/logger/logger");
const ClientError = require("../utils/ClientError");

class CardanoPabClient {
  async createVidBidInstance(body) {
    try {
      const url = `/api/contract/activate`
      const response = await cardanoPabApi.post(url, body);
      return response.data.unContractInstanceId;
    } catch (err) {
      logError(err, "Couldn't create pab instance.");
      throw new ClientError("Couldn't create pab instance.", 400);
    }
  }
  async stopVidBidInstance(instanceId) {
    try {
      const url = `/api/contract/instance/${instanceId}/stop`
      await cardanoPabApi.put(url);
    } catch (err) {
      logError(err, "Couldn't create pab instance.");
      throw new ClientError("Couldn't create pab instance.", 400);
    }
  }

  async init(instanceId, body) {
    try {
      const url = `/api/contract/instance/${instanceId}/endpoint/init`
      await cardanoPabApi.post(url, body);
    } catch (err) {
      logError(err, "Couldn't init pab.");
      throw new ClientError("Couldn't init pab.", 400);
    }
  }
  async mint(instanceId, body) {
    try {
      const url = `/api/contract/instance/${instanceId}/endpoint/mint`
      await cardanoPabApi.post(url, body);
    } catch (err) {
      logError(err, "Couldn't mint on pab.");
      throw new ClientError("Couldn't mint on pab.", 400);
    }
  }
  async open(instanceId, body) {
    try {
      const url = `/api/contract/instance/${instanceId}/endpoint/open`
      await cardanoPabApi.post(url, body);
    } catch (err) {
      logError(err, "Couldn't open on pab.");
      throw new ClientError("Couldn't open on pab.", 400);
    }
  }
  async bid(instanceId, body) {
    try {
      const url = `/api/contract/instance/${instanceId}/endpoint/bid`
      await cardanoPabApi.post(url, body);
    } catch (err) {
      logError(err, "Couldn't bid on pab.");
      throw new ClientError("Couldn't bid on pab.", 400);
    }
  }
  async grab(instanceId, body) {
    try {
      const url = `/api/contract/instance/${instanceId}/endpoint/grab`
      await cardanoPabApi.post(url, body);
    } catch (err) {
      logError(err, "Couldn't grab on pab.");
      throw new ClientError("Couldn't grab on pab.", 400);
    }
  }
  async payday(instanceId, body) {
    try {
      const url = `/api/contract/instance/${instanceId}/endpoint/payday`
      await cardanoPabApi.post(url, body);
    } catch (err) {
      logError(err, "Couldn't perform payday on pab.");
      throw new ClientError("Couldn't perform payday on pab.", 400);
    }
  }
  async destroy(instanceId, body) {
    try {
      const url = `/api/contract/instance/${instanceId}/endpoint/destroy`
      await cardanoPabApi.post(url, body);
    } catch (err) {
      logError(err, "Couldn't perform destroy on pab.");
      throw new ClientError("Couldn't perform destroy on pab.", 400);
    }
  }

  async lookup(instanceId, body) {
    try {
      const url = `/api/contract/instance/${instanceId}/endpoint/lookup`
      await cardanoPabApi.post(url, body);
    } catch (err) {
      logError(err, "Couldn't lookup pab.");
      throw new ClientError("Couldn't lookup pab.", 400);
    }
  }
  async status(instanceId) {
    try {
      const url = `/api/contract/instance/${instanceId}/status`
      const response = await cardanoPabApi.get(url);
      return response.data
    } catch (err) {
      logError(err, "Couldn't get pab status.");
      throw new ClientError("Couldn't get pab status.", 400);
    }
  }

  async createWallet() {
    try {
      const url = `/wallet/create`
      const response = await cardanoPabApi.post(url);
      return response.data
    } catch (err) {
      logError(err, "Couldn't create wallet.");
      throw new ClientError("Couldn't create wallet.", 400);
    }
  }

}

module.exports = new CardanoPabClient();
