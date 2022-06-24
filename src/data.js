


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

export const filterDetailsfilms = (array, id) => {
  const films = array.filter(ob => ob.id.includes(id));
  return films;
};

export const repeatYear=(movies)=>{
 const arr=[];
  movies.forEach((item)=>{
      if(!arr.includes(item.release_date)){
        arr.push(item.release_date);
    }
  })
return arr;
   
}
export const repeatDirector=(movies)=>{
  const arr=[];
   movies.forEach((item)=>{
       if(!arr.includes(item.director)){
         arr.push(item.director);
     }
   })
 return arr;
    
 }

 
 export const repeatProducer=(movies)=>{
  const arr=[];
   movies.forEach((item)=>{
       if(!arr.includes(item.producer)){
         arr.push(item.producer);
     }
   })
 return arr;
    
 }

export const filterByPopular = (arrayObj) => {
  orderDataScore(arrayObj);

  let films = arrayObj.filter(obj=> obj.rt_score>94);
return films;

};











export const search = (arrayObj, input) => {
let arrayNew=[];
   arrayObj.filter(function(elemento){
    if(elemento.title.toLowerCase().startsWith(input)){
      arrayNew.push(elemento);
      }
      

});
return arrayNew;
};


export let orderDataScore= (movies) => {
  movies.sort((a, b) => {
  return b.rt_score-a.rt_score;
  })
  return movies;


};


export const countDirectorProducer=(movies)=>{
return movies.reduce((counter, name) => {
            
  if (counter[name]) {
  counter[name] = counter[name] + 1;
  
  }else{
  counter[name] = 1;
  }
  return counter

}, {});

}









