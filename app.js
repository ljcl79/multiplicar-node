const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');
const { argv } = require('./yargs');
const colors = require('colors');

let comando = argv._[0];
console.log(argv);
switch(comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(tabla => console.log(tabla))
            .catch(e => console.log(e));
        break;
    
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(arquivo => console.log(`El archivo tabla-${argv.base}.txt ha sido creado`.green))
            .catch(e => console.log(e));
        break;
    
    default:
        console.log('Comando no reconocido');
    
}


