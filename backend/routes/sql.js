const routes = require('express').Router();
const config = require('config');
const query = require('../queries/index');

// Execute Query
routes.post('/api/v1/sql', async(req, res) => {
  let sql_query = req.body.query;
  console.log(sql_query);

  if (sql_query === undefined) {
    res.status(400).json({
      status: "failure",
      message: `Sentencia SQL vacia`
    })
  } else {
    // Si tenesmos una consulta, la ejecuto

    let message = await query(sql_query, config['sql']);

    if ( message.status === "success"  ) {
      res.status(200).json(message)
    } else {
      res.status(400).json(message)
    }
  }

});

module.exports = routes;
