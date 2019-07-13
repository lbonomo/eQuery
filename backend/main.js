const express = require("express");
const nodeExcel = require('excel-export');
const routes = require("./routes");
// var path = require('path');
var cors = require('cors');

// Config file
const config = require('./config.json');
const node_port = config.node_port;


var apiServer = express();
// Then use it before your routes are set up:
apiServer.use(cors());

// Parse URL-encoded bodies (as sent by HTML forms)
apiServer.use(express.urlencoded({extended: true}));
// Parse JSON bodies (as sent by API clients)
apiServer.use(express.json());


apiServer.use('/', routes);

// Turn on that server!

apiServer.listen(node_port, () => {
  console.log(`App listening on port ${node_port}`);
});

module.export = apiServer;
