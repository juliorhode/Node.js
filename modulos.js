var path = require('path');
var util = require('util');
var v8 = require('v8'); // motor de nodejs

console.log(path.basename(__filename));
console.log(__filename);
console.log(path.join(__dirname,'www','img','home'));

var nombre = 'juli0';
var edad = 40;

/*
    %s para String
    %d para Number
*/
var texto = util.format('hola %s, tienes %d años', nombre, edad);
console.log(texto);

console.log(v8.getHeapSpaceStatistics());

