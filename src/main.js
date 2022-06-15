import {orderData,
     filterByProducer,
    filter,filterDetailsfilms,
    repeatYear,
    filterByPopular,
    repeatDirector,
    repeatProducer,
     dataFiltere} from './data.js';

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

})}

 showFilms(dataFilms);
 //mostrar Productores 
 const producer=document.querySelector('.ulProducer');
 function showProducer(movie){
 movie.forEach((elementFilms)=>{
         
             let createLi=document.createElement("li");
             let producerTemplate=` 
             <li ><option class="byproducer" id="${elementFilms}">${elementFilms}</option></li>
                 `;
                 createLi.innerHTML=producerTemplate;
                 producer.appendChild(createLi);	
 
 })}
showProducer(repeatProducer(dataFilms));

//mostrar DIRECTORES
const director=document.querySelector('.ulDirector');
function showDirector(movie){
movie.forEach((elementFilms)=>{
        
            let Element=document.createElement("li");
            let directorTemplate=` 
            <li><option class="bydirector" id="${elementFilms}">${elementFilms}</option></li>
                `;
                Element.innerHTML=directorTemplate;
                director.appendChild(Element);	

})}
showDirector(repeatDirector(dataFilms));


 //mostrar Botones de años

const divYear=document.querySelector('.divYear');
function showYear(movie){
movie.forEach((elementFilms)=>{
        
            let divElementYear=document.createElement("div")
            let buttonsYear=` 
                <button class="buttonYear" value="${elementFilms}">${elementFilms}</button>
                `;
                divElementYear.innerHTML=buttonsYear;
                divYear.appendChild(divElementYear);	

})}

showYear(repeatYear(dataFilms));

 //mostrar Películas Mas Populares
let contador=0;
 const divMorePopular=document.querySelector('.divpopular');
 function showPopular(movie){
 movie.forEach((elementFilms)=>{
         
             let divElementYear=document.createElement("div")
             let templatePopular=`
             
             <div class="divByPopular" id="${elementFilms.id}">
                 <div class="divMorepopular">
                     <div><p class="labelNum">${contador+=1}</p></div>
                     
                     <img src="${elementFilms.poster}">
                     <div class="divPopularText"> 
                        <h3>${elementFilms.title}</h3>
                        <h3>${elementFilms.release_date}</h3>
                        <h4>SCORE ${elementFilms.rt_score}</h4>
                     </div>
                     
                 </div>
         
             </div> 
             `;
                 divElementYear.innerHTML=templatePopular;
                 divMorePopular.appendChild(divElementYear);	
 })

 const buttondetailsFilm=document.querySelectorAll('.divByPopular');
 buttondetailsFilm.forEach((selectPoster) =>{
 selectPoster.addEventListener('click',function(){

     document.querySelector('.divConteinerGeneralFilms').style.display="none";
     showFilmsDetails(filterDetailsfilms(dataFilms,this.id));

 })

})}

 showPopular(filterByPopular(dataFilms));


//mostrar detalle de cada pelicula

const divFilmsDetailsContainer=document.querySelector('.divFilmsDetails');

 function showFilmsDetails(movies){
     movies.forEach((elementMovies)=>{
        const divElementMovies=document.createElement("div");
        const template=`
        <div class="divGeneralMovies" >
            <div class="divFilmsDescription">
                <h2>${elementMovies.title}</h2>
                <div class="divImageMovie">
                <img src="${elementMovies.poster}">
                </div>
                <div class="divDescriptionGeneral">
                    <h3>DATE: ${elementMovies.release_date}</h3>
                    <h3>DIRECTOR: ${elementMovies.director}</h3>
                    <h3>PRODUCER: ${elementMovies.producer}</h3>
                    <h3>DESCRIPTION: ${elementMovies.description}</h3>
                </div>
                <div class="divPuntuacion">
                    <img src="img/score.png">
                    <h3>Score: ${elementMovies.rt_score}</h3>
                    <img src="img/multitud.png">
                    <h3>N° People:</h3>
                    <img src="img/location.png">
                    <h3>N° Locationes:</h3>
                    <img src="img/coche.png">
                    <h3>N° Vehicles:</h3>

                </div>
                <div class="divpeople">
                
                <h3>PEOPLE</h3>
                
                </div>
                <div class="divvehicles">
                <button>vehicles</button>
                </div>
                <div class="divlocations">
                <button>Locations</button> 
                </div>
            </div>
           
        </div> 
        `;
        divElementMovies.innerHTML=template;
        divFilmsDetailsContainer.appendChild(divElementMovies);

        //mostrando Personajes
        const divpeople=document.querySelector('.divpeople');
        elementMovies.people.forEach((element)=>{
                
                    let divnewPeople=document.createElement("div")
                    let peopleTemplate=` 
                    <div class="divPeopleImg">
                    <img src="${element.img}"> 
                    </div>
                        `;
                        divnewPeople.innerHTML=peopleTemplate;
                        divpeople.appendChild(divnewPeople);
                //creando 
                        
                        
        });
//Al darle click al poster de cada people
const modal= document.querySelector("#modal");//MODAL
const buttondetailsFilm=document.querySelectorAll('.divPeopleImg');
buttondetailsFilm.forEach((selectPoster) =>{
selectPoster.addEventListener('click',function(){
    modal.showModal();
    document.querySelector("#btn-cerrar-modal").addEventListener("click",()=>{
        modal.close();
      })

})

}) })

        const divVehicles=document.querySelector('.divvehicles');
        elementMovies.vehicles.forEach((element)=>{
                
                    let divnewPeople=document.createElement("div")
                    let peopleTemplate=` 
                    <div>
                    <img src="${element.img}"> 
                    </div>
                        `;
                        divnewPeople.innerHTML=peopleTemplate;
                        divVehicles.appendChild(divnewPeople);	
        });
        
        const divLocations=document.querySelector('.divlocations');
        elementMovies.locations.forEach((element)=>{
                
                    let divnewPeople=document.createElement("div")
                    let peopleTemplate=` 
                    <div>
                    <img src="${element.img}"> 
                    </div>
                        `;
                        divnewPeople.innerHTML=peopleTemplate;
                        divLocations.appendChild(divnewPeople);	
        });
          
     };


 //mostrar imagenes de people
 /*
 const divpeople=document.querySelector('.divpe');
function showpeople(movie){
    
movie.forEach((element)=>{
        
            let divEl=document.createElement("div")
            let buttonsYe=` 
            <div>
            <img src="${element.img}"> 
            </div>
                `;
                divEl.innerHTML=buttonsYe;
                divpeople.appendChild(divEl);	
})
};
showpeople(peopleFilms[0]);*/


/*Al darle clic al menu desplegable order AZ */
const orderAZ=document.getElementById('orderAz');
orderAZ.addEventListener('click',()=>{
    
   document.querySelector('.divFilmsContainer').innerHTML="";

   orderData(dataFilms);
   showFilms(dataFilms);
   
});
/**********************************/
/*Al darle clic al menu desplegable order ZA */
const orderZA=document.getElementById('OrderZa');
orderZA.addEventListener('click',()=>{
    
    document.querySelector('.divFilmsContainer').innerHTML="";

    orderData(dataFilms);
    showFilms(dataFilms.reverse());
   
});
/**********************************/

/*
const buttonProducer=document.getElementById('buttonProducer');
buttonProducer.addEventListener("click",()=>{
   document.querySelector('.divFilmsContainer').innerHTML="";
   let newDataFilms= filterByProducer(dataFilms, "Toshio Suzuki");
  // console.log(filterByProducer(newDataFilms, "Toshio Suzuki"));//Isao Takahata Toshio Suzuki
   //console.log(newDataFilms);
   showFilms(newDataFilms);
});*/


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

/**al dar clic al boton productor */

const buttonproducer=document.querySelectorAll('.byproducer');

buttonproducer.forEach((selectButton) =>{
    selectButton.addEventListener('click',function(){

        document.querySelector('.divFilmsContainer').innerHTML="";
 
       let idproducer= this.id;

       let newData= dataFiltere(dataFilms,"producer",idproducer);
      showFilms(newData);


    })
});

/**al dar clic al boton director */
const buttondirector=document.querySelectorAll('.bydirector');

buttondirector.forEach((selectButton) =>{
    selectButton.addEventListener('click',function(){

        document.querySelector('.divFilmsContainer').innerHTML="";
 
       let iddirector= this.id;

       let newData= dataFiltere(dataFilms,"director",iddirector);
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




 


