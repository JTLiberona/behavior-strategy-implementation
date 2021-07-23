// TRY CATCH FINALLY

let noExiste;

try {
    console.log('');                                        // 'en TRY se agrega el codigo a evaluar.'
    noexiste;
} catch (error) {                                           //'catch da aviso de error en el codigo'
  console.log('ERROR EN EL CODIGO');
  console.log(error);  
}/* finally {
    console.log('NO HAY ERRORES! ;)');
}*/

// ejemplo

let numero = 'y';

try {
    if( isNaN(numero) ){
    throw new Error('El caracter introducido no es un numer0.');
    }
} catch(error){
    console.log(`Se produjo un error en el siguiente error ${error}`);
}