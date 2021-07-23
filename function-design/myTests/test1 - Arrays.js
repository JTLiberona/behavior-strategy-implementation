'use strict'
debugger;


// ARRAY
//              Variable especial, que puede almacenar mas de un valor en un determinado momento.
//
// Sintaxis
//
//              A) ARRAY LITERAL 
//                                  declaration array = ['item1', 'item2', 'item3', ... ];
//
//              B) ARRAY EN BLOQUE O CON SALTOS
//                                  declaration array = [
//                                           'item1',
//                                           'item2',
//                                           'item3'
//                                      ];
//
//
//              C) ARRAY VACIO (Asignacion posterior)
//                                  declaration array = [];
//                                  array[0] = 'string';
//                                  array[1] = 1;
//                                  array[2] = true;
//
//

// EJEMPLOS


// A) ARRAY LITERAL.
// Imprime el log completo del array en consola.

const esUnArray1 = ['string', 1];

console.log(esUnArray1);

// B) ARRAY EN BLOQUE.
// Imprime el log completo en consola.
// Imprime el segundo valor del index del array.

const esUnArray2 = [
    'string',
    1,
    true
];

console.log(esUnArray2);
console.log(esUnArray2[1]);

// C) ARRAY VACIO.
// Imprime el log completo en consola.
// Imprime el tercer valor del index del array.

const esUnArray3 = [];

esUnArray3[0] = 'string';
esUnArray3[1] = 1;
esUnArray3[2] = true;

console.log(esUnArray3);
console.log(esUnArray3[2]);


// LONGITUD DE CARACTERES DE UN ARRAY.

const arraY = [1,2,3,4,5,6,7,8,9,0];
console.log(arraY.length);

// SINTAXIS ES6

const arrayES6 = Array.of("a","b","c",'d','e','f','g','h' );
console.log(arrayES6);
console.log();

// SYNTAXIS PARA RELLENAR UN ARRAY CON 'X' CANTIDAD DEL MISMO ELEMENTO.
const arrayES62 = Array(100).fill('array');
console.log(arrayES62);

// PUSH VALUE 

const pushValue = Array.of(1,2,3);
console.log(pushValue);
pushValue.push(4);
console.log(pushValue);

// POP VALUE
pushValue.pop();
console.log(pushValue);

// forEach method: aca listamos los elementos y luego le agregamos una ID segun orden de indexacion.

pushValue.forEach(function(el,index){
    console.log(`<li id="${index}">${el}</li>`);
});