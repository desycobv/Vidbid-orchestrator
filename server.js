require("dotenv").config();

const express = require('express');
const apiMetrics = require('prometheus-api-metrics');

const indexRouter = require('./src/routes');

const port = process.env.PORT || 8080;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(apiMetrics());

app.use('/', indexRouter);

app.listen(port, () => {
	console.log(`Azure adapter listening on port ${port}`);
});

module.exports = app;



