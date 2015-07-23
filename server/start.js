// Transpile ES6 to ES5
require('babel/register');

var chalk = require('chalk');
var Promise = require('bluebird');

var port = (process.env.PORT || 8001);
// Start the server
var app = require('./app');

(new Promise(function(resolve, reject) {
  app.listen(port, function() {
    console.log('The server is listening intently on port', chalk.green.bold(port));
    return resolve();
  });
}))
.catch(function(err) {
  console.log('Problem starting up!', chalk.red(err.message));
  console.log('I\'m out!');
  process.kill(1);
});
