


/*****************FILTRADO GENERAL***************************/
export const dataFilterGeneral = (data,category, value) => {
  try {

    if(data==null|| category==null || data.length==0||category==""||value==null||value==""){
      throw new TypeError("Error")
    }

    let result = data.filter(movie => movie[category] === value);
    return result;
  } catch (error) {
    console.toThrow(error);
  }
 
  }
  /**********************************************************/
  /*****************ORDENADO GENERAL***************************/
  
  export const orderDataGeneral = (arrayGeneral,category) => {
    try {
      if(arrayGeneral==null|| category==null || arrayGeneral.length==0||category==""){
        throw new TypeError("Error")
      }

      arrayGeneral.sort((a, b) => {
     
        if (a[category] < b[category]) {
          return -1;
        }
        return 1;
      })
    
      return arrayGeneral;

    } catch (error) {
      console.toThrow(error);

    }
    
  };


/**filtra por fecha*/
export const filterByDate = (arrayObj, año) => {
  try {
    if(arrayObj==null|| año==null || arrayObj.length==0||año==""){
      throw new TypeError("Error")
    }
    const films = arrayObj.filter(obj => obj.release_date.includes(año));
    return films;
  } catch (error) {
    console.toThrow(error);
  }
 
};

/**filtra detalles de films */
export const filterDetailsfilms = (array, id) => {
  try {
    if(array==null|| id==null || array.length==0||id==""){
      throw new TypeError("Error")
    }


    const films = array.filter(ob => ob.id.includes(id));
    return films;
  } catch (error) {
    console.toThrow(TypeError);
  }
  
};


/**NO repetir año */
export const repeatYear=(movies)=>{
  try {
    if(movies==null ||  movies.length==0){
      throw new TypeError("Error")
    }

    const arr=[];
    movies.forEach((item)=>{
        if(!arr.includes(item.release_date)){
          arr.push(item.release_date);
      }
    })
  return arr;
  } catch (error) {
    console.toThrow(TypeError);
  }

   
}

/**NO repetir director */
export const repeatDirector=(movies)=>{

  try {
    if(movies==null ||  movies.length==0){
      throw new TypeError("Error")
    }

    const arr=[];
    movies.forEach((item)=>{
        if(!arr.includes(item.director)){
          arr.push(item.director);
      }
    })
  return arr;
  } catch (error) {
    console.toThrow(TypeError);
  }
 
    
 }

 /**NO repetir productor */
 export const repeatProducer=(movies)=>{
  try {
    if(movies==null ||  movies.length==0){
      throw new TypeError("Error")
    }

    const arr=[];
    movies.forEach((item)=>{
        if(!arr.includes(item.producer)){
          arr.push(item.producer);
      }
    })
  return arr;
  } catch (error) {
    console.toThrow(TypeError);
  }

    
 }


/**Filtrar por productor */
export const filterByPopular = (arrayObj) => {

  try {
      if(arrayObj==null ||  arrayObj.length==0){
        throw new TypeError("Error")
      }
      orderDataScore(arrayObj);

      let films = arrayObj.filter(obj=> obj.rt_score>94);
    return films;

    } catch (error) {
      console.toThrow(TypeError);
    }

};








/**Metodo buscar films */


export const search = (arrayObj, input) => {
  try {

    if(arrayObj==null|| input==null || arrayObj.length==0||input==""){
      throw new TypeError("Error")
    }


    let arrayNew=[];
    arrayObj.filter(function(elemento){
     if(elemento.title.toLowerCase().startsWith(input)){
       arrayNew.push(elemento);
       }
       
      });
 return arrayNew;
  } catch (error) {
    console.toThrow(TypeError);
  }

};

/** Ordena por score*/
 let orderDataScore= (movies) => {
  movies.sort((a, b) => {
  return b.rt_score-a.rt_score;
  })
  return movies;


};

/////////////////**Contador de Productores y directores */
export const countDirectorProducer=(movies)=>{
  try {
    if(movies==null ||  movies.length==0){
      throw new TypeError("Error")
    }

    return movies.reduce((counter, name) => {
            
      if (counter[name]) {
      counter[name] = counter[name] + 1;
      
      }else{
      counter[name] = 1;
      }
      return counter
    
    }, {});
    
  } catch (error) {
    console.toThrow(TypeError);

  }


}









