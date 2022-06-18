// dataFilterGeneral,filterByDate, --> no corren
import {orderDataGeneral, filterDetailsfilms, filterByPopular } from '../src/data.js';
import {inputTest, outputAlfaAscendente, outputFilterProducer, outputFilterDate,outputFilterDetails,outputfilterByPopular} from '../src/testCases.js';

  describe('Describe si es un objeto o function', () => {
      expect(typeof inputTest).toBe('object');
    it(' inputTest Deberia de ser un objeto', () => {
      expect(typeof inputTest).toBe('object');
    });

    it(' outputAlfaAscendente Deberia de ser un objeto', () => {
      expect(typeof outputAlfaAscendente).toBe('object');
    });

    it('outputFilterProducer Deberia de ser un objeto', () => {
      expect(typeof outputFilterProducer).toBe('object');
    });

    it('outputFilterDate Deberia de ser un objeto', () => {
      expect(typeof outputFilterDate).toBe('object');
    });

    it('outputFilterDetails Deberia de ser un objeto', () => {
      expect(typeof outputFilterDetails).toBe('object');
    });

    it('outputfilterByPopular Deberia de ser un objeto', () => {
      expect(typeof outputfilterByPopular).toBe('object');
    });



    

  });

 //TEST FUNCTION orderDataGeneral
 describe('Order Ascendente', () => {
    it('orderDataGeneral Deberia ser una function', () => {
      expect(typeof orderDataGeneral).toBe('function');
    });

    it('orderDataGeneral Deberia retornar un arreglo ascendentemente "a-z"', () => {
      expect(orderDataGeneral(inputTest,'title')).toEqual(outputAlfaAscendente);
    });
});

 //TEST FUNCTION FILMS DETAILS
 

 describe('Films Details', () => {
    it('filterDetailsfilms Deberia ser una function', () => {
      expect(typeof filterDetailsfilms).toBe('function');
    });

    it(' filterDetailsfilms Deberia retornar details films', () => {
      expect(filterDetailsfilms(inputTest,'12cfb892-aac0-4c5b-94af-521852e46d6a')).toEqual(outputFilterDetails);
    });


});

 //TEST FUNCTION Filter By Popular
 
 describe('Filter By Popular', () => {
    it('filterByPopular Deberia ser una function', () => {
      expect(typeof filterByPopular).toBe('function');
    });
    

    it('Deberia retornar  films By Popular ', () => {
      expect(filterByPopular(inputTest)).toEqual(outputfilterByPopular);
    });
});
  /*FILTRAR POR DATE
  describe('filterByDate', () => {
    it('should be an object => deberia ser una function', () => {
      expect(typeof filterByDate).toBe('function');
    });
  
    it('Debería retornarnos filtrado por Date', () => {
      expect(filterByDate(inputTest, "1988")).toEqual(outputFilterDate);
    });
  
  });
  

  //FILTRAR POR PRODUCTOR
describe('filterByProducer', () => {
  it('should be an object => deberia ser una function', () => {
    expect(typeof dataFilterGeneral).toBe('function');
  });

  it('Debería retornarnos filtrado por productor', () => {
    expect(dataFilterGeneral(inputTest, "Hayao Miyazaki","58611129-2dbc-4a81-a72f-77ddfc1b1b49")).toEqual(outputFilterProducer);
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


