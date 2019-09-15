const http = require('http');

const ordenes =[
    {'nombre': 'sopa','cantidad': 2, 'estado': 'servido', 'mesa': 5},
    {'nombre': 'ensalada','cantidad': 1, 'estado': 'pagado', 'mesa': 4},
    {'nombre': 'sopa','cantidad': 1, 'estado': 'pagado', 'mesa': 3},
    {'nombre': 'pasta','cantidad': 4, 'estado': 'en progreso', 'mesa': 2}
];

http.createServer( (req,res)=>{
    if (req.url == '/') {
        res.writeHead(200,{'content-type' : 'text/json'});
        res.end(JSON.stringify(ordenes));

    }else  if (req.url == '/ordenes-proceso') {
        pedidosProceso(res);

    }else if (req.url == '/ordenes-sopa') {
        pedidosNombre('sopa',res);

    }else{
        res.writeHead(404,{'content-type' : 'text/plain'});
        res.end('No se encontro la solicitud requerida');

    }
}).listen(3000);
console.log('Servidor iniciado...');

const pedidosProceso = (res)=>{
    // filtramos en el array por lo que buscamos
    const respuesta = ordenes.filter(item=>{
        return item.estado == 'en progreso'
    });
    res.writeHead(200,{'content-type' : 'text/json'});
    res.end(JSON.stringify(respuesta));
}
const pedidosNombre = (nombre,res)=>{
    // filtramos en el array por lo que buscamos
    const respuesta = ordenes.filter(item=>{
        return item.nombre == nombre
    });
    res.writeHead(200,{'content-type' : 'text/json'});
    res.end(JSON.stringify(respuesta));
}