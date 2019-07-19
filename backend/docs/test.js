const Dredd = require('dredd');
const config = require('./config.json');
const endpoint = `http://127.0.0.1:${config.node_port}/api`;
const configuration = {

};
const dredd = new Dredd();

dredd.run(function (err, stats) {
  // err is present if anything went wrong
  // otherwise stats is an object with useful statistics
});
