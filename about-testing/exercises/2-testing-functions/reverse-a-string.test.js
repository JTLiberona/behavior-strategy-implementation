'use strict';

/**
 * this function reverses a string
 * @param {string} [text=''] - the string to reverse
 * @returns {string} the reversed text
 */
const reverse = (text = '') => {
  if (typeof text !== 'string') {
    return 'text is not a string';
  }

  let reversed = '';
  for (let i = text.length - 1; i >= 0; i--) {
    reversed += text[i];
  }
  return reversed;
};

describe('it should reverse strings', () => {
  describe('when no argument is passed', () => {
    it('default parameter is an empty string', () => {
      expect(reverse()).toEqual('');
    });
  });
  describe('when argument is a string', () => {
    it('the empty string should return an empty string', () => {
      expect(reverse('')).toEqual('');
    });
  
    it('"toads" should return "sdaot"', () => {
      expect(reverse('toads')).toEqual('sdaot');
    });
   
 // write at least 5 more tests

    it('the string should return true', () => {
      const ej1 = (text = '') => {
        if (typeof text === 'string') {
          return true;
        }
      };
      expect(ej1('hola')).toEqual(true);
    });
   
    it('The value of the argument should be a string', () => {
      const ej2 = (text = '') => {
      if (typeof text !== 'string') {
        return false;
      }
      else 'ingrese una string';
    };
    expect(ej2(2)).toEqual(false);

  });
  
 // BREAK  // BREAK  // BREAK  // BREAK  // BREAK  // BREAK  // BREAK  // BREAK  // BREAK  // BREAK  // BREAK  // BREAK  // BREAK  // BREAK  // BREAK  

  describe('when argument is not a string', () => {
    it('true should return "text is not a string"', () => {
      expect(reverse(true)).toEqual('text is not a string');
    });
    // write at least 3 more tests
  });
});
});