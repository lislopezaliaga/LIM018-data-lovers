//import mostrarData from './data.js';

// import data from './data/lol/lol.js';
import data from './data/ghibli/ghibli.js';
// import data from './data/rickandmorty/rickandmorty.js';

//let array=[];


//array=data.films[0].title;

/*let s=[];
let t=[];
for(var i=0; i<data.films.length; i++){
    s.push(data.films[i].title); 
    t.push(data.films[i].poster) 
}
    
document.getElementById("titlesmovie").innerHTML=s;
document.getElementById("images").innerHTML=t;
*/

/*const padre=document.querySelector('section.detalle');
const nuevoNodo=document.createElement('h2');
/*Agregar un hijo al padre 
padre.appendChild(nuevoNodo);
const text=document.createTextNode('caracteristicas especiales');
/*Agregar un hijo al padre 
nuevoNodo.appendChild(text);
/*Agregar dos hijos al padre 

 padre.append("modelos nuevos",document.createElement('p'));

 const nuevo=document.createElement('h2');
 const final=document.querySelector('h1'); */




 
 const infoData = data.films;
  //console.log(infoData)
 
 /* const searchLetterForFilm=document.querySelector(".box"); */
 const containerGeneral=document.querySelector(".containGeneral");
 
 displayMenuItems(infoData);
 
 function displayMenuItems(menuItems){
   /*   let template="" ; */
     menuItems.forEach((pelicula)=>
     {
      // console.log(pelicula)   
     const createElement=document.createElement("div")
     createElement.setAttribute("class",'cardPricipal');
     const template = `
        
             <div class="card__Father">
                 <div class="cardLatter">
                     <div class="cardLatter__frond">
                     </div>
                     <img src="${pelicula.poster}" alt="${pelicula.title}">
                     <div class="cardLastter__back">
                     <h4>${pelicula.title}</h4>
                     <p>${pelicula.description}</p>
                     </div>
                 </div>
             </div>      
    `;
 createElement.innerHTML=template;
 containerGeneral.appendChild(createElement)
 
  return template;
 }) 
 } ;

 
const segundo=document.querySelector('.secondContainer');
 function mostrar(movies){
     movies.forEach((peliculas)=>{
         const creandodiv=document.createElement("div");
        const templates=`
        <div class="imagentexto">
            <div class="pictureMovie">
            <img src="${peliculas.poster}">
            </div>
            <div class="titleMovie">
            <h2>${peliculas.title}</h2>
            </div>
        </div> 
        `;
        creandodiv.innerHTML=templates;
        segundo.appendChild(creandodiv);
        
     
     });
 };
 mostrar(infoData);
 




