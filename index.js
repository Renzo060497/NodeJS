var server = require('./modules/server.js');
var router = require('./modules/router.js');

server.iniciar(router.route);