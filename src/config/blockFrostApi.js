const axios = require("axios");
const configuration = require("./config");
const { logAxiosRequest, logAxiosResponse } = require("../utils/logger/logger");

const timeout = configuration.timeout();

const blockFrostApi = axios.create({
    baseURL: configuration.blockFrostUrl(),
    timeout
});

blockFrostApi.defaults.headers.common['project_id'] = configuration.blockFrostKey();


module.exports = {
    blockFrostApi
};