const pino = require("pino");
const { X_REQUEST_ID } = require("../tracing/tracing");

let prettyPrinting = false;
if (process.env.LOG_PRETTY_PRINT === "true") {
  prettyPrinting = { translateTime: true };
}

const level = (process.env.LOG_LEVEL && process.env.LOG_LEVEL.toLowerCase()) || "info";

const logger = pino({
  name: "theglue-azure-adapter",
  level,
  prettyPrint: prettyPrinting,
  messageKey: "message",
  useLevelLabels: true
});

const logError = (error, message) => {
  logger.error(message);
  logger.error({
    name: error.name,
    message: error.message,
    stack: error.stack
  });
};

const logData = data => {
  if (!data) {
    return {};
  }
  if ((data.type && data.type.toLowerCase() === "buffer") || Buffer.isBuffer(data)) {
    return "<FILE-CONTENTS>";
  }
  // eslint-disable-next-line no-underscore-dangle
  if (data._streams) {
    return {
      ...data,
      _streams: ["<FILE-CONTENTS>"]
    };
  }
  return data;
};

const logRequest = (req, message) => {
  if (process.env.LOG_LEVEL === "debug") {
    logger.debug({
      message,
      method: req.method,
      headers: req.headers,
      url: req.url,
      data: logData(req.body),
      hostname: req.hostname,
      "x-request-id": req.headers[X_REQUEST_ID]
    });
  } else {
    logger.info({
      message: `Request: ${req.method} ${req.url}`,
      "x-request-id": req.headers[X_REQUEST_ID]
    });
  }
};

const logResponse = (req, res, message) => {
  if (process.env.LOG_LEVEL === "debug") {
    logger.debug({
      message,
      headers: res.headers,
      url: req.url,
      data: logData(req.data),
      hostname: req.hostname,
      statusCode: res.statusCode,
      "x-request-id": req.headers[X_REQUEST_ID]
    });
  } else {
    logger.info({
      message: `Response: ${req.method} ${req.url} ${res.statusCode}`,
      "x-request-id": req.headers[X_REQUEST_ID]
    });
  }
};

const logProxyResponse = (req, res, hostname, message) => {
  if (process.env.LOG_LEVEL === "debug") {
    logger.debug({
      message,
      headers: res.headers,
      url: req.url,
      data: JSON.stringify(res.data),
      hostname,
      statusCode: res.statusCode,
      "x-request-id": req.headers[X_REQUEST_ID]
    });
  } else {
    logger.info({
      message: `Response: ${hostname} ${req.method} ${req.url} ${res.statusCode}`,
      "x-request-id": req.headers[X_REQUEST_ID]
    });
  }
};

const logAxiosRequest = request => {
  switch (process.env.LOG_LEVEL) {
    case "debug":
      logger.debug({
        url: request.baseURL + request.url,
        method: request.method,
        headers: request.headers,
        data: logData(request.data),
        "x-request-id": request.headers[X_REQUEST_ID]
      });
      break;
    default:
      logger.info({
        message: `Axios Request: ${request.method.toUpperCase()} ${request.baseURL}${request.url}`,
        "x-request-id": request.headers[X_REQUEST_ID]
      });
      break;
  }
  return request;
};

const logAxiosResponse = response => {
  if (response.status >= 500) {
    logger.error({
      method: response.config.method,
      url: response.config.url,
      statusCode: response.status,
      headers: response.headers,
      data: logData(response.data),
      "x-request-id": response.headers[X_REQUEST_ID]
    });
  } else {
    switch (process.env.LOG_LEVEL) {
      case "debug":
        logger.debug({
          method: response.config.method,
          url: response.config.url,
          statusCode: response.status,
          headers: response.headers,
          data: logData(response.data),
          "x-request-id": response.headers[X_REQUEST_ID]
        });
        break;
      default:
        logger.info({
          message: `Axios Response: ${response.config.method.toUpperCase()} ${response.config.url} ${response.status}`,
          "x-request-id": response.headers[X_REQUEST_ID]
        });
    }
  }

  return response;
};

module.exports = { logger, logRequest, logResponse, logProxyResponse, logError, logAxiosRequest, logAxiosResponse };
