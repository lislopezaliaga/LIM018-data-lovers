import {orderData}  from './data.js';
import data from './data/ghibli/ghibli.js';

 const dataFilms = data.films;

 const idFilms=[];
 const titlesFilms=[];
 const descriptionFilms=[];
 const directorFilms=[];
 const producerFilms=[];
 const posterFilms=[];
 const releaseDateFilms=[];
 const rtScoreFilms=[];
 const peopleFilms=[];
 const locationsFilms=[];
 const vehiclesFilms=[];
 
 
  dataFilms.forEach((films)=>{
     idFilms.push(films.id);
     titlesFilms.push(films.title);
     descriptionFilms.push(films.description);
     directorFilms.push(films.director);
     producerFilms.push(films.producer);
     posterFilms.push(films.poster);
     releaseDateFilms.push(films.release_date);
     rtScoreFilms.push(films.rt_score);
     peopleFilms.push(films.people);
     locationsFilms.push(films.locations);
     vehiclesFilms.push(films.vehicles);
 
  });

const divFilmsContainer=document.querySelector('.divFilmsContainer');

 function showFilms(movies){
     movies.forEach((elementMovies)=>{
         const divElementMovies=document.createElement("div");
        const template=`
        <div class="divPosterTitle">
            <div class="divPoster">
                <img src="${elementMovies.poster}">
                <div class="divDate">
                <h3>${elementMovies.release_date}</h3>
                </div>
            </div>
            <div class="divTitle">
                 <h2>${elementMovies.title}</h2>
            </div>
        </div> 
        `;
        divElementMovies.innerHTML=template;
        divFilmsContainer.appendChild(divElementMovies);
        
     
     });
 };

 showFilms(dataFilms);
 
 const buttonOrder=document.getElementById('buttonOrder');
 buttonOrder.addEventListener('click',()=>{
     orderData(titlesFilms);
 })

 showFilms(dataFilms)








 


