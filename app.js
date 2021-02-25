const { crearArchivo } = require('./helpers/multiplicar.js')
const argv = require('./config/yargs.js')

require('colors')

console.clear()

// Nota: process.argv almacena las variables que el usuario inicializa

// const [ , , arg3 = 'base=0'] = process.argv
// const [, base = 0] = arg3.split('=')

crearArchivo( argv.b, argv.l, argv.p)
    .then(archivo => console.log(archivo.rainbow, 'creado'))
    .catch(err => console.log(err.red))