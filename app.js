const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config-yargs/yargs')




console.clear();



crearArchivo(argv.b, argv.listar, argv.hasta)
    .then( nombreArchivo => console.log(nombreArchivo, 'creado')  )
    .catch( err => console.log(err) )
