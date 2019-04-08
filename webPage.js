var http = require('http');
//Trabajaremos con ficheros ahora
var fs = require('fs');
var url = require('url');
//Base de datos
var mysql = require('mysql');

http.createServer(function (req, res) {

    var q = url.parse(req.url, true);
    var filename = "." + q.pathname;

    var con = mysql.createConnection({
        host: "localhost",
        user: "yourusername",
        password: "yourpassword"
    });

    con.connect(function (err) {
        if (err) throw err;
        console.log("Connected!");
    });

    fs.readFile(filename, function (err, data) {
        if (err) {
            res.writeHead(404, { 'Content-Type': 'text/html' });
            return res.end("404 Not Found");
        }
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
    });

}).listen(8080);