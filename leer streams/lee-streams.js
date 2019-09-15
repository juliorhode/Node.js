const fs = require('fs');

// esto no sirve para archivos muy grande
/*
let contenido = fs.readFileSync('./prueba.txt');
console.log(`Tamaño: ${contenido.length}` );
*/

let stream = fs.createReadStream('./prueba.txt','UTF-8');
let datos = '';

// nota: data y end son eventos de nodejscls

stream.once('data', ()=>{
    console.log('Iniciando el stream...\n');
    
});

stream.on('data',(parte)=>{

    // comenazamos a escribir partes
    console.log(`${parte.length} |` );
    datos += parte;
});

stream.on('end',()=>{
    console.log('Fin del stream...\n');
    console.log(datos.length);
});
