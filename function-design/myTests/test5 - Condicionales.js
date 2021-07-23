/* CONDICIONALES 
    If
    Else
*/

let edad = 18;

if(edad > 17){
    console.log('Eres mayor de edad.');
} else {
    console.log('Eres menor de edad.');
};

if(edad >= 18){
    console.log('Eres mayor de edad.');
} else {
    console.log('Eres menor de edad.');
};

if(edad < 18){
    console.log('Eres menor de edad.');
} else {
    console.log('Eres mayor de edad.');
};

if(edad <= 17){
    console.log('Eres menor de edad.');
} else {
    console.log('Eres mayor de edad.');
};

/* CONDICIONALES 
    If
    Else if
    Else
*/

/*  
    Goedennacht  0 - 5 hrs
    Goedenmorgen 6 - 11 hrs
    Goedenmiddag 12 - 16 hrs
    Goedenavond  17 - 23 hrs
*/

let hora = 0
if(hora >= 0 && hora <= 6){
    console.log('Goeden nacht!');
} else if (hora >= 6 && hora <= 12){
    console.log('Goeden morgen!');
} else if (hora >= 12 && hora <= 16){
    console.log('Goeden middag!');
} else {
    console.log('Goedenavond!');
};

/* OPERADOR TERNARIO (Ccndicion) ?verdadero:falso
*/

console.log('Operador Ternario')
let eresMayor = (edad >= 18)
?"Eres mayor de edad":
"Eres menor de edad.";
console.log(eresMayor);

/* SWITCH - CASE */

let dia = 2;

    switch(dia){
    case 0:
        console.log('Zondag.');
        break;
    case 1:
        console.log('Mandag.');
        break;
    case 2:
        console.log('Dinsdag.');
        break;
    case 3:
        console.log('Woensdag.');
        break;
    case 4:
        console.log('Donderdag.');
        break;
    case 5:
        console.log('Frijdag.');
        break;
    case 6:
        console.log('Zaterdag.');
        break;
    default:
        console.log('Waarde is geen dag!');
        break;
}
