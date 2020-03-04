var http = require('http');
var url = require('url');

function iniciar(route, handle){
    function onRequest(request, response){
        var pathname = url.parse(request.url).pathname;
        if(pathname == '/favicon.ico') return;
        console.log('\nPeticion para: ' + pathname + ' recibida.');

        var content = route(handle, pathname);

        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write(content);
        response.end();
    }
    http.createServer(onRequest).listen(8080);
    console.log('Server iniciado');
}

exports.iniciar = iniciar;