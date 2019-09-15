const fs = require('fs');
const os = require('os');

class Documento{
    constructor(dir){
        this._content = '';
        this._isSaved = false;
        this._fileName = '';
        this._dir = dir;
    }

    exist(name){
        return fs.existsSync(`${this._dir}/${name}`);
    }

    append(text){
        // os.EOL es un salto de linea
        this._content += os.EOL + text;
        this._isSaved = false;
    }

    saveAs(name){
        fs.writeFileSync(`${this._dir}/${name}`,this._content);
        this._isSaved = true;
        this._fileName = name;

    }

    save(){
        fs.writeFileSync(`${this._dir}/${this._fileName}`,this._content);
        this._isSaved = true;
        this._fileName = this._fileName;

    }

    getContent(){
        return this._content;
    }

    hasName(){
        if (this._fileName != '') {
            return true;
        }else{
            return false;
        }
    }

    getName(){
        return this._fileName;
    }

    isSaved(){
        return this._isSaved;
    }

    open(name){
        this._content = fs.readFileSync(`${this._dir}/${name}`, 'UTF-8');
        this._fileName = name;
        this._isSaved = true;
        return this._content;
    }
}

module.exports = Documento;