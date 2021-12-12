const X_REQUEST_ID = "x-request-id";

const TRACING_HEADERS = [
    X_REQUEST_ID,
    "x-b3-traceid",
    "x-b3-spanid",
    "x-b3-parentspanid",
    "x-b3-sampled",
    "x-b3-flags"
];

module.exports = {TRACING_HEADERS, X_REQUEST_ID};
