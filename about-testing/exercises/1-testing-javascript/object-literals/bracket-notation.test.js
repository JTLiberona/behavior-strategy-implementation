'use strict';

describe('bracket notation', () => {
  describe('types of tasty treats', () => {
    const key1 = 'dry';
    const key2 = 'wet';
    const obj = {};
    obj[key2] = 'soup';
    obj[key1] = 'bread';
    it('obj.wet', () => {
      expect(obj.wet).toEqual('soup');
    });
    it('obj.dry', () => {
      expect(obj['dry']).toEqual('bread');
    });
  });
  
  //    DIFFERENT PROBLEM     //    DIFFERENT PROBLEM     //    DIFFERENT PROBLEM     //    DIFFERENT PROBLEM     //    DIFFERENT PROBLEM     //
  
  
  describe('a menagerie', () => {
    const motion = 'running';
    const fastAnimal = 'cheetah';
    const water = 'mackerel';
    const obj = {
      swimming: 'mackerel',
    };
   
    obj['flying'] = 'crane';
    obj['flying'] = 'crane';
    it('obj.flying', () => {
      expect(obj.flying).toEqual('crane');
    });

    obj['running'] = 'running'
    it('obj.running', () => {
      expect(obj['running']).toEqual(motion);
    });
    
    obj['water'] = 'mackerel';
    it('obj.swimming', () => {
      expect(obj['water']).toEqual('mackerel');
    });
  });
});
