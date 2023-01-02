const axios = require("axios");
const configuration = require("./config");
const { logAxiosRequest, logAxiosResponse } = require("../utils/logger/logger");

const timeout = configuration.timeout();

const rosettaApi = axios.create({
    baseURL: configuration.rosettaUrl(),
    timeout
});


module.exports = {
    rosettaApi
};