const express       = require('express');
const app           = express();

const bodyParser    = require('body-parser');
const path          = require('path');
const fs            = require('fs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
// app.use(express.static('./public'));
app.use(express.static('./public'));


app.get('/',(req,res) =>{
    
    res.setHeader('content-type','text/html');
    
    // res.send('Hola');
    // res.sendFile(__dirname + '/index.html');
    res.sendFile(__dirname + '/index.html');
    // res.sendFile('index.html', { root: __dirname });
    console.log(path.join(__dirname,'index.html'));
    
   
    
});
app.get('/get-pelicula', (req,res)=>{
    const file = fs.readFileSync('./peliculas.json','UTF-8');
    console.log(file);
    res.setHeader('content-type','text/json');
    res.send(file);
    
});
app.post('/new',(req,res)=>{
    res.setHeader('content-type','text/plain');
    // res.send('POST para registrar');
    const nombre = req.body.nombre;
    const califica = req.body.califica;
    // abrir el archivo json
    let file = fs.readFileSync('./peliculas.json','UTF-8');
    // convertirlo a un arreglo
    const json = JSON.parse(file);
    // insertar un nuevo elemento
    json.peliculas.push({"nombre":nombre,"califica": parseInt(califica)});
    // guardar el json en el archivo
    file = fs.writeFileSync('./peliculas.json',JSON.stringify(json));

    res.send('Datos guardados');
});

app.listen(3001, ()=>{
    console.log('Servidor iniciado...');
    
});