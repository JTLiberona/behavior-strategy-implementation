'use strict';
debugger;


// OBJETOS
//              Son varibles que pueden almacenar multiples valores, y como en la vida real
//              poseen propiedades con valores diferentes y metodos de llamado distintos para
//              diferentes instancias o llamados.
// 
//
//
//
// Sintaxis
//              A) OBJETO LITERAL
//                                  declaration objectName = {parameter1: argument1, parameter2: argument2, etc.. };
//
//
//              Un metodo es una funcion contenida como propiedad dentro del objeto.
//                                  let objeto = {
//                                      name:'JT',
//                                      lastName
//                                      age:31,
//                                      country:'Chile',
//                                      residence:'Belgium",
//                                      fullname: function() {
//                                      return this.name + '' + this.lastName;
//                                      }
//                                  };
//
//
// EJEMPLOS
//
//
//
// A) OBJETO LITERAL
//
    const unObjeto0 = {nombre:'Juan', apellido:'Gomez', edad:41, residencia:'Argentina'};
    
    console.log(unObjeto0);
    console.log(unObjeto0.apellido);
    console.log(unObjeto0['residencia'])
//   
//
// B) OBJETO MULTILINEAS
// Imprime log completo del objeto en consola.
// Imprime el valor de la propiedad nombre en consola. (braket notation)
// Imprime el valor de la propiedad edad en consola. (point notation)

    const unObjeto = {
    nombre:'Jose Tomas',
    edad: 31,
    fechaDeNacimiento:'22 de Noviembre, 1989.',
    pais: 'Chile',
    nacionalidad:'Chileno',
    residencia:'Belgica',
    estadoCivil:'Casado',
    hijos:2,
    profesion:'Administrador en Ecoturismo'
    };

console.log(unObjeto);
console.log(unObjeto['nombre']);
console.log(unObjeto.edad);

// C) OBJETO Y METODOS(FUNCIONES COMO PROPIEDADES)
//
//
const personaUno = {
    name:'JT',
    lastName: 'Garcia Liberona',
    age:31,
    country:'Chile',
    residence:'Belgium',
    fullname: function() {
        return this.name + ' ' + this.lastName;
        },
    decirMiNombre: function () {
        console.log(`Hola me llamo ${this.name} ${this.lastName} y tengo ${this.age} anios. Soy de ${this.country} pero actualmente vivo en ${this.residence}.`);
    }
    }
    console.log(personaUno.fullname());
    
personaUno.decirMiNombre();
    
    


    // llamar a este objeto por sus llaves.
    console.log(Object.keys(personaUno));

    // llamar a este objeto por sus valores.
    console.log(Object.values(personaUno));
    
    // comprombar si el objeto posee la siguiente propiedad.
    console.log(personaUno.hasOwnProperty("name"));
    console.log(personaUno.hasOwnProperty('pishula'));