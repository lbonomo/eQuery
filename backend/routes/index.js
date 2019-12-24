const express = require('express');
const routes = express();

routes.use(require('./docs'));
routes.use(require('./sql'));
routes.use(require('./config'));

module.exports = routes;
