/**
 * New node file
 */
var winston = require('winston'),
expressWinston = require('express-winston');
winston.transports.DailyRotateFile = require('winston-daily-rotate-file'); 

conf = require('../lib/configurator'); 
logConf = conf.get('log'); 
environment = conf.get("env") || "local";

var customFormat = function(options) {
 // Return string will be passed to logger. 
 return options.timestamp() + ' | ' + options.level.toUpperCase() + ' | ' + (undefined !== options.message ? options.message : '') +
  (options.meta && Object.keys(options.meta).length ? ' ' + JSON.stringify(options.meta) : '');
};

var logger = new(winston.Logger)({
 transports: [
  new(winston.transports.DailyRotateFile)({
   name: 'file',
   filename: logConf.path,
   datePattern: '.yyyy-MM-dd',
   level: logConf.level,
   handleExceptions: true,
   humanReadableUnhandledException: true,
   json: false,
   timestamp: function() {
    return (new Date().toUTCString());
   },
   formatter: customFormat
  })
 ],
 exitOnError: false
});
if (environment === "local") {
 logger.add(winston.transports.Console, {
  level: logConf.level,
  handleExceptions: true,
  humanReadableUnhandledException: true,
  json: false,
  timestamp: function() {
   return (new Date().toUTCString());
  },
  formatter: customFormat
 });
}

logger.setMaxListeners(0);

module.exports = logger;