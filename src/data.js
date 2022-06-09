// estas funciones son de ejemplo




export const filterByProducer = (arrayObj, elementProducer) => {
  const films = arrayObj.filter(obj => obj.producer.includes(elementProducer));
  return films;
};


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
};

/*export const anotherExample = () => {
  return 'OMG';
}*/
