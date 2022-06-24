
import {orderDataGeneral, filterDetailsfilms, filterByPopular,
   dataFilterGeneral, filterByDate,repeatYear, repeatDirector, 
   repeatProducer, search,countDirectorProducer } from '../src/data.js';

import {inputTest, outputAlfaAscendente, outputFilterProducer,
   outputFilterDate,outputFilterDetails,outputfilterByPopular,
   outputRepeatYear, outputRepeatDirector, outputRepeatProducer,
   outputSearch,inputCounter,outputCounter} from '../src/testCases.js';

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

    it('outputRepeatYear Deberia de ser un objeto', () => {
      expect(typeof outputRepeatYear).toBe('object');
    });

    it('outputRepeatDirector Deberia de ser un objeto', () => {
      expect(typeof outputRepeatDirector).toBe('object');
    });

    it('outputRepeatProducer Deberia de ser un objeto', () => {
      expect(typeof outputRepeatProducer).toBe('object');
    });

    it('outputSearch Deberia de ser un objeto', () => {
      expect(typeof outputSearch).toBe('object');
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
    it('Debería retornar un TypeError', () => {
      expect(()=>orderDataGeneral(null,"title")).toThrow(TypeError);
      expect(() =>orderDataGeneral(inputTest,null)).toThrow(TypeError);
      expect(() =>orderDataGeneral(null, [])).toThrow(TypeError);
      expect(() => orderDataGeneral(0, "")).toThrow(TypeError);
      expect(() => orderDataGeneral()).toThrow(TypeError);
      expect(() => orderDataGeneral([], "title")).toThrow(TypeError);
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

    it('should throw TypeError when invoked with wrong argument types', () => {
      expect(() => filterDetailsfilms()).toThrow(TypeError);
      expect(() => filterDetailsfilms(0)).toThrow(TypeError);
      expect(() => filterDetailsfilms(null, [])).toThrow(TypeError);
      expect(() => filterDetailsfilms(0, 0)).toThrow(TypeError);
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

    it('should throw TypeError when invoked with wrong argument types', () => {
      expect(() => filterByPopular()).toThrow(TypeError);
      expect(() => filterByPopular(0)).toThrow(TypeError);
      expect(() => filterByPopular(null, [])).toThrow(TypeError);
      expect(() => filterByPopular(0, 0)).toThrow(TypeError);
    });
});
 

  //FILTRAR POR PRODUCTOR
describe('filterByProducer', () => {
  it('should be an function => deberia ser una function', () => {
    expect(typeof dataFilterGeneral).toBe('function');
  });

  it('Debería retornarnos filtrado por productor', () => {
    expect(dataFilterGeneral(inputTest, "producer","Hayao Miyazaki")).toEqual(outputFilterProducer);
  });

  it('Debería retornar un TypeError', () => {
    expect(()=>dataFilterGeneral(null,"","Hayao Miyazaki")).toThrow(TypeError);
    expect(() =>dataFilterGeneral(inputTest,null,null)).toThrow(TypeError);
    expect(() =>dataFilterGeneral(null, [],null)).toThrow(TypeError);
    expect(() => dataFilterGeneral(0, "")).toThrow(TypeError);
    expect(() => dataFilterGeneral()).toThrow(TypeError);
    expect(() => dataFilterGeneral([], "")).toThrow(TypeError);
  });
 

});



 //FILTRAR POR DATE
  describe('filterByDate', () => {
    it('should be an function => deberia ser una function', () => {
      expect(typeof filterByDate).toBe('function');
    });
  
    it('Debería retornarnos filtrado por Date', () => {
      expect(filterByDate(inputTest, "1988")).toEqual(outputFilterDate);
    });

    it('Debería retornar un TypeError', () => {
      expect(()=>filterByDate(null,"","")).toThrow(TypeError);
      expect(() =>filterByDate(inputTest,null)).toThrow(TypeError);
      expect(() =>filterByDate(null,null)).toThrow(TypeError);
      expect(() => filterByDate(0, "")).toThrow(TypeError);
      expect(() => filterByDate()).toThrow(TypeError);
      expect(() => filterByDate([], "")).toThrow(TypeError);
    });
  
  });


  
 //QUE NO SE REPITA EL AÑO
 describe('repeatYear', () => {
  it('should be an function => deberia ser una function', () => {
    expect(typeof repeatYear).toBe('function');
  });

  it('Debería retornarnos filtrado por Date no repet', () => {
    expect(repeatYear(inputTest)).toEqual(outputRepeatYear);
  });

  it('should throw TypeError when invoked with wrong argument types', () => {
    expect(() => repeatYear()).toThrow(TypeError);
    expect(() => repeatYear(0)).toThrow(TypeError);
    expect(() => repeatYear(null, [])).toThrow(TypeError);
    expect(() => repeatYear(0, 0)).toThrow(TypeError);
  });

});

  
 // QUE NO SE REPITA EL director
 describe('repeatDirector', () => {
  it('should be an function => deberia ser una function', () => {
    expect(typeof repeatDirector).toBe('function');
  });

  it('Debería retornarnos filtrado por no repeatDirector', () => {
    expect(repeatDirector(inputTest)).toEqual(outputRepeatDirector);
  });

  it('should throw TypeError when invoked with wrong argument types', () => {
    expect(() => repeatDirector()).toThrow(TypeError);
    expect(() => repeatDirector(0)).toThrow(TypeError);
    expect(() => repeatDirector(null, [])).toThrow(TypeError);
    expect(() => repeatDirector(0, 0)).toThrow(TypeError);
  });
  


});

 //QUE NO SE REPITA EL productor
 describe('repeatProducer', () => {
  it('should be an function => deberia ser una function', () => {
    expect(typeof repeatProducer).toBe('function');
  });

  it('Debería retornarnos filtrado por no repeatProducer', () => {
    expect(repeatProducer(inputTest)).toEqual(outputRepeatProducer);
  });

  it('should throw TypeError when invoked with wrong argument types', () => {
    expect(() => repeatProducer()).toThrow(TypeError);
    expect(() => repeatProducer(0)).toThrow(TypeError);
    expect(() => repeatProducer(null, [])).toThrow(TypeError);
    expect(() => repeatProducer(0, 0)).toThrow(TypeError);
  });
 
});

 //MÉTODO SEARCH
 describe('search', () => {
  it('should be an function => deberia ser una function', () => {
    expect(typeof search).toBe('function');
  });

  it('Debería retornarnos el elemento buscado', () => {
    expect(search(inputTest,'c')).toEqual(outputSearch);
  });
  it('should throw TypeError when invoked with wrong argument types', () => {
    expect(() => search()).toThrow(TypeError);
    expect(() => search(0)).toThrow(TypeError);
    expect(() => search(null, [])).toThrow(TypeError);
    expect(() => search(0, 0)).toThrow(TypeError);
  });

});

 //MÉTODO contador
 describe('countDirectorProducer', () => {
  it('should be an function => deberia ser una function', () => {
    expect(typeof countDirectorProducer).toBe('function');
  });

  it('Debería retornarnos un objeto con los elementos contados por productor', () => {
    expect(countDirectorProducer(inputCounter)).toEqual(outputCounter);
  });

  it('should throw TypeError when invoked with wrong argument types', () => {
    expect(() => countDirectorProducer()).toThrow(TypeError);
    expect(() => countDirectorProducer(0)).toThrow(TypeError);
    expect(() => countDirectorProducer(null)).toThrow(TypeError);
 
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


