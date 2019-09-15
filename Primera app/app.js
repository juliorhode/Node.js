const readLine = require('readline');
const Mensajes = require('./mensaje');
const Documento = require('./documento');
const Directorio = require('./directorio');

const dir = new Directorio();
let interface = readLine.createInterface(process.stdin, process.stdout);

const tool = `
              Comandos:
              =============================================
              :q = Salir, :sa = Guardar Como, :s = Guardar\n
              =============================================`;

const pantalla = `
                    ==========================
                        Editor de texto.
                    ==========================
                    Elige una opcion:\n
                    1 Crear nuevo documento\n
                    2 Abrir documento\n
                    3 Cerrar editor\n>`;

mainScreen();

function mainScreen() {
    // limpiamos la pantalla
    process.stdout.write('\033c');

    interface.question(pantalla, res=>{
        switch (res.trim()) {
            case '1':
                console.log('Elegiste 1');
                createFile();
                
            break;
            case '2':
                console.log('Elegiste 2');
                openFileInterface();
                
            break;
            case '3':
                console.log('Elegiste 3');
                // salimos
                interface.close();
            break;
            default:
                mainScreen();
            break;
        }
    });
}

function createFile() {
    let file = new Documento(dir.getPath());
    renderInterface(file);
    readCommands(file);
}
function openFileInterface() {
    let file = new Documento(dir.getPath());
    dir.getFileInDir();
    interface.question(Mensajes.requestFileName, name=>{
        if (file.exist(name)) {
            openFile(file, name);
        }else{
            console.log(Mensajes.fileNotFound);
            setTimeout(()=>{
                interface.removeAllListeners('line');
                mainScreen();
            },2000);
            
        }
    });
}
function openFile(file, name) {
    file.open(name);
    renderInterface(file);
    readCommands(file);
}
function renderInterface(file,Mensajes) {
    // limpiamos pantalla
    process.stdout.write('\033c');
    // validamos si el archivo tiene nombre o no
    (file.getName() == '') ? console.log(`\n| Untitled |`) : console.log(`| ${file.getName()} |`);
    console.log(tool);
    if (Mensajes != null) {
        console.log(Mensajes);
        
    }else{
        console.log(file.getContent());
        
    }
}
function readCommands(file) {
    interface.on('line', input =>{
        switch (input.trim()) {
            case ':q':
                // console.log('Elegiste salir');
                interface.removeAllListeners('line');
                mainScreen();
                
            break;
            case ':sa':
                // console.log('Elegiste guardar como');
                saveas(file);
                
            break;
            case ':s':
                // console.log('Elegiste guardar');
                save(file);
            break;
            default:
                file.append(input.trim());
            break;
        }
    });
}
function saveas(file) {
    interface.question(Mensajes.requestFileName, name =>{
        if (file.exist(name)) {
            console.log(Mensajes.fileExist);
            interface.question(Mensajes.replaceFile, confirm=>{
                if (confirm = 'y') {
                    file.saveAs(name);
                    renderInterface(file,Mensajes.fileSaved + '\n');
                    
                }else{
                    renderInterface(file, Mensajes.fileNotSaved + '\n');
                }
            });
        }else{
            // archivo no existe y se crea
            file.saveAs(name);
            renderInterface(file, Mensajes.fileSaved + '\n');

        }
    });
}
function save(file) {
    if (file.hasName()) {
        file.save();
        renderInterface(file, Mensajes.fileSaved + '\n');
    }else{
        saveas(file);
    }
}