// const events =  require('events');
// // se encanrga de emitir y eliminar eventos
// const emitter = new events.EventEmitter();

// emitter.on('eventoCustom',(mensaje, status)=>{
//     console.log(`${status}: ${mensaje}`);
    
// });

// // para emitir el evento
// // se coloca el nombre del evento y luego los parametros a recibir
// emitter.emit('eventoCustom','Mensaje cargado con exito', 200);

const eventEmitter = require('events').EventEmitter;
const util = require('util');

var Persona = function (nombre) {
    this.nombre = nombre;
}
util.inherits(Persona,eventEmitter)
let persona = new Persona('Julio');
//console.log(`Me llamo ${persona.nombre}` );
persona.on('hablar', (mensaje)=>{
    console.log(`${persona.nombre}: ${mensaje}`);
    
});
persona.emit('hablar','Te felicito')