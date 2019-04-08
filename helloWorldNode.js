var http = require('http');
//Llamo a mi modulo propio
var dt = require('./myfirstModule');
//Crealmos nuestra variable URL
var url = require('url');

http.createServer(function (req, res) {

    //Para seleccionar donde quiero que aparezca la informacion
    res.writeHead(200, { 'Content-Type': 'text/html' });

    //Para generar el texto con el hora y el dia tras llamar a a mi propio modulo de hora y fecha
    res.write("The date and time are currently: " + dt.myDateTime() + " + ");

    //Argumentos que recibimos del cliente, IP o asi, podemos verlo si ponermos algo como http://localhost:8080/fonsi
    res.write(req.url + " + ");

    //Para hacerlo mas visual vamos a realizarlo de la siguiente forma
    var q = url.parse(req.url, true).query;
    var txt = q.year + " " + q.month;
    res.write(txt);

    //Sacar un mensaje cualquiera
    res.end('    +   Hello World!');

}).listen(8080);