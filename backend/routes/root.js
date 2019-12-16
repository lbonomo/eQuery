const routes = require('express').Router();
const query = require('../queries/index');
const excel = require('../queries/excel');
var path = require('path');
const config = require('config');

// Solo para probar Dredd
// dredd ./api-description.apib http://127.0.0.1:3000
routes.get('/', (req, res) => {
  res.status(200).json({
      "dosc":"/docs",
      "queries_url":"/api/queries",
      "sql_url":"/api/sql"
    });
});

// Documentacion del servicio / Generado con aglio
// aglio -i api-description.apib -o docs/api-description.html
// npm run docs
routes.get('/docs', (req, res) => {
  res.sendFile(path.join(__dirname + './../docs/api.html'));
});

// https://stackoverflow.com/questions/33495979/save-excel-file-using-filesaver-js

routes.post('/query', async(req, res) => {

  // express deprecated req.param(name): Use req.params, req.body, or req.query instead routes/index.js:22:19

  // console.log(req);
  const sql_query = req.body.sql;
  let data = await query(sql_query, config);


  // TODO - Verificar el tamaño o el contenido de data
  let result = await excel(data);

  res.setHeader('Content-Type', 'application/vnd.openxmlformats');
  res.setHeader("Content-Disposition", "attachment; filename=" + "Report.xlsx");
  res.end(result, 'binary');

});

module.exports = routes;
