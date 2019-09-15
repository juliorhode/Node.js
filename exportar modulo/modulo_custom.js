const persona = require('./libs/persona');

let pablo = new persona('pablo');
pablo.on('habla', (mensaje)=>{
    console.log(`${pablo.nombre}: ${mensaje}`);
    
});
pablo.emit('habla','te felicito de nuevo');