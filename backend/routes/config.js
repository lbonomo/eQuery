const fs = require('fs');
const config = require('config');
const routes = require('express').Router();
const query = require('../queries/index');
const path = require('path');

const updateConfig = (cfg) => {
  // Esta funcion
  Object.entries(cfg).forEach(([key, value]) => {
    // console.log(key + ': ' + value);
    if (key === 'options' ) {
      config['sql'][key]=JSON.parse(value)
    } else {
      config['sql'][key]=value
    }
  });

  // Salvo config/default.json
  // use JSON.stringify to convert object in JSON (use 4 to ident)
  fs.writeFile("config/default.json", JSON.stringify(config, null, 4), 'utf8', (err) => {
    if (err) {
        console.log("An error occured while writing JSON Object to File.");
        return console.log(err);
    }
    console.log("JSON file has been saved.");
  });
}

const checkConfig = async () => {
  // En MSSQL devuelve datos de la version del motor
  let sql_query ="select @@version"
  let data = await query(sql_query, config['sql']);
  return data;
}

// Leo la configuración
routes.get('/api/v1/configs', (req, res) => {
  res.json(config.sql);
});

// Guardo la configuración
routes.patch('/api/v1/configs', async (req, res) => {
  let body = req.body;
  let bodySize = Object.values(body).length;
  // Si no se envian valores, devuelvo error
  if (bodySize < 1 ) {
    // No hay nada que guardar
    res.status(400).json({
      "status": "failure",
      "message": "Plase send a key:value"
    })
  } else {
    await updateConfig(body);
    res.json({"status": "success"});
  }

});

routes.get('/api/v1/configs/check', async (req, res) => {
  let check = await checkConfig();
  if ( check.status === "success"  ) {
    res.status(200).json(check)
  } else {
    res.status(400).json(check)
  }
});

module.exports = routes;
