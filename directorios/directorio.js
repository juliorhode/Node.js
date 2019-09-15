const fs = require('fs');

//mkdir creacion carpeta de directorio forma sincrona
//fs.mkdirSync('img');

//mkdir creacion carpeta de directorio forma asincrona
/*
fs.mkdir('css',(error)=>{
    if (error) {
        throw('Error: ' + error)
    }
    console.log('Carpeta creada');
    
});
*/
if(fs.existsSync('css')){
    console.log('Carpeta ya existe... :(');
}else{
    fs.mkdirSync('css');
    console.log('Carpeta ha sido creada... :)');
}