const fs = require('fs');
const path = require('path');

class Directorio{
    constructor(){
        this._dir = 'docs';
        //obtener la direccion donde estamos
        this._path = __dirname;
        // esta funcion va a permitir es crear la carpeta y validar si existe o no
        this.createDocsDir();
    }

    createDocsDir(){
        this.path = path.join(this._path, this._dir);
        // si no existe el directorio
        if (!fs.existsSync(this._dir)) {
            // creamos el directorio
            fs.mkdirSync(this._dir)
        }
    }

    getPath(){
        // retornamos toda la url
        return this._path;
    }
    getShortPath(){
        // simplificamos la url 
        const paths = path.parse(this._dir);
        let delimiter = '/';
        // vamos a validar si la url es con diagomal / o diagonal \
        if (paths.dir.indexOf(delimiter < 0 )) {
            delimiter = `\\`;
        }
        // .root es la ubicacion inicial de un url y el .name que es la ultima carpeta
        return `${paths.root}...${delimiter}${paths.name}`;
    }

    // listamos los archivos que hay en es carpeta
    getFileInDir(){
        const files = fs.readdirSync(this._path);
        let n = 0;
        console.log(`
        ====================================
        Ubicacion: ${this.getShortPath()}
        ==================================== `);

        files.forEach(file =>{
            if (file != '.DS_Store') {
                console.log(`     ${file}`);
                n++;
                
            }
        })
        
    }
}

module.exports = Directorio;