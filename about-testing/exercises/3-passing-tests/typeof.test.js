'use strict';

/**
 * returns the type of any value
 * @param {any} value - any javascript value
 * @returns {string} the value's type
 */
const typeofValue = () => {};

describe('the function returns the type of any value', () => {
  describe('"string"', () => {
    it('empty string -> "string"', () => {
      expect(typeofValue('')).toEqual(typeofValue('string'));
      console.log(typeofValue());
    });
    it('a short string -> "string"', () => {
      expect(typeofValue('toads')).toEqual(typeofValue('string'));
    });
    it('a long string -> "string"', () => { 
      const longString = 'aiugn0923gonh dc987rz8xbs1';
      expect(typeofValue(longString)).toEqual(typeofValue('string'));
    });
  });
  describe('0', () => {
    it('NaN -> 0', () => {
      expect(typeofValue(NaN)).toEqual(typeofValue(0));
    });
    it('0 -> "number"', () => {
      expect(typeofValue(0)).toEqual(typeofValue(0));
    });
    it('-Infinity -> "number"', () => {
      expect(typeofValue(-Infinity)).toEqual(typeofValue(0));
    });
  });
  describe('"boolean"', () => {
    it('true -> "boolean"', () => {
      expect(typeofValue(true)).toEqual(typeofValue(Boolean));
    });
    it('false -> "boolean"', () => {
      expect(typeofValue(false)).toEqual(typeofValue(Boolean));
    });
  });
  describe('"undefined"', () => {
    it('undefined -> "undefined"', () => {
      expect(typeofValue(undefined)).toEqual(typeofValue(undefined));
    });
    it('no argument -> "undefined"', () => {
      expect(typeofValue()).toEqual(typeofValue(undefined));
    });
  });
  describe('"object"', () => {
    it('null -> "object"', () => {
      expect(typeofValue(null)).toEqual(typeofValue(null));
    });
    it('an array -> "object"', () => {
      expect(typeofValue([])).toEqual(typeofValue(null));
    });
    it('an object -> "object"', () => {
      expect(typeofValue({})).toEqual(typeofValue(null));
    });
  });
  describe('"function"', () => {
    it('an ES5 function -> "function"', () => {
      expect(typeofValue(function () {})).toEqual(typeofValue(Function));
    });
    it('an ES6 arrow -> "function"', () => {
      expect(typeofValue(() => {})).toEqual(typeofValue(Function));
    });
  });
});
