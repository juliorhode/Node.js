const underscore = require('underscore');

const lista = [
    {'id': 1, 'nombre':'julio','edad':40},
    {'id': 2, 'nombre':'cesar','edad':13},
    {'id': 3, 'nombre':'adrianno','edad':7}
];

const resultado = underscore.findWhere(lista,{edad:13});

console.log(resultado);
