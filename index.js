const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    // res.statusCode = 200;
    // res.setHeader('Content-Type', 'text/xml');
    res.writeHead(200,{
        'Content-Type': 'text/xml'
    })
    res.write('<Header><p1>abc</p1><p2>def</p2></Header>');
    res.end();
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
});