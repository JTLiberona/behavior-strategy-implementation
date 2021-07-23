'use strict';

describe('computed properties', () => {
  describe('types of tasty treats', () => {
    const wet = 'soup';
    const dry = 'bread';
    const obj = {
      ['soup']: 'wet',
      ['bread']: 'dry',
    };
    it('obj.soup', () => {
      expect(obj.soup).toEqual('wet');
    });
    it('obj.dry', () => {
      expect(obj.bread).toEqual('dry');
    });
  });
  
  
  describe('a menagerie', () => {
    const swimming = 'mackerel';
    const mackerel = 'swimming';
    const inTheSky = 'crane';
    const obj = {
      ['flying']: 'crane',
      ['swimming']: 'mackerel', // use existing variables to complete this one
      ['running']: 'cheeta',
    };
    it('obj.flying', () => {
      expect(obj.flying).toEqual('crane');
    });
    it('obj.running', () => {
      expect(obj.running).toEqual('cheeta');
    });
    it('obj.swimming', () => {
      expect(obj.swimming).toEqual('mackerel');
    });
  });
});
