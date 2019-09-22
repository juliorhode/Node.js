/**
 * Para instalar express, se ejecuta el siguiente comando: npm i express
 * 
 * Se puede configurar el servidor como estatico o dinamico
 */
const express = require('express');

const puerto = 3000; // definimos el puerto

// inicializamos express
var app = express();

// Ruteo indicando la ruta web

/*  forma manual    
    app.get('/',(req,res)=>{
    //res.send('Hola a todos'); // respuesta
    
    
    
        let url = req.url; // solicito la url
        url = url.substring(url.indexOf('?') + 1); // se extrae la / y el signo de ?
        // console.log(url);

        const params = url.split('&'); // se hace para obtener los datos
        let text = '';
        // para cada objeto dentro de los parametros se va a dividir y extraer los valores
        params.forEach(params =>{
            console.log('Parametro: ' + params);
            
            let object = params.split('=');
            text += object[0] + ' : ' + object[1] + '<br/>'
        });
        // presentamos los valores en la pagina
        res.send(`<h1>Tus datos son: <br/> ${text} </h1>`);
        console.log(text);
    }); // solicitud de tipo get

*/

/**
 * Utilizando ahora body-parser middleware
 * Para instalacion: npm install body-parser 
 * 
 * Esto lo que permite es abstraer todo lo que se hizo en la forma manual a una forma 
 * sencilla en manipular el request y el response simplificando el codigo anterior
 */
// configuramos body-parser
const bodyParser = require('body-parser');
const urlencodedParser = bodyParser.urlencoded({extended:false});
// obtenemos el cuerpo codificado en la url
app.get('/', urlencodedParser,(req,res)=>{
    res.send(`<h1>Tus datos son: <br/> 
    Nombre: ${req.query.nombre} <br/>
    Apellido: ${req.query.apellido}<br/>
    </h1>`);
    console.log(req.query);
});

app.get('/home',(req,res)=>{
    res.send('Estas en la pagina de inicio');// respuesta
}); // solicitud de tipo get


// con use es donde vamos a configurar todo lo que va a requerir nuestra aplicacion
// app.use(express.static('./public')); // servidor estatico

app.listen(3000, ()=>{
    console.log(`Servidor iniciado en el puerto: ${puerto}`); 
}); // por donde va a estar a la escucha

