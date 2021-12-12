const registerHeader = require("./headers");

const {TRACING_HEADERS, X_REQUEST_ID} = require("./tracing");

const tracingMiddleware = async (req, res, next) => {
    try {
        TRACING_HEADERS.forEach(header => {
            registerHeader(req, header, req.headers[header]);
        });
        // add the x-request-id in the response
        res.set(X_REQUEST_ID, req.headers[X_REQUEST_ID]);
    } catch (err) {
        next(err);
    }
    next();
};

module.exports = tracingMiddleware;
