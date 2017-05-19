var conf = require('nconf')
  , watch = require('node-watch')

watch('config/',{ recursive: false, followSymLinks: true }, function(filename) {
	console.log("watch invoked - reloaded config");
	conf.update();
});