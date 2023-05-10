const fs = require('fs');
var colors = require('colors');

const crearArchivo = async (tabla = 5, listar = false, hasta = 10) =>{
    try
    {
        let i = 1;
        let salida = '';
        let consola = '';

        if(listar)
        {
            //console.log( colors.green(  "========================"));
            console.log(   "========================".green);
            console.log(`   Tabla del ${ tabla } `.red);
            console.log(   "========================".green);
        }

        for(i ; i <= hasta; i++)
        {
            salida += `${tabla} x ${i} = ${ tabla * i } \n` ;
            //salida += `${tabla} ` + 'x'.blue + ` ${i} ` + '='.yellow + `${ tabla * i } \n`;
            consola += `${tabla} ${ 'x'.green } ${i} ${ '='.red } ${ tabla * i } \n` ;
             
        }

        if(listar)
            console.log(consola);

        fs.writeFileSync(  `./salida/tabla-${tabla}.txt`  ,salida);
        return `Tabla-${tabla}.txt`;
        
    }
    catch(err)
    {
        throw err;
    }
}

module.exports = {
    crearArchivo
}