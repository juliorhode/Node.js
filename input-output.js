var nombre;
var preguntas =[
    'Cual es tu nombre?: ',
    'Que edad tienes?: '
];
var respuestas = [];

function pregunta(i) {
    process.stdout.write(preguntas[i]);
}
process.stdin.on('data', function (data) {
    // introducimos el valor de la pregunta convirtiendo al objeto data
    // en un string eliminandole saltos de linea y espacion en blanco
    respuestas.push(data.toString().trim());
    // esto lo usamos como especie de contador para saber si la cantidad de 
    // respuestas es la misma cantidad de preguntas
     if (respuestas.length < preguntas.length) {
         pregunta(respuestas.length);
     }else{
        process.stdout.write(`Tu nombre: ${respuestas[0]} \n`) ;
        process.stdout.write(`Tu edad: ${respuestas[1]} \n`) ;
        // salimos del proceso
        process.exit();
     }
 });
 // invocamos la funcion en posicion 0
 pregunta(0);

// process.stdout.write() ---- Entrada de datos
// process.stdout.write('Dime tu nombre:') ;
// process.stdin.on() ---- Salida de datos
// data es la informacion que se esta obteniendo
// process.stdin.on('data', function (data) {
   // convertimos el objeto data a string
   // trim() eliminamos saltos de lineas y espacion en blanco innecesarios
//    nombre = data.toString().trim();
   // Mostramos la informacion
//    process.stdout.write(`Hola ${nombre}!!! \n`) ;
   // salimos del proceso
//    process.exit();
    
// });
