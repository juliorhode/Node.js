const http = require('http');
const options ={
    hostname : 'localhost',
    port: 3000,
    path: '/admin/divisa/editar/20',
    method: 'GET'
};

const req = http.request(options, res =>{
    console.log(`status code: ${res.statusCode}`);
    console.log('headers: %j', res.headers);

    let body ='';
    res.on('data', datos =>{
        body += datos;
    });
    res.on('end',()=>{
        console.log('\n\nResultados:');
        
        console.log(body);
        
    });
});
req.on('error', err => {});
req.end();

