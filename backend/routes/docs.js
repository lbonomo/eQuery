const routes = require('express').Router();
var path = require('path');

// Documentacion del servicio / Generado con aglio
// aglio -i api-description.apib -o docs/api-description.html
// npm run docs
routes.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + './../docs/api.html'));
});

module.exports = routes;
