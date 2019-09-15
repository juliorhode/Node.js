const eventEmitter = require('events').EventEmitter;
const util = require('util');

var Persona = function (nombre) {
    this.nombre = nombre;
}
util.inherits(Persona,eventEmitter);

// exportamos el modulo para usarlo en otro lado
module.exports = Persona;