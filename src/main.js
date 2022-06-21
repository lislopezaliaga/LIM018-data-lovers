
import { filterByDate,filterDetailsfilms,repeatYear,filterByPopular,repeatDirector,
    repeatProducer,orderDataGeneral, dataFilterGeneral,search,countDirectorProducer}  from './data.js';

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
/*************menu******************************************/
const buttonImgNav=document.querySelector('#imgMenu');
buttonImgNav.addEventListener('click',()=>{
    document.querySelector('#imgMenu').style.display="none";
    document.querySelector('.navMenu').style.display="block";


})
  
/*******************************************************/
let buttonHome=document.querySelector("#buttonHome");
buttonHome.addEventListener("click",function(){
    location.reload();
      
});
let buttonHistory=document.querySelector("#buttonHistory");
const containerGeneralFilms=document.querySelector(".divConteinerGeneralFilms");
buttonHistory.addEventListener("click",function(){

    document.querySelector("#buttonHistory").style.color = "rgb(125, 118, 118)";
    document.querySelector("#buttonProducers").style.color = "white";
    document.querySelector("#buttonDirectors").style.color = "white";
    document.querySelector(".divFilmsDetails").style.display = "none";
    document.querySelector(".divConteinerGeneralFilms").style.display = "flex";

        document.querySelector(".divConteinerGeneralFilms").innerHTML = "";
        const divHistory=document.createElement("div");
        const template=`   <div class="divHistory" ">
        <h1>Studio Ghibli</h1>

        <div class="historiaGhibli">
        <h2>Studio Ghibli’s Origins</h2>
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Ghibli_Museum_06.jpg/1280px-Ghibli_Museum_06.jpg">
        <p>
          Studio Ghibli (スタジオジブリ Sutajio Jiburi?) es un estudio japonés de animación, considerado por la crítica especializada y muchos cinéfilos como uno de los mejores estudios de animación del mundo en la actualidad.1​El estudio es mejor conocido por sus largometrajes animados y también ha producido varios cortometrajes, comerciales de televisión y una película para televisión. Fue fundado el 15 de junio de 1985 por los directores Hayao Miyazaki e Isao Takahata y el productor Toshio Suzuki , después del éxito de la película de anime de Topcraft Nausicaä del Valle del Viento (1984). Studio Ghibli también ha colaborado con estudios de videojuegos en el desarrollo visual de varios videojuegos. Seis de las películas de Studio Ghibli se encuentran entre las 10 películas de anime más taquilleras realizadas en Japón, siendo El Viaje de Chihiro (2001) la segunda más alta, recaudando más de 360 millones de dólares en todo el mundo. Muchos de sus trabajos han ganado el premio Animage Anime Grand Prix, y cuatro han ganado el Premio de la Academia Japonesa de Animación del Año. Cinco de las películas de Studio Ghibli han recibido nominaciones al Óscar. El Viaje de Chihiro ganó el Oso de Oro en 2002 y el Premio de la Academia a la Mejor Película de Animación en 2003. Totoro, un personaje de Mi vecino Totoro, es la mascota del estudio. El 3 de agosto de 2014, Studio Ghibli detuvo temporalmente la producción tras el retiro de Miyazaki. En febrero de 2017, Toshio Suzuki anunció que Miyazaki había vuelto a salir de su retiro para dirigir un nuevo largometraje con Studio Ghibli.
        </p>
        <h2>But Just Who or What is a Ghibli?</h2>
        <img src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Hayao_Miyazaki.jpg">
          <p>
            The word ghibli’s root is Italian and it’s based on the Libyan term for ‘hot desert wind’, with the concept being that the new studio was going blow a new wind through the animation industry. A name with this meaning might have seemed a tad lofty and ambitious, yet it wasn’t long before the studio was making good on its promise, shaking up not only the world of animation but also the wider film industry.

The studio’s first film, Laputa: Castle in the Sky, was released in 1986 and went on to become Japan’s highest-grossing animation film that year. It included some familiar motifs that are definitive of Miyazaki’s style, such as his obsession with the mechanics of flight and a penchant for magical realism. His father was an aeronautical engineer who ran the family business, Miyazaki airlines. This influence permeates so much of the younger Miyazaki’s output, and Laputa is one of the clearest examples. Much of the film’s action takes place in the air, with airships and flying devices featuring heavily.
          </p>
        

        </div>
        <table class="table-info">
          <tbody><tr>
          <th colspan="2">Studio Ghibli, Inc.</th></tr>
          <tr><td><b>Industry</b></td>
          <td>Motion pictures
          Video games
          TV commercials
          </td>
          </tr><tr>
          <td><b>Fundación</b></td>
          <td>15 de junio de 1985</td>
          </tr>
          <tr>
          <td><b>Fundador</b></td>
          <td><p>Hayao Miyazaki</p>
          <p>Isao Takahata</p>
          <p>Toshio Suzuki</p>
          <p>Yasuyoshi Tokuma</p></td>
          </tr>
          <tr>
          <td><b>Sede</b></td>
          <td>Koganei, Tokio, Japón</td>
          </tr>
          <tr>
          <td><b>Presidente</b></td>
          <td>Toshio Suzuki</td>
          </tr>
          <tr>
          <td><b>Personas clave</b></td>
          <td>Koji Hoshino
          <p>Kiyofumi Nakajima</p>
          <p>Hayao Miyazaki</p>
          <p>Toshio Suzuki</p></td>
          </tr>
          <tr>
          <td><b>Productos</b></td>
          <td>Películas de animación (anime),
              películas para televisión, anuncios,
              películas de imagen real</td>
          </tr>
          <tr>
          <td><b>Beneficio neto</b></td>
          <td>1426 millones ¥ (2011)</td>
          </tr>
          </tbody></table>

        <canvas id="graphicMovies" ></canvas>

     </div>  `;
        divHistory.innerHTML=template;
        containerGeneralFilms.appendChild(divHistory);

let graphicMovies=document.getElementById('graphicMovies').getContext('2d');
var barColors = ["#1ABC9C", "#660099","#2ECC71 ","#660033","#1DB5E2",'#52E21D','#AC1DE2','#282AA0','#A0283F','#2880A0','#A09028','#F390D6','#E5F390','#7A0910','#7CB2B5','#37085F','#365F08','#F0B068','#1DB5E2','#F018F0'];


var chart= new Chart(graphicMovies,{
    type:'bar',
    data:{
        labels:titlesFilms,
        datasets:[
            {
                label: "Most Popular",
                data: rtScoreFilms,
                borderColor:'white',  
                backgroundColor: barColors, 
                title:'Movies'    
            }
            ]},
    options:{ 
        plugins:{legend:{position:'bottom',    },
        title: {
            display: true,
            text: "Films Popular",
            
          }

        }
    }
    

})   
      
});

/*************PRODUCERS******************/

let buttonProducers=document.querySelector("#buttonProducers");

buttonProducers.addEventListener("click",function(){
    document.querySelector("#buttonProducers").style.color = "rgb(125, 118, 118)";
    document.querySelector("#buttonHistory").style.color = "white";
    document.querySelector("#buttonDirectors").style.color = "white";
    document.querySelector(".divFilmsDetails").style.display = "none";
    document.querySelector(".divConteinerGeneralFilms").style.display = "flex";
    document.querySelector(".divConteinerGeneralFilms").innerHTML = "";
   

        const divProductores=document.createElement("div");
        const template=`
        <div class="divProducerMenu">
            
                <div class="producerMenuName">
                    <img src="img/producer/isao-takahata.jpg"  "width="350" height="200" alt="isao-takahata">  
                     <h4 class="title">Isao Takahata</h4>
                     
                        <p>
                        Isao Takahata (高畑 勲 Takahata Isao?) (Ise, October 29, 1935 - Tokyo, April 5, 2018)
                        was a director, producer and screenwriter of films and series of Japanese animation.
                        
                        </p>
                </div>
                <div class="producerMenuName">
                    <img src="img/producer/Hayao_Miyazaki.jpg" "width="350" height="200">
                    <h4 class="title">Hayao Miyazaki</h4>
                
                   <p>
                   Hayao Miyazaki is an animation film director, animator, illustrator, 
                   entrepreneur, mangaka and Japanese anime producer, with international 
                   renown and a career spanning five decades. Together with Isao Takahata, 
                   he founded Studio Ghibli, a film and animation studio.
                   </p>
           </div>
           <div class="producerMenuName">
                <img src="img/producer/ToruHara.jpg" "width="350" height="200">           
                <h4 class="title">Toru Hara</h4>
                
                    <p>
                    Toru Hara (原 徹 , born December 26, 1935, in Kitakyushu, Japan) 
                    is a Japanese animator and producer. He was once the head manager of Studio Ghibli.
                    He was the producer of Hols: Prince of the Sun, Castle in the Sky, My Neighbor Totoro, 
                    Grave of the Fireflies and one of the founders of TopCraft.
                    </p>
            </div>
      <div class="producerMenuName">
              <img src="img/producer/ToshioSuzuki.jpg" "width="350" height="200">               
            <h4 class="title">Toshio Suzuki</h4>
            
                <p>
                Toshio Suzuki is an anime film producer and colleague of Hayao Miyazaki,
                 as well as former president of Studio Ghibli. He is recognized as one of
                  the most successful producers in Japan after the huge success of the films made
                   by Studio Ghibli.
                </p>
        </div>
        <div class="producerMenuName">
            <img src="img/producer/Yoshiaki Nishimura.jpg" "width="350" height="200">             
            <h4 class="title">Yoshiaki Nishimura</h4>
        
            <p>
            Yoshiaki Nishimura (西村 義明 Nishimura Yoshiaki?, 
                Born on September 25, 1977 in Tokyo, Japan) 
                is a Japanese anime producer who is part of Studio Ghibli and was the founder of the company Studio Ponoc.
                
            </p>
        </div>

        
        <canvas id="graphicProducer" ></canvas>
                
           
        </div> 
        `;
        divProductores.innerHTML=template;
        containerGeneralFilms.appendChild(divProductores);

        let graphicProducer=document.getElementById('graphicProducer').getContext('2d');
var barColors = ['#52E21D','#AC1DE2','#282AA0','#A0283F','#2880A0','#A09028','#F390D6','#E5F390','#7A0910','#7CB2B5','#37085F','#365F08','#F0B068','#1DB5E2','#F018F0'];


var chart=new Chart(graphicProducer,{
    type:'bar',
    data:{
        labels:repeatProducer(dataFilms),
        datasets:[
            {
                label: "Cantidad de películas dirigidas", 
                backgroundColor: barColors,
                data:countDirectorProducer(producerFilms),
            }],
    },
    options:{ 
        plugins:{legend:{position:'bottom',    },
        title: {
            display: true,
            text: "Films By Producer",
            
          }

        }
    }
   
            
    
})





    
      
});
/*************DIRECTORES******************/
let buttonDirectors=document.querySelector("#buttonDirectors");
buttonDirectors.addEventListener("click",function(){
    document.querySelector("#buttonDirectors").style.color = "rgb(125, 118, 118)";
    document.querySelector("#buttonHistory").style.color = "white";
    document.querySelector("#buttonProducers").style.color = "white";
    document.querySelector(".divFilmsDetails").style.display = "none";
    document.querySelector(".divConteinerGeneralFilms").style.display = "flex";
        document.querySelector(".divConteinerGeneralFilms").innerHTML = "";


        const divProductores=document.createElement("div");
        const template=`
        <div class="divProducerMenu">
            
                
           <div class="producerMenuName">
                <img src="img/producer/director-YoshifumiKondō.jpg" "width="350" height="200">           
                <h4 class="title">Yoshifumi Kondō</h4>
                
                    <p>
                    Yoshifumi Kondō was the Japanese animator, highlighting his Studio Ghibli work in recent years. 
                    He was born in Gosen, Niigata Prefecture, Japan. 
                    He worked as animation director on Ana de lasTejas Verdes, Sherlock Hound, Majo no Takkyūbin, 
                    Recuerdos del ayer and La Princesa Mononoke.
                    </p>
            </div>
            <div class="producerMenuName">
                    <img src="img/producer/director-HiroyukiMorita.jpg" "width="350" height="200">               
                    <h4 class="title"> Hiroyuki Morita</h4>
                    
                        <p>
                        Hiroyuki Morita is a director and animator. He has worked on films such as Sueños, 
                        by Akira Kurosawa and Lupine III. From his time in the Ghibli studio they highlight El viaje de Chihiro, 
                        Neko no ongaeshi and El castillo en el cielo. 
                        He was director of Bokurano, a film based on a manga by director Mohiro Kitō.
                        </p>
            </div>
            <div class="producerMenuName">
                <img src="img/producer/director-GorōMiyazaki.jpg" "width="350" height="200">                 
                <h4 class="title">Gorō Miyazaki</h4>
                
                    <p>
                    Gorō Miyazaki is a Japanese film director, screenwriter and architect. 
                    He is the son of outstanding animation director Hayao Miyazaki. He was initially reluctant 
                    to follow the steps of his priest and dedicated himself to landscaping rather than animation.
                    </p>
             </div>
            <div class="producerMenuName">
                 <img src="img/producer/director-HiromasaYonebayashi.jpg" "width="350" height="200">                  
                <h4 class="title">Hiromasa Yonebayashi</h4>
                
                    <p>
                    Hiromasa Yonebayashi, also known as Maro, is a Japanese animation director and technician, 
                    a former Studio Ghibli worker. 
                    He studied at the Kanazawa College of Art, where he carried out studies in commercial design.
                    </p>
            </div>

            <div class="producerMenuName">
                     <img src="img/producer/isao-takahata.jpg" "width="350" height="200">
                     <h4 class="title">Isao Takahata</h4>
                     
                        <p>
                        Isao Takahata (高畑 勲 Takahata Isao?) (Ise, October 29, 1935 - Tokyo, April 5, 2018)
                        was a director, producer and screenwriter of films and series of Japanese animation.
                        He founded, together with his friend Hayao Miyazaki, the Ghibli studios.
                    
                        </p>
            </div>
            <div class="producerMenuName">
                 <img src="img/producer/Hayao_Miyazaki.jpg" "width="350" height="200">   
                <h4 class="title">Hayao Miyazaki</h4>
                
                   <p>
                   Hayao Miyazaki is an animation film director, animator, illustrator, 
                   entrepreneur, mangaka and Japanese anime producer, with international 
                   renown and a career spanning five decades. Together with Isao Takahata, 
                   he founded Studio Ghibli, a film and animation studio.
                   </p>
           </div>

           <canvas id="graphicDirector" style="width:50%;max-width:600px;heigth:50px"></canvas>
                
           
        </div> 
        `;

        divProductores.innerHTML=template;
        containerGeneralFilms.appendChild(divProductores);

        /*************graphic de Directores******************/

        
       
          

    

let graphicDirector=document.getElementById('graphicDirector').getContext('2d');
var barColors = ['#F390D6','#E5F390','#7A0910','#7CB2B5','#37085F','#365F08','#F0B068','#1DB5E2','#F018F0'];


var chart=new Chart(graphicDirector,{
    type:'bar',
    data:{
        labels:repeatDirector(dataFilms),
        datasets:[
            {
                label: "Cantidad de películas dirigidas", 
                backgroundColor: barColors,
                data:countDirectorProducer(directorFilms),
            }],
    },
    options:{ 
        plugins:{legend:{position:'bottom',    },
        title: {
            display: true,
            text: "Films By Director",
            
          }

        }
    }
            
    
})



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
 
   





 


