const { option, describe } = require('yargs')

const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar'
    })
    .option('l', {
        alias: 'listar',
        default: false,
        type: 'boolean',
        describe: 'Muestra la tabla en consola'
    })
    .option('p', {
        alias: 'por',
        default: 10,
        type: 'number',
        describe: 'Define hasta que numero se debe multiplicar la base'
    })
    .check( (argv, options) => {
        if ( isNaN( argv.b)) {
            throw 'Debe ingresar un numero'
        }
        return true
    } )
    .argv

module.exports = argv