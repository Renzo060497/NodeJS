var http = require('http');
var url = require('url');

function iniciar(){
    function onRequest(request, response){
        var pathname = url.parse(request.url).pathname;
        console.log('Peticion para: ' + pathname);

        response.writeHead(200, {'Content-Type': 'text/xml'});
        response.write('<Header><p1>Parrafo 1</p1><p2>Parrafo 2</p2></Header>');
        response.end();
    }
    http.createServer(onRequest).listen(8080);
    console.log('Server iniciado');
}

exports.iniciar = iniciar;