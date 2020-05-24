const op = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}
const argv = require('yargs')
                    .command('listar','Imprime en consola la tabla de multiplicar',op)
                    .command('crear','Genera el archivo de la tabla de multiplicar solicitada',op)
                    .help()
                    .argv;

module.exports = {
    argv
}