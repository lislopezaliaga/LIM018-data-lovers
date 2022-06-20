import { filterByDate,filterDetailsfilms,repeatYear,filterByPopular,repeatDirector,
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
/*******************************************************/
let buttonHome=document.querySelector("#buttonHome");
buttonHome.addEventListener("click",function(){
    location.reload();
      
});
let buttonHistory=document.querySelector("#buttonHistory");
buttonHistory.addEventListener("click",function(){
    
        document.querySelector(".divConteinerGeneralFilms").innerHTML = "";
        document.querySelector(".divHistory").style.display = "flex";

    
      
});
let buttonProducers=document.querySelector("#buttonProducers");
buttonProducers.addEventListener("click",function(){
    
        document.querySelector(".divConteinerGeneralFilms").innerHTML = "";

    
      
});
let buttonDirectors=document.querySelector("#buttonDirectors");
buttonDirectors.addEventListener("click",function(){
    
        document.querySelector(".divConteinerGeneralFilms").innerHTML = "";

    
      
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
/*****************************Haciendo los botones del slider grande**************************/
const buttonVermas=document.querySelectorAll('.buttonVermas');
buttonVermas.forEach((selectPoster) =>{
        selectPoster.addEventListener('click',function(){
     
         document.querySelector('.divConteinerGeneralFilms').style.display="none";
           showFilmsDetails(filterDetailsfilms(dataFilms,this.id));

        })
    })

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
console.log(repeatDirector(dataFilms));
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
console.log(repeatYear(dataFilms));
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
                    
                    <h3><span>Date: </span> ${elementMovies.release_date}</h3>
                    <h3><span>Director: </span> ${elementMovies.director}</h3>
                    <h3><span>Producer: </span>${elementMovies.producer}</h3>
                    <h3><span>Description: </span>${elementMovies.description}</h3>
                </div>
                <div class="divPuntuacion">
                    <div class="divPuntuacionImageText">
                        <img src="img/revie.png">
                        <div class="divPuntuacionTitleR">
                            <h3 class="titlesSore">Score: </h3>
                            <h3>${elementMovies.rt_score}</h3>
                        </div >
                    </div >
                    <div class="divPuntuacionImageText">
                    <img src="img/people.png">
                    <div class="divPuntuacionTitleR" id="countPeople">
                        <h3 class="titlesSore">N° People:</h3>
                        
                    </div >
                </div >
                <div class="divPuntuacionImageText">
                    <img src="img/location.png">
                    <div class="divPuntuacionTitleR" id="countLocations">
                        <h3 class="titlesSore">N° Locationes:</h3>
                        
                    </div >
                </div >
                <div class="divPuntuacionImageText">
                    <img src="img/electriccar.png">
                    <div class="divPuntuacionTitleR" id="countVehicles">
                        <h3 class="titlesSore">N° Vehicles:</h3>
                        
                    </div >
                </div > 
                   

                </div >
              
                    <div class="divpeople">
                        <h3 id="characterpeople">Characteres</h3>
                        <button id="buttonLeftPeople"><</button>
                        <button id="buttonRigthPeople">></button>
                        <div class="divpeopleImage">                      
                        </div>
                    </div>
               
               <div class="vehiclesLocations">
                    <div class="divvehicles">
                        <h3>Vehicles</h3>
                    
                    </div>
                    <div class="divlocations">
                        <h3>Locations</h3>
                
                    </div>
                </div>
            </div>
           
        </div> 
        `;
        divElementMovies.innerHTML=template;
        divFilmsDetailsContainer.appendChild(divElementMovies);

        /*********************Mostrando Cada Personaje*************************/
        let counterPeopleMovie=0;
        const divpeople=document.querySelector('.divpeopleImage');
        elementMovies.people.forEach((element)=>{
                
            let divnewPeople=document.createElement("div")
            let peopleTemplate=` 
                <div class="divPeopleImg"  id="${element.id}">
                
                        <img src="${element.img}"> 
                
                    </div>
                   
                        `;
                        divnewPeople.innerHTML=peopleTemplate;
                        divpeople.appendChild(divnewPeople);
                        counterPeopleMovie+=1;
        
        });

          /*********************haciendo mi carrusel de personajes*************************/
        const carruselPeople=document.querySelector('.divpeopleImage');
        let intervalo = null;
        let step=0.5;
        let maxScrollLeft=carruselPeople.scrollWidth-carruselPeople.clientWidth;
        
        const start=()=>{
         intervalo=setInterval(function(){
             carruselPeople.scrollLeft+=step;
             if(carruselPeople.scrollLeft==maxScrollLeft){
                step=-0.5;
             } else if(carruselPeople.scrollLeft==0){
                step=0.5;
             }
         },10)
     }
     const stop=()=>{
        clearInterval(intervalo)
     }
     carruselPeople.addEventListener('mouseover',()=>{
        stop();
     })
     carruselPeople.addEventListener('mouseout',()=>{
        start()
     })
     start();
        
         const buttonLeftPeople=document.querySelector('#buttonLeftPeople');
         const buttonRigthPeople=document.querySelector('#buttonRigthPeople');
         buttonLeftPeople.addEventListener("click",()=>{
            carruselPeople.scrollLeft-=200;
         });
         buttonRigthPeople.addEventListener("click",()=>{
            carruselPeople.scrollLeft+=200;
         })

         
         /*********************Mostrando Cada vehicles*************************/
         let counterVehiclesMovie=0;
        if((elementMovies.vehicles).length!=0){            
       
            const divVehicle=document.querySelector('.divvehicles');
            elementMovies.vehicles.forEach((element)=>{
                    
                let divnewVehicle=document.createElement("div")
                let TemplateVehicle=` 
                    <div class="divvehicle"  id="${element.id}">
                        <img src="${element.img}" > 

                        </div>
                            `;
                            divnewVehicle.innerHTML=TemplateVehicle;
                            divVehicle.appendChild(divnewVehicle);
                            counterVehiclesMovie+=1;
                            
            
            });

        }else{
            
            const divVehicle=document.querySelector('.divvehicles');
                               
                let divnewVehicle=document.createElement("div")
                let TemplateVehicle=` 
                    <div class="divvehicle"">
                    <p>No hay Vehicles</p>
                    <img src="img/error.gif" > 
                        

                        </div>
                            `;
                            divnewVehicle.innerHTML=TemplateVehicle;
                            divVehicle.appendChild(divnewVehicle);
        
            
        }
      
/*********************Mostrando Cada locaciones*************************/
let counterLocationsMovie=0;
        if((elementMovies.locations).length!=0){            
        
            
               const divlocations=document.querySelector('.divlocations');
               elementMovies.locations.forEach((element)=>{
                       
                   let divnewLocations=document.createElement("div")
                   let TemplateLocations=` 
                       <div class="divlocationsimage"  id="${element.id}">
                           <img src="${element.img}"> 
       
                           </div>
                               `;
                               divnewLocations.innerHTML=TemplateLocations;
                               divlocations.appendChild(divnewLocations);
                               counterLocationsMovie+=1;
               
               });
   
           }else{

            const divlocations=document.querySelector('.divlocations');
                               
                let divnewLocations=document.createElement("div")
                let TemplateLocations=` 
                <div class="divvehicle"">
                <p>No hay Locations</p>
                <img src="img/error.gif" > 
                    

                    </div>
                            `;
                            divnewLocations.innerHTML=TemplateLocations;
                            divlocations.appendChild(divnewLocations);
            


           }
           /*****************haciendo contadores****************** */
           const divcounterPeople=document.querySelector('#countPeople');
           const divcounterVehicles=document.querySelector('#countVehicles');
           const divcounterLocations=document.querySelector('#countLocations');
           const contadores = () => {
            
            const npeople = document.createElement('h3');
            const nvehicle = document.createElement('h3');
            const nlocations = document.createElement('h3');
            npeople.innerHTML=counterPeopleMovie;
            nvehicle .innerHTML=counterVehiclesMovie;
            nlocations.innerHTML=counterLocationsMovie;
           
            divcounterPeople.appendChild(npeople);
            divcounterVehicles.appendChild(nvehicle);
            divcounterLocations.appendChild(nlocations);
            
          };
          contadores();
          
               
           
           
          
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
            document.querySelector("#modal").close();
              document.querySelector("#modal").innerHTML="";
              })


      })
  })
    /*******CLICK en el poster de cada vehículo de la película****************/

     
    const buttondetailsvehiclesFilm=document.querySelectorAll('.divvehicle');
    buttondetailsvehiclesFilm.forEach((selectPoster) =>{
    selectPoster.addEventListener('click',function(){
     
      
        showModalVehicle(filterDetailsfilms(elementMovies.vehicles, this.id));
     
        
        document.querySelector("#modal").showModal();
        const buttonCerrarModal=document.querySelector("#btn-cerrar-modal");
        buttonCerrarModal.addEventListener("click",()=>{
            modal.close();
            document.querySelector("#modal").innerHTML="";
            })


    })
})

    /*******CLICK en el poster de cada location de la película****************/

     
    const buttondetailslocationsFilm=document.querySelectorAll('.divlocationsimage');
    buttondetailslocationsFilm.forEach((selectPoster) =>{
    selectPoster.addEventListener('click',function(){
     
      
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
            x
          </button>
         
             <img src="${modal.img}">
         
        
        <div class="divDetailsPeopleModal">
            <div class="detailsmodal">
            <h2> ${modal.name}</h2>
            <div class="divGenderAge">
                <img src="img/gender.png">
                <div class="divgenderh">
                 <h3> Gender:  </h3>
                 <p>${modal.gender}</p> 
                 </div>
            </div>
            <div class="divGenderAge">
                <img src="img/age.png">
                <div class="divgenderh">
                <h3>Age: </h3>
               <p> ${modal.age}</p>
               </div>
            </div>
            <div class="divGenderAge">
                <img src="img/eye-color.png">
                <div class="divgenderh">
                <h3>Eyes Color: </h3>
                <p>${modal.eye_color}</p>
                </div>
            </div> 
            <div class="divHairSpecie">
                <img src="img/hair-color.png">
                <div class="divcolor">
                 <h3>Hair Color: </h3> 
                 <p>${modal.hair_color}</p> 
                 </div>
            </div>
            <div class="divHairSpecie">
                 <img src="img/specie.png">
                 <div class="divcolor">
                    <h3>Specie: </h3> 
                    <p>${modal.specie}</p> 
                </div>
            </div>
            </div>
        </div>

    </div> `;
    divModalPeople.innerHTML=modelPeopleTemplate;
    modalPeople.appendChild(divModalPeople);
    })
}                                   
 /*************************************************************************/

//creando detalle de vehicle/////////

const modalVehicle=document.querySelector('#modal');
function showModalVehicle(element){
    element.forEach((modal)=>{
        let divModalVehicle=document.createElement("div");
        let modelVehicleTemplate=` 
    <div class="divGeneralPeopleModal" id="${element.id}">
         <button id="btn-cerrar-modal">
         x
          </button>
        <img src="${modal.img}">
        <div class="divDetailsVehicleModal">
            <h2> ${modal.name}</h2>
            <div class="titlesDescriptions">
                <div class="iconTextVehicleDescription">

                    <div class="titleicondescription">
                        <h3><span>Description:</span></h3>
                        <h3> ${modal.description}</h3> 
                    </div>
                </div>
                <div class="partitionvehicle">
                    <div class="iconTextVehicle">
                        <img src="img/vehicleclass.png">
                        <div class="titleicon">
                        <h3> <span> Vehicle Class:</span></h3>
                        <h3> ${modal.vehicle_class}</h3> 
                        </div>
                    </div>
                    <div class="iconTextVehicle">
                        <img src="img/length.png">
                        <div class="titleicon">
                            <h3><span> 
                            Length:</span></h3>
                            <h3> ${modal.length}</h3> 
                        </div>
                        
                    </div>
                    <div class="iconTextVehicle">
                        <img src="img/pilot.png">
                        <div class="titleicon">
                            <h3><span> Pilot:</span></h3>
                            <h3> ${modal.pilot.name}</h3> 
                        </div>
                    </div>
                </div>
            </div>
           
        </div>

    </div> `;
    divModalVehicle.innerHTML=modelVehicleTemplate;
    modalVehicle.appendChild(divModalVehicle);
 
    })
}                                   
 /*************************************************************************/
                
//creando detalle de locations/////////
const modalLocations=document.querySelector('#modal');
function showModalLocations(element){
    
    element.forEach((modal)=>{
        let divModalLocations=document.createElement("div");
        let modelLocationsTemplate=` 
    <div class="divGeneralPeopleModal" ">
         <button id="btn-cerrar-modal">x</button>
        <img src="${modal.img}">
        <div class="divDetailsLocationModal">
            <h2> ${modal.name}</h2>
            <div class="divtextGeneralModal">
                <div class="detailsLocations">
                    <img src="img/climate.png">
                    <div class="titleTextlocation">
                        <h3><span>Climate</span></h3>
                        <h3> ${modal.climate}</h3> 
                    </div>
                </div>
                <div class="detailsLocations">
                    <img src="img/terrain.png">
                    <div class="titleTextlocation">
                        <h3><span>Terrain</span></h3>
                        <h3> ${modal.terrain}</h3>
                    </div>
                </div> 
                <div class="detailsLocations">
                    <img src="img/surfaceWater.png">
                    <div class="titleTextlocation">
                        <h3><span>Surface Water</span></h3>
                        <h3> ${modal.surface_water}</h3>
                    </div>
                </div> 
            <div class="detailsLocations">
                 <img src="img/people.png">
                <div class="titleTextlocation">
                    <h3><span>Residents</span></h3>
                    <h3>${modal.residents[0]}</h3> 
                </div>
            </div>
           
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
        console.log(filterByDate(dataFilms,valueYear));
        let newData= filterByDate(dataFilms,valueYear);
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
/****************************MESAGE ERROR**************************************** */
const generalConainer=document.querySelector('.divFilmsContainer');
const MessageError = () => {
    document.querySelector('.divFilmsContainer').innerHTML="";
    const divMessageError = document.createElement('div');
    const p = document.createElement('p');
    const img = document.createElement('img');
    divMessageError.className = 'message-error';
    p.innerHTML = 'No hay resultados';
    img.src = 'img/error.gif';
    divMessageError.appendChild(p);
    divMessageError.appendChild(img);
    
    generalConainer.appendChild(divMessageError);
  }; 

  
/*************************************************************************/
const insearch=document.getElementById('inputSearch');
insearch.addEventListener('input', () => {
    document.querySelector('.sectionSlider').style.display="none";
    
let dataSearch=search(dataFilms,insearch.value);

    if (dataSearch.length === 0) {
        
        MessageError();
        
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
        let operacion = posicion * (-25);
        divGrande.style.transform=`translateX(${operacion}%)`;

        liPunto.forEach((cadaPunto, i)=>{
            liPunto[i].classList.remove('activo');
        })
        liPunto[i].classList.add('activo');
    })
  })
   ////////////////***CARRUSEL people */
 
   





 


