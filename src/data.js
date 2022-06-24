


/*****************FILTRADO GENERAL***************************/
export const dataFilterGeneral = (data,category, value) => {
  let result = data.filter(movie => movie[category] === value);
  return result;
  }
  /**********************************************************/
  /*****************ORDENADO GENERAL***************************/
  export const orderDataGeneral = (arrayGeneral,category) => {
    arrayGeneral.sort((a, b) => {
     
      if (a[category] < b[category]) {
        return -1;
      }
      return 1;
    })
  
    return arrayGeneral;
  };



export const filterByDate = (arrayObj, año) => {
  const films = arrayObj.filter(obj => obj.release_date.includes(año));
  return films;
};

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


export let orderDataScore= (movies) => {
  movies.sort((a, b) => {
  return b.rt_score-a.rt_score;
  })
  return movies;


};


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









