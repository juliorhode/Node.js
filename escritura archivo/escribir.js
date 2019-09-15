const fs = require('fs');
const archivo = 'prueba.txt';

// validar si existe un archivo (forma sincrona)
// if(fs.existsSync(archivo)){
//     console.log('Archivo existe');
    
// }else{
//     console.log('Archivo no existe');
    
// }

// fs.constants.F_OK verifica si es visible o no el archivo (existe o no)
// fs.access(archivo,fs.constants.F_OK, (error)=>{
//     if (error) {
//         console.log('Archivo no existe');
        
//     }else{
//         console.log('Archivo existe');
//     }
// });

// Escritura de archivo forma sincrona
// const contenido = 'Este es el contenido a guardar';
// fs.writeFileSync(archivo,contenido);
// console.log('Se escribi en el archivo');

// Escritura de archivo forma asincrona
// const contenido = 'Este es el contenido a guardar';
// fs.writeFile(archivo,contenido,(error)=>{
//     if (error) {
//         throw 'Hubo un error al escribir';
//     }else{
//         console.log('Se escribio en el archivo');

//     }
// });

// Adjuntar contenido forma asincrona
// const textoAdicional = '\nEsta es otra linea de texto';
// fs.appendFile(archivo,textoAdicional,(error)=>{
//     if (error) {
//            throw 'Hubo un error al actualizar';
//         }else{
//            console.log('Se actualizo en el archivo');
        
//         }
// });
const textoAdicional = '\nEsta es otra nueva linea de texto';
fs.appendFileSync(archivo,textoAdicional);
console.log('Se actualizo en el archivo');
