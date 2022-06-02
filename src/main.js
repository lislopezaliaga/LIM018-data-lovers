//import mostrarData from './data.js';

// import data from './data/lol/lol.js';
import data from './data/ghibli/ghibli.js';
// import data from './data/rickandmorty/rickandmorty.js';

//let array=[];


//array=data.films[0].title;

let s=[];
let t=[];
for(var i=0; i<data.films.length; i++){
    s.push(data.films[i].title); 
    t.push(data.films[i].poster); 
    document.getElementsByClassName("titlesMovie").innerHTML=s;
}
    

document.getElementById("images").innerHTML=t;




