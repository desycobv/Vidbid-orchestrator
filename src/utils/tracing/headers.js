const httpContext = require("express-http-context");
/**
 * Registers a header 'headerName: headerValue' for both passthrough and outgoing calls with Axios.
 * If headerName and headerValue are defined, they're added to the express request headers and registered to the
 * httpContext. The latter allows to let the Axios interceptor inject the registered header when outgoing calls
 * are performed.
 * If headerValue is null or undefined but a header with name headerName exists on the express request object,
 * that header will be deleted from the request object for security reasons.
 *
 * @param req Express request object
 * @param headerName Name of the header
 * @param headerValue Value for the header
 */
const registerHeader = (req, headerName, headerValue) => {
    if (headerName && headerValue) {
        req.headers[headerName] = headerValue; // For express passthrough
        httpContext.set(headerName, headerValue); // For Axios calls (httpContext.get is done in Axios interceptors)
    } else if (headerName && req.headers[headerName] && !headerValue) {
        delete req.headers[headerName];
    }
};

module.exports = registerHeader;
