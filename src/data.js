// estas funciones son de ejemplo


export const orderData = (movies) => {
  movies.sort((a, b) => {
    if (a.title == b.title) {
      return 0;
    }
    if (a.title < b.title) {
      return -1;
    
    }
    return 1;
  })

  return movies;
};

export const filterByProducer = (arrayObj, elementProducer) => {
 
  let films = arrayObj.filter(obj=> obj.producer.includes(elementProducer));
return films;  

};

export let orderDataScore= (movies) => {

  movies.sort((a, b) => {
  return b.rt_score-a.rt_score;
  })
  return movies;
};






/*export const anotherExample = () => {
  return 'OMG';
}*/

export const filter = (arrayObj, año) => {
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

export const filterByPopular = (arrayObj) => {
  orderDataScore(arrayObj);

  let films = arrayObj.filter(obj=> obj.rt_score>96);
return films;

};



