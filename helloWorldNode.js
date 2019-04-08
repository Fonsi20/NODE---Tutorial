var http = require('http');
//Llamo a mi modulo propio
var dt = require('./myfirstModule');

http.createServer(function (req, res) {

    //Para seleccionar donde quiero que aparezca la informacion
    res.writeHead(200, { 'Content-Type': 'text/html' });

    //Para generar el texto con el hora y el dia tras llamar a a mi propio modulo de hora y fecha
    res.write("The date and time are currently: " + dt.myDateTime());

    //Sacar un mensaje cualquiera
    res.end('Hello World!');

}).listen(8080);