var http = require('http');
//Trabajaremos con ficheros ahora
var fs = require('fs');

http.createServer(function (req, res) {

    fs.readFile('helloWorldNode.html', function (err, data) {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        res.end();
    });

}).listen(8080);