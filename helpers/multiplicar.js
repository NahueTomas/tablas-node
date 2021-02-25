const fs = require('fs')

require('colors')

const crearArchivo = async ( numero, listar = false, por = 10 ) => {

    try{

        let salida = ('==============' + '\nTabla del: ' + numero + ' \n==============\n')

        for (let i = 1; i <= por; i ++){
            salida += `${ numero } x ${ i } = ${ numero * i }\n`
        }

        if ( listar ) {
            console.log(`${ salida }`.green.bold)
        }

        const archivo = `./salida/tabla-${ numero }.txt`

        fs.writeFileSync( `${archivo}`, salida)

        return(`${archivo}`)

    }
    catch(err){
        throw err
    }

}


module.exports = { crearArchivo }