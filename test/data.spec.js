import {orderData, filterByProducer } from '../src/data.js';
import {inputTest, outputAlfaAscendente, outputFilterProducer } from '../src/testCases.js';

  describe('Describe si es un objeto o function', () => {
    it('Deberia de ser un objeto', () => {
      expect(typeof inputTest).toBe('object');
    });

    it('Deberia de ser un objeto', () => {
      expect(typeof outputAlfaAscendente).toBe('object');
    });

    it('Deberia ser una function', () => {
      expect(typeof orderData).toBe('function');
    });

  });

 //TEST FUNCTION ORDERdATA
 describe('Order Ascendente', () => {
  it('Deberia retornar un arreglo ascendentemente "a-z"', () => {
    expect(orderData(inputTest)).toEqual(outputAlfaAscendente);
  });
});

  

  //FILTRAR POR PRODUCTOR
describe('filterByProducer', () => {
  it('should be an object => deberia ser una function', () => {
    expect(typeof filterByProducer).toBe('function');
  });

  it('Debería retornarnos filtrado por productor', () => {
    expect(filterByProducer(inputTest, "Hayao Miyazaki")).toEqual(outputFilterProducer);
  });

});
/*
  it('returns `example`', () => {
    expect(example()).toBe('example');
  });
});


describe('anotherExample', () => {
  it('is a function', () => {
    expect(typeof anotherExample).toBe('function');
  });

  it('returns `anotherExample`', () => {
    expect(anotherExample()).toBe('OMG');
  });*/


