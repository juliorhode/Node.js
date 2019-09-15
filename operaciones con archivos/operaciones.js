const fs = require('fs');

// renombrar archivo
// forma sincrona
/*
fs.renameSync('./prueba2.txt','./config.txt');
console.log('Archivo renombrado');
*/

// forma asincrona
/*
fs.rename('./config.txt','./prueba.txt',(error)=>{
    if (error) {
        throw(error);
    }
    console.log('Archivo renombrado');
    
})
*/

/***********************************/

// mover archivo
// forma sincrona
/*
fs.renameSync('./src/prueba.txt','./prueba.txt');
console.log('Archivo movido');
*/

// forma asincrona
/*
fs.rename('./prueba.txt','./src/prueba.txt',(error)=>{
    if (error) {
        throw(error);
    }
    console.log('Archivo movido');
    
});
*/

/***********************************/

// eliminar archivo
// forma sincrona
/*
fs.unlinkSync('./prueba.txt');
console.log('Archivo eliminado');
*/

// forma asincrona
fs.unlink('./prueba.txt',(error)=>{
    if (error) {
        throw(error);
    }
    console.log('Archivo eliminado');
});
/***********************************/