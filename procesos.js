// para visualizar los procesos. y a esto se le puede enviar parametros
//console.log(process.argv);

// PS D:\Desktop\Curso NodeJs> node .\procesos.js
// [ 'C:\\Program Files\\nodejs\\node.exe', // de donde se ejecuta nodejs
//   'D:\\Desktop\\Curso NodeJs\\procesos.js' ] // que archivo se esta ejecutando

/*ejemplo:
PS D:\Desktop\Curso NodeJs> node .\procesos.js --nombre "Julio" --edad 40 

[ 'C:\\Program Files\\nodejs\\node.exe',
  'D:\\Desktop\\Curso NodeJs\\procesos.js',
  '--nombre',
  'Julio',
  '--edad',
  '40' ]
  
  */

  // Ejecutamos node procesos.js --nombre "Julio" --edad 40

  function parametros(p){
      var index = process.argv.indexOf(p);
      // console.log(index);
      
      return process.argv[index + 1];
  }
  var nombre = parametros('--nombre');
  var edad = parametros('--edad')

  console.log(`Tu nombre es ${nombre} y tu edad es ${edad}`);
  /*Resultado:
  PS D:\Desktop\Curso NodeJs> node procesos.js --nombre "Julio" --edad 40
  Tu nombre es Julio y tu edad es 40 
*/
  
