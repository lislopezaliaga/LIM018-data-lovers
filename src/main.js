import { filter,filterDetailsfilms,repeatYear,filterByPopular,repeatDirector,
    repeatProducer,orderDataGeneral, dataFilterGeneral,search}  from './data.js';

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
 
 console.log(filterDetailsfilms(dataFilms[0].people, "fe93adf2-2f3a-4ec4-9f68-5422f1b87c01"));
 

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

/*****************************MOSTRAR LAS PELÍCULAS ********************************************/
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
    })
}
    /***Llamando a la función showFilms ******/
showFilms(dataFilms);
/*************************************************************************/

/******************MOSTRANDO EN LA LISTA DESPLEGABLE LOS PRODUCTORES******************/
const producer=document.querySelector('.ulProducer');
function showProducer(movie){
    movie.forEach((elementFilms)=>{
         
             let createLi=document.createElement("li");
             let producerTemplate=` 
             <li ><option class="byproducer" id="${elementFilms}">${elementFilms}</option></li>
                 `;
                 createLi.innerHTML=producerTemplate;
                 producer.appendChild(createLi);	
    })
}
showProducer(repeatProducer(dataFilms));

/*************************************************************************/

/***************MOSTRANDO EN LA LISTA DESPLEGABLE LOS DIRECTORES*************/

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
/*************************************************************************/

/***************MOSTRANDO LOS BOTONES DE LOS AÑOS*************/
const divYear=document.querySelector('.divYear');
function showYear(movie){
    movie.forEach((elementFilms)=>{
        let divElementYear=document.createElement("div")
        let buttonsYear=` 
            <button class="buttonYear" value="${elementFilms}">${elementFilms}</button>
                `;
        divElementYear.innerHTML=buttonsYear;
        divYear.appendChild(divElementYear);	
    })
}
showYear(repeatYear(dataFilms));
/*************************************************************************/

/***************MOSTRANDO LAS PELÍCULAS MAS POPULARES*************/
let contador=0;
const divMorePopular=document.querySelector('.divpopular');
function showPopular(movie){
    movie.forEach((elementFilms)=>{
         
        let divElementYear=document.createElement("div")
        let templatePopular=`
            <div class="divByPopular" id="${elementFilms.id}">
                <div class="divMorepopular">
                     <div><p class="labelNum">0${contador+=1}</p></div>
                     
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
    });

    const buttondetailsFilm=document.querySelectorAll('.divByPopular');
    buttondetailsFilm.forEach((selectPoster) =>{
        selectPoster.addEventListener('click',function(){

            document.querySelector('.divConteinerGeneralFilms').style.display="none";
            showFilmsDetails(filterDetailsfilms(dataFilms,this.id));

         })
    })
}

 showPopular(filterByPopular(dataFilms));
/*************************************************************************/

/***********************MOSTRAR EN DETALLE LA PELÍCULA******************************************/
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
                
                </div>
                <div class="divlocations">
             
                </div>
            </div>
           
        </div> 
        `;
        divElementMovies.innerHTML=template;
        divFilmsDetailsContainer.appendChild(divElementMovies);

        /*********************Mostrando Cada Personaje*************************/
        const divpeople=document.querySelector('.divpeople');
        elementMovies.people.forEach((element)=>{
                
            let divnewPeople=document.createElement("div")
            let peopleTemplate=` 
                <div class="divPeopleImg"  id="${element.id}">
                    <img src="${element.img}"> 

                    </div>
                        `;
                        divnewPeople.innerHTML=peopleTemplate;
                        divpeople.appendChild(divnewPeople);
        
        });
 
         /*********************Mostrando Cada vehicles*************************/
        if((elementMovies.vehicles).length!=0){            
       
            const divVehicle=document.querySelector('.divvehicles');
            elementMovies.vehicles.forEach((element)=>{
                    
                let divnewVehicle=document.createElement("div")
                let TemplateVehicle=` 
                    <div class="divPeopleImg"  id="${element.id}">
                        <img src="${element.img}"> 
    
                        </div>
                            `;
                            divnewVehicle.innerHTML=TemplateVehicle;
                            divVehicle.appendChild(divnewVehicle);
            
            });

        }
/*********************Mostrando Cada locaciones*************************/
        if((elementMovies.locations).length!=0){            
        
            
               const divlocations=document.querySelector('.divlocations');
               elementMovies.locations.forEach((element)=>{
                       
                   let divnewLocations=document.createElement("div")
                   let TemplateLocations=` 
                       <div class="divPeopleImg"  id="${element.id}">
                           <img src="${element.img}"> 
       
                           </div>
                               `;
                               divnewLocations.innerHTML=TemplateLocations;
                               divlocations.appendChild(divnewLocations);
               
               });
   
           }
      /*******CLICK en el poster de cada personaje de la película****************/

      
      const buttondetailsFilm=document.querySelectorAll('.divPeopleImg');
      buttondetailsFilm.forEach((selectPoster) =>{
      selectPoster.addEventListener('click',function(){

         
          showModalPeople(filterDetailsfilms(elementMovies.people, this.id));
          showModalVehicle(filterDetailsfilms(elementMovies.vehicles, this.id));
          showModalLocations(filterDetailsfilms(elementMovies.locations, this.id));
                              
          document.querySelector("#modal").showModal();
          const buttonCerrarModal=document.querySelector("#btn-cerrar-modal");
          buttonCerrarModal.addEventListener("click",()=>{
              modal.close();
              document.querySelector("#modal").innerHTML="";
              })


      })
  })
                    
       
       
    })
}
/*************************************************************************/

//creando detalle de personaje/////////
const modalPeople=document.querySelector('#modal');
function showModalPeople(element){
    element.forEach((modal)=>{
        let divModalPeople=document.createElement("div");
        let modelPeopleTemplate=` 
    <div class="divGeneralPeopleModal" id="${element.id}">
         <button id="btn-cerrar-modal">
            cerrar modal
          </button>
        <img src="${modal.img}">
        <div class="divDetailsPeopleModal">
            <h2> Name: ${modal.name}</h2>
            <h3> Gender: ${modal.gender}</h3> 
            <h3> Age: ${modal.age}</h3> 
            <h3> Eyes Color: ${modal.eye_color}</h3> 
            <h3> Hair Color: ${modal.hair_color}</h3> 
            <h3> Specie:  ${modal.specie}</h3> 
        </div>

    </div> `;
    divModalPeople.innerHTML=modelPeopleTemplate;
    modalPeople.appendChild(divModalPeople);
    })
}                                   
 /*************************************************************************/

//creando detalle de personaje/////////
const modalVehicle=document.querySelector('#modal');
function showModalVehicle(element){
    element.forEach((modal)=>{
        let divModalVehicle=document.createElement("div");
        let modelVehicleTemplate=` 
    <div class="divGeneralPeopleModal" id="${element.id}">
         <button id="btn-cerrar-modal">
            cerrar modal
          </button>
        <img src="${modal.img}">
        <div class="divDetailsPeopleModal">
            <h2> Name: ${modal.name}</h2>
            <h3> Description: ${modal.description}</h3> 
            <h3> vehicle class: ${modal.vehicle_class}</h3> 
            <h3> Length: ${modal.length}</h3> 
            <h3> Pilot: ${modal.pilot.name}</h3> 
           
        </div>

    </div> `;
    divModalVehicle.innerHTML=modelVehicleTemplate;
    modalVehicle.appendChild(divModalVehicle);
    })
}                                   
 /*************************************************************************/
                
//creando detalle de personaje/////////
const modalLocations=document.querySelector('#modal');
function showModalLocations(element){
    element.forEach((modal)=>{
        let divModalLocations=document.createElement("div");
        let modelLocationsTemplate=` 
    <div class="divGeneralPeopleModal" id="${element.id}">
         <button id="btn-cerrar-modal">
            cerrar modal
          </button>
        <img src="${modal.img}">
        <div class="divDetailsPeopleModal">
            <h2> Name: ${modal.name}</h2>
            <h3> Description: ${modal.climate}</h3> 
            <h3> vehicle class: ${modal.terrain}</h3> 
            <h3> Length: ${modal.surface_water}</h3> 
            <h3> Pilot: ${modal.residents[0]}</h3> 
           
        </div>

    </div> `;
    divModalLocations.innerHTML=modelLocationsTemplate;
    modalLocations.appendChild(divModalLocations);
    })
}                                   
 /*************************************************************************/
/***********CLICK en la lista desplegable en orden AZ*******************/
const orderAZ=document.getElementById('orderAz');
orderAZ.addEventListener('click',()=>{
    
   document.querySelector('.divFilmsContainer').innerHTML="";
   orderDataGeneral(dataFilms,"title");
   
   showFilms(dataFilms);
   
});
/*************************************************************************/
/**************CLICK en la lista desplegable en orden ZA******************/
const orderZA=document.getElementById('OrderZa');
orderZA.addEventListener('click',()=>{
    
    document.querySelector('.divFilmsContainer').innerHTML="";

    orderDataGeneral(dataFilms,"title");
    showFilms(dataFilms.reverse());
   
});
/*************************************************************************/

/***********CLICK en el boton de los años*********************************/
const buttonYear=document.querySelectorAll('.buttonYear');
buttonYear.forEach((selectButton) =>{
    selectButton.addEventListener('click',function(){

     document.querySelector('.divFilmsContainer').innerHTML="";
        let valueYear= this.value;
        let newData= filter(dataFilms,valueYear);
      showFilms(newData);


    })
});
/*************************************************************************/

/***************CLICK en el boton Productor ********************************/

const buttonproducer=document.querySelectorAll('.byproducer');
buttonproducer.forEach((selectButton) =>{
    selectButton.addEventListener('click',function(){

        document.querySelector('.divFilmsContainer').innerHTML="";
 
       let idproducer= this.id;

       let newData= dataFilterGeneral(dataFilms,"producer",idproducer);
      showFilms(newData);
    })
});
/*************************************************************************/


/******************CLICK en el boton director********************************/
const buttondirector=document.querySelectorAll('.bydirector');
buttondirector.forEach((selectButton) =>{
    selectButton.addEventListener('click',function(){

        document.querySelector('.divFilmsContainer').innerHTML="";
 
       let iddirector= this.id;

       let newData= dataFilterGeneral(dataFilms,"director",iddirector);
      showFilms(newData);


    })
});
/*************************************************************************/
const insearch=document.getElementById('inputSearch');
insearch.addEventListener('input', () => {
    
    
   
let dataSearch=search(dataFilms,insearch.value);

    if (dataSearch.length === 0) {
        alert("No se encontraron resultados");
       // MessageError();
        
      } else {
        document.querySelector('.divFilmsContainer').innerHTML="";
        showFilms(dataSearch);
      }
    
  
  });


  ////////////////***CARRUSEL */

  const divGrande=document.querySelector('.divImgGrande');
  const liPunto=document.querySelectorAll('.liPunto');

  liPunto.forEach((cadaPunto , i)=>{
    liPunto[i].addEventListener('click',()=>{

        let posicion=i;
        let operacion = posicion * (-50);
        divGrande.style.transform=`translateX(${operacion}%)`;

        liPunto.forEach((cadaPunto, i)=>{
            liPunto[i].classList.remove('activo');
        })
        liPunto[i].classList.add('activo');
    })
  })





 


