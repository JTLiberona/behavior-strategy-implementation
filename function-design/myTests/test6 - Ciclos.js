// WHILE

let jt = 0;

while(jt < 10) {
    console.log('JT tiene fiebre X_x!');
    jt++;
} 

// DO WHILE

do {
    console.log('JT tiene hipotermia U_-!');
    jt++
} while (jt < 10);

// FOR

/*for (let i = 0; i < 10; i++){
    console.log(`FOR LOOP: ${i}`);
}*/

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
for(i=0; i < numeros.length; i++){
    console.log(numeros[i]);
}

// FOR IN

let jT = {
    nombre:'Jose Tomas',
    apellido:'Liberona',
    edad:31,
    ciudad:'Bierbeek'
}

for (const propiedad in jT) {
   console.log(`Propiedad:${propiedad} y Valor:${jT[propiedad]}.`);
}

// FOR OUT

for (const ele of numeros) {
    console.log(ele);
}

let cadena = 'Hola Mundo!';
for (const hM of cadena) {
    console.log(hM);
}