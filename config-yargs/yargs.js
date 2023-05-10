const argv = require('yargs')
    .option('b',{
        alias: 'base',
        type: 'number',
        demandOption: true,
        desc: 'Es la base de la tabla de multiplicas'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        desc: 'Muestra la tabla en la consola'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        default: 10,
        desc: 'Indica hasta que número va a ser la tabla'
    })
    .check( (argv, options) => {
        if( isNaN(argv.b)){
            throw 'La base debe ser un número'
        }

        return true
    } )
    .argv;

module.exports = argv;