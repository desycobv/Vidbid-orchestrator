const axios = require("axios");
const configuration = require("./config");
const { logAxiosRequest, logAxiosResponse } = require("../utils/logger/logger");

const timeout = configuration.timeout();

const cardanoNodeApi = axios.create({
  baseURL: configuration.cardanoNodeUrl(),
  timeout
});

module.exports = {
  cardanoNodeApi
};
