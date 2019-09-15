// nos permite manipular el input y el output de nodejs

var readline = require('readline');
var util = require('util');
var persona = {
    nombre: '',
    comentarios: []
}

// interfaz
var rl = readline.createInterface(process.stdin,process.stdout);

// solicitar un input y escribir un output
rl.question('cual es tu nombre? ', (respuesta) => {
    // console.log(`Oh, tu nombre es ${respuesta}`);
    persona.nombre = respuesta;

    rl.setPrompt('Dime un comentario \n');
    rl.prompt();


    // process.exit();
  });

//   cuando escibe una linea nueva se activa el evento
  rl.on('line', (input) => {
      if (input=='salir') {
        // %s para String y %j para JSON
        var mensaje = util.format("te llamas %s y esto me dijste: %j", persona.nombre, persona.comentarios);
        console.log(mensaje);
        
        process.exit();
      }else{
          persona.comentarios.push(input.trim());
          rl.prompt();
      }
  });