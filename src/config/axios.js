const axios = require("axios");
const configuration = require("./config");

const timeout = configuration.timeout();

const cardanoNodeApi = axios.create({
  baseURL: configuration.cardanoNodeUrl(),
  timeout
});
const cardanoPabApi = axios.create({
  baseURL: configuration.cardanoPABUrl(),
  timeout
});

module.exports = {
  cardanoNodeApi,
  cardanoPabApi
};
