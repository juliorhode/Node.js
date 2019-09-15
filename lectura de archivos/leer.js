const fs = require('fs');

// esto es sincrona y toma el proceso principal y lo demas no se ejecuta hasta que este termine
//var files = fs.readdirSync('./');
//console.log(files);


// esto se hace de forma asincrona y los demas procesos puede ejecutarse sin que esta termine
// esto permite listar los archivos que se encuentran aqui
fs.readdir('./',(error,files)=>{
    if (error) {
        throw error;
    }
    console.log(files);
    
    
    // forma sincrona para leer el contenido del archivo
    //var archivo = fs.readFileSync('./documentacion.txt', 'UTF-8');
    //console.log(archivo);

    // forma asincrona para leer el contenido del archivo
    fs.readFile('./documentacion.txt', 'UTF-8',(error,archivo)=>{
        if (error) {
            throw error;
        }
        console.log(archivo);
    });
    
});

