const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
    if (req.method == 'GET') {
        res.writeHead(200, { 'content-type': 'text/html' });
        fs.createReadStream('./formulario.html', 'UTF-8').pipe(res);
    } else if (req.method == 'POST') {
        let body = '';
        req.on('data', datos => {
            body += datos;
        });
        req.on('end', () => {
            res.writeHead(200, { 'content-type': 'text/html' });
            res.end(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <meta http-equiv="X-UA-Compatible" content="ie=edge">
                <title>Resultados</title>
            </head>
            <body>
                <h1>Datos Formulario Recibidos</h1>
                <p>${body}/p>
            </body>
            </html>
            `)
        });
    }
}).listen(3000);
console.log('Servidor iniciado...');