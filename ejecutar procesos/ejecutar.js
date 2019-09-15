const exec = require('child_process').exec;

// exec('dir',(error,stdout)=>{
exec('script.bat',(error,stdout)=>{
    if (error) {
        throw error;
    }
    console.log(stdout);
    console.log('Comando ejecutado satisfactoriamente');
});