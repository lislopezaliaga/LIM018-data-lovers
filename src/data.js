


/*****************FILTRADO GENERAL***************************/
export const dataFilterGeneral = (data,category, value) => {
  let result = data.filter(movie => movie[category] === value);
  return result;
  }
  /**********************************************************/
  /*****************ORDENADO GENERAL***************************/
  export const orderDataGeneral = (arrayGeneral,category) => {
    arrayGeneral.sort((a, b) => {
      if (a[category] == b[category]) {
        return 0;
      }
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




export const graphicStatsxDirector  =(movies)=> {
const a=movies.map(item => item.director);
return a
}






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









