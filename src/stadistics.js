

export const stadisticsbypopular = (idCanva,labeldata,datagraphic,title) => {
  
let graphicMovies=idCanva.getContext('2d');
var barColors = ["#1ABC9C", "#660099","#2ECC71 ","#660033","#1DB5E2",'#52E21D','#AC1DE2','#282AA0','#A0283F','#2880A0','#A09028','#F390D6','#E5F390','#7A0910','#7CB2B5','#37085F','#365F08','#F0B068','#1DB5E2','#F018F0'];
//eslint-disable-next-line no-undef
    new Chart(graphicMovies,{
        type:'bar',
        data:{
            labels:labeldata,
            datasets:[
                {
                    label: "Most Popular",
                    data: datagraphic,
                    borderColor:'white',  
                    backgroundColor: barColors, 
                    title:'Movies'    
                }
                ]},
        options:{ 
            plugins:{legend:{position:'bottom',    },
                title: {
                    display: true,
                    text:title,
                }
            }
        }
    })
}