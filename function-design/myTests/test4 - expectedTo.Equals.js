'use strict';
debugger;

// expect(received).toEqual(expected);

const persOne = {
    firstName:'Juan',
    lastName:'Gonzalez',
    age:31,
    nacionality:'Chilean'
};

const persTwo = {
    firstName:'Jaime',
    lastName:'Gonzalez',
    age:33,
    nacionality:'Chilean'
};

let received = persOne.nacionality;
let expected = persTwo.nacionality;

expect(received).toEqual(expected);

//

describe('sobre los esperado', () => {
     it ('true, true', () => {
        let expected = true;
        let actual = true;
        
        expect(actual).toEqual(expected);
        });
    });

    //      CHANGE          //          CHANGE          //          CHANGE          //          CHANGE          //          CHANGE          //
