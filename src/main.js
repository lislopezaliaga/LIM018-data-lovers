import {orderData, filterByProducer,filter,filterDetailsfilms}  from './data.js';
import data from './data/ghibli/ghibli.js';

 const dataFilms = data.films;
 console.log(dataFilms[0]);

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


  //Mostrar peliculas
const divFilmsContainer=document.querySelector('.divFilmsContainer');

 function showFilms(movies){
     movies.forEach((elementMovies)=>{
         const divElementMovies=document.createElement("div");
        const template=`
        <div class="divPosterTitle" id="${elementMovies.id}" >
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

     const buttondetailsFilm=document.querySelectorAll('.divPosterTitle');
buttondetailsFilm.forEach((selectPoster) =>{
    selectPoster.addEventListener('click',function(){

    document.querySelector('.divConteinerGeneralFilms').style.display="none";
      showFilmsDetails(filterDetailsfilms(dataFilms,this.id));

    })
});
 };
 showFilms(dataFilms);

 //mostrar Botones de años

const divYear=document.querySelector('.divYear');
function showYear(movie){
movie.forEach((elementFilms)=>{
    let divElementYear=document.createElement("div")
    let buttonsYear=` 
        <button class="buttonYear" value="${elementFilms.release_date}">${elementFilms.release_date}</button>
        `;
        divElementYear.innerHTML=buttonsYear;
        divYear.appendChild(divElementYear);

})
};
showYear(dataFilms);

//mostrar detalle de cada pelicula

const divFilmsDetailsContainer=document.querySelector('.divFilmsDetails');

 function showFilmsDetails(movies){
     movies.forEach((elementMovies)=>{
        const divElementMovies=document.createElement("div");
        const template=`
        <div class="divGeneralMovies" ">
            <div class="divFilmsDescription">
                <h2>${elementMovies.title}</h2>

                <img src="${elementMovies.poster}">
                <div>
                    <h3>DATE: ${elementMovies.release_date}</h3>
                    <h3>DIRECTOR${elementMovies.director}</h3>
                    <h3>PRODUCER${elementMovies.producer}</h3>
                    <h3>DESCRIPTION${elementMovies.description}</h3>
                </div>
                <div>
                    <h3>Score: ${elementMovies.rt_score}</h3>
                    <h3>N° People:</h3>
                    <h3>N° Locationes:</h3>
                    <h3>N° Vehicles:</h3>

                </div>
                <div>
                <img src="${elementMovies.people.img}"> 
                </div>
                <div>
                <img src="${elementMovies.locations.img}"> 
                </div>
                <div>
                <img src="${elementMovies.vehicles.img}"> 
                </div>
            </div>
           
        </div> 
        `;
        divElementMovies.innerHTML=template;
        divFilmsDetailsContainer.appendChild(divElementMovies);
        
     
     });
 };





const buttonOrderAZ=document.getElementById('buttonOrderAZ');
buttonOrderAZ.addEventListener('click',()=>{
    
   document.querySelector('.divFilmsContainer').innerHTML="";

   orderData(dataFilms);

   showFilms(dataFilms);




});
const buttonOrderZA=document.getElementById('buttonOrderZA');
buttonOrderZA.addEventListener('click',()=>{

   document.querySelector('.divFilmsContainer').innerHTML="";

   orderData(dataFilms);

   showFilms(dataFilms.reverse());

});

const buttonProducer=document.getElementById('buttonProducer');
buttonProducer.addEventListener("click",()=>{
   document.querySelector('.divFilmsContainer').innerHTML="";
   let newDataFilms= filterByProducer(dataFilms, "Toshio Suzuki");
  // console.log(filterByProducer(newDataFilms, "Toshio Suzuki"));//Isao Takahata Toshio Suzuki
   //console.log(newDataFilms);
   showFilms(newDataFilms);
});


//BOTON YEAR
const buttonYear=document.querySelectorAll('.buttonYear');

buttonYear.forEach((selectButton) =>{
    selectButton.addEventListener('click',function(){

        document.querySelector('.divFilmsContainer').innerHTML="";
 
       let valueYear= this.value;

       let newData= filter(dataFilms,valueYear);
      showFilms(newData);
    

      

       


    })
});

//mostrar detalle de cada pelicula al hacer click
/*const buttondetailsFilm=document.querySelectorAll('.divPosterTitle');
buttondetailsFilm.forEach((selectPoster) =>{
    selectPoster.addEventListener('click',function(){

    document.querySelector('.divConteinerGeneralFilms').style.display="none";
      showFilmsDetails(filterDetailsfilms(dataFilms,this.id));

    })
});*/




 


