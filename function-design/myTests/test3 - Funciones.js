'use strict';
debugger;


/*      FFFFFF  U    U  NN   N  CCCCCCC  TTTTTTTT   II  OOOOOOO NN   N  SSSSSSS
        F       U    U  N N  N  C           TT          OO   OO N N  N  S S  
        FFF     U    U  N  N N  C           TT      II  OO   OO N  N N      S S
        F       UUUUUU  N   NN  CCCCCCC     TT      II  OOOOOOO N   NN  SSSSSSS 

Una FUNCION es un boque de codigo autocontenido,
independiente al scope o ambito global.
Esta se declara una vez y se ejecuta, o reutiliza,
en cualquier momento y las veces que sea necesaria. */


// SINTAXIS.

function nombreDeLaFuncion(){

}

// DECLARACION DE FUNCION

function ejemploUno(){
    console.log('Primer dato');
    console.log('Segundo dato');
    console.log('Tercer dato');
    console.log('Cuarto dato');
}

// INVOCAR FUNCION.

ejemploUno();

// DEVOLVER VALOR

function devuelveValor(){
    console.log(1);
    console.log(2);
    console.log(3);
    console.log(4);
    return 'La funcion ha devuelto numeros.';
}

let valorDeFuncion = devuelveValor();

console.log(valorDeFuncion);

// ACEPTAR PARAMETROS.

function saludo(nombre = 'desconocido', edad = 0, ciudad = 'ciudad', gusto = 'gusto'){
    console.log(`Me llamo ${nombre}, tengo ${edad}. Vivo en ${ciudad} y me gusta ${gusto}.`);
}

let saludoFinal = saludo("Claudio", 20, 'Valdivia', 'la cerveza');
console.log(saludoFinal);

// FUNCION DECLARADA como funcion.

fDeclarada();

function fDeclarada() {
    console.log('Esta funcion DELCARADA puede ser invocada en cualquier parte del codigo, incluso antes de ser declarada.')
}

fDeclarada();

// FUNCION EXPRESADA como variable.

const funcionExpresada = function() {
    console.log('Esta funcion EXPRESADA esta asignada a una variable y solo puede ser invocada despues de la funcion.');
}

funcionExpresada();