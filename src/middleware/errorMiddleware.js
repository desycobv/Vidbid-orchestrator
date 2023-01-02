const errorMiddleware = (err, req, res, next) => {
    const status = err.status || 500;
    if (err.response) {
        // the issue happened in another component. error is just forwarded.
        res.status(err.response.status);
        if (err.response.data) {
            if (err.response.data.status) {
                // not all components are returning in the default format (e.g. keycloak)
                res.json(err.response.data);
            } else {
                res.json({status: "fail", data: {code: err.response.status, message: err.response.data}});
            }
        } else {
            res.json(err.message);
        }
    } else {
        res.status(status);
        if (status >= 500) {
            res.json({status: "error", data: {code: status, message: err.message}});
        } else {
            res.json({status: "fail", data: {code: status, message: err.message}});
        }
    }
};

module.exports = errorMiddleware;
