// modulos
var path = require("path"); // controla la parte de archivos y direcciones

// variables
var a = 5;
var b = 10;
console.log('hola');
// forma antigua
console.log("El resultado es: " + (a+b));
// forma nueva por medio de un template
console.log(`El resultado es ${a+b}`);
console.log(`El resultado es ${a==b}`);

// alcance global
console.log(__dirname); // directorio
console.log(__filename); // archivo

console.log(path.basename(__dirname)); //carpeta raiz
console.log(path.basename(__filename)); //archivo
console.log(path.extname(__filename)); // extension del archivo


// Comandos
// ********

// Con esto podemos comenzar a usa r nodejs en la consola
// ejecutamos el comando: node

// PS D:\Desktop\Curso NodeJs>node
// > let a=5;
// undefined
// > a
// 5
// > if(a<5){
// ... a=20;
// ... }else{
// ... a}
// 5

// para ver la version de nodejs
// ejecutamos el comando: node -v

// PS D:\Desktop\Curso NodeJs> node -v
// v10.16.0

// para ejecutar un archivo js 

// 1) situarse en la carpeta donde se encuentra el archivo
// 2) node <nombre_archivo>