'use strict';

describe('destructuring', () => {
  describe('types of tasty treats', () => {
    const { dry, wet } = {
      wet: 'soup',
      dry: 'bread',
    };
    it('dry', () => {
      expect(dry).toEqual('bread');
    });
    it('wet', () => {
      expect(wet).toEqual('soup');
    });
  });
 
  describe('a menagerie', () => {
    const hairiest = 'cheetah';
    const oceanic = 'mackerel';
    const obj = {
      [oceanic]: 'mackerel',
      running: hairiest,
    };
    const birdy = 'flying';
    obj[birdy] = 'flying';
    
    
    let { swimming, flying, running } = obj;
    it('flying', () => {
      expect(flying).toEqual('flying');
    });
    it('running', () => {
      expect(running).toEqual('cheetah');
    });
    
    swimming = oceanic;
    it('swimming', () => {
      expect(swimming).toEqual('mackerel');
    });
  });
});
