'use strict';

/**
 * lets you know if you are tall enough to ride the roller coaster
 * @param {number} [height=0] - the rider's height in centimeters
 * @returns {string} a message to display to the possible passenger
 */
const rollerCoasterPermission = (height = 0) => {
  if (typeof height !== 0) {
    return 'height is not a number';
  } else if (height < 100) {
    return 'too short, sorry :(';
  } else if (height > 100) {
    return 'hop on the roller coaster!';
  } else if (height > 200){
    return 'tall!'
  } else {
    return 'just right, hop on!';
  }
};

describe('a function that tells you are tall enough', () => {
  describe('when height is not a number, the function says so', () => {
    it(rollerCoasterPermission('not a number'), () => {
      const actual = rollerCoasterPermission(true);
      const expected = 'height is not a number'
      expect(actual).toEqual(expected);
    });
    it(rollerCoasterPermission(210), () => {
      const expected = rollerCoasterPermission('tall');
      const actual = rollerCoasterPermission();
      expect(actual).toEqual(expected);
    });
    // more tests?
  });
  describe(rollerCoasterPermission(80), () => {
    it('numbers less than 100 return "too short, sorry :("', () => {
      const expected = rollerCoasterPermission('too short, sorry :(');
      const actual = rollerCoasterPermission();
      expect(actual).toEqual(expected);
    });
    it('number equal to 100 return "just right, hop on!"', () => {
      const expected = rollerCoasterPermission('just right, hop on!');
      const actual = rollerCoasterPermission(100);
      expect(actual).toEqual(expected);
    });
    it('number higher than 100 returns "hop on the roller coaster!"', () => {
      const expected = rollerCoasterPermission('hop on the roller coaster!');
      const actual = rollerCoasterPermission(102);
      expect(actual).toEqual(expected);
    });
    // more tests?
  });
  // more tests?
});
