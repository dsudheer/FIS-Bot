/**
 * New node file
 */

var conf = require('nconf');


/**
 * Initialize the configuration to use (in-order):
 *   1. Command-line arguments
 *   2. Environment variables
 *   3. A file located at config path. (it depends on environment)
 *
 * @api private
 */

conf.argv().env();

conf.update = function(){
  conf.file("config/conf.json");
  return;
}

conf.update();

module.exports = conf;
