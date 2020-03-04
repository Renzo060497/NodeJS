var server = require('./modules/server.js');
var router = require('./modules/router.js');
var requestHandlers = require('./modules/requestHandlers.js')

var handle = {};
handle["/"] = requestHandlers.iniciar;
handle["/iniciar"] = requestHandlers.iniciar;
handle["/subir"] = requestHandlers.subir;

server.iniciar(router.route, handle);