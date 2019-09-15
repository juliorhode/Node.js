const http  = require('http');
const fs    = require('fs');
const path  = require('path');

http.createServer((req, res) => {

    // nosotros debemos configurar lo que va a devolver el servidor 
    // ya que no es como un apache u otro que ya tiene todo esto 
    // configurado por defecto

    console.log(`${req.method} solicita ${req.url}`);
    // para cargar la pagina
    if (req.url == '/') {
        fs.readFile('./public/index.html', 'UTF-8', (error,html)=>{
            res.writeHead(200,{'content-type': 'text/html'});
            res.end(html);
        });

    // para cargar el archivo css... con esto /.css$/ (expresion regular) para que cargue 
    // todo lo que termina con extension css
    }else if (req.url.match(/.css$/)) {
        const reqPath = path.join(__dirname,'public',req.url);
        const fileStream = fs.createReadStream(reqPath,'UTF-8');
        res.writeHead(200,{'content-type' : 'text/css'});
        fileStream.pipe(res);

    // para cargar el archivo jpg... con esto /.jpg$/ (expresion regular) para que cargue 
    // todo lo que termina con extension jpg
    }else if (req.url.match(/.jpg$/)) {
        const reqPath = path.join(__dirname,'public',req.url);
        const fileStream = fs.createReadStream(reqPath);
        res.writeHead(200,{'content-type' : 'image/jpg'});
        fileStream.pipe(res);
        
    }else{
        res.writeHead(404,{'content-type': 'text/plain'});
        res.end('404 ERROR');
    }
    
}).listen(3000);

console.log('Servidor iniciado');
