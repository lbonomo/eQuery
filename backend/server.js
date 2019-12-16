const express = require('express');

// var path = require('path');
var cors = require('cors');

// Config file
const config = require('config');
const node_port = config.node_port;


const apiServer = express();
// Then use it before your routes are set up:
apiServer.use(cors());

// Parse URL-encoded bodies (as sent by HTML forms)
apiServer.use(express.urlencoded( { extended: true } ));

// Parse JSON bodies (as sent by API clients)
apiServer.use(express.json());

// Routas
apiServer.use(require('./routes/index'));
// const routes = require("./routes");
// apiServer.use('/', routes);

// Turn on that server!

apiServer.listen(node_port, () => {
  console.log(`App listening on port ${node_port}`);
});

module.export = apiServer;
