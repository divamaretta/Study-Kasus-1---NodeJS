const http = require('http');

http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type' : 'text/html'});
    res.write('Halo kamu!');
    res.end();
    }).listen(3103);

console.log('Aplikasi berjalan');
