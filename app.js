const recuperationDivEl=document.querySelector(".pays");
const recuperationBouton=document.querySelector(".afficher")

let request=new XMLHttpRequest();
let url='https://restcountries.com/v3.1/all';



const afficherContenu = async()=>{
    // request.open('GET',url,true);
    // request.onload = function(){
        let requete=await fetch(url);

        let data=await requete.json();
        // let data=JSON.parse(this.response)
        // if(request.status >=200 && request.status<400){
    
            let creationRandomNumber=Math.ceil(Math.random()*249);

            recuperationDivEl.innerHTML = '';
    
            const creationH2=document.createElement("h2");
            const contenuH2=document.createTextNode(`${data[creationRandomNumber].name.common}`);
            creationH2.appendChild(contenuH2);
            recuperationDivEl.appendChild(creationH2);
            creationH2.style.textAlign='center';
            creationH2.style.color="white";
            creationH2.style.fontSize="25px";
            creationH2.style.paddingBottom='10px'
    
            const creationElementDrapeau=document.createElement("img");
            creationElementDrapeau.setAttribute('src',`${data[creationRandomNumber].flags.png}`);
            recuperationDivEl.appendChild(creationElementDrapeau);
            creationElementDrapeau.style.paddingBottom='10px';
            
    
            const creationElementP=document.createElement('p');
            const creationContenuContinent=document.createTextNode(`The continent is:${data[creationRandomNumber].continents[0]} `);
            creationElementP.appendChild(creationContenuContinent);
            recuperationDivEl.appendChild(creationElementP);
            creationElementP.style.color="white";
            creationElementP.style.fontSize="25px";
            creationElementP.style.paddingBottom='10px';
            creationElementP.style.fontSize="calc(12px + 2vh)";
            creationElementP.style.textAlign="center"
    
            const creationDeuxiemeElementP=document.createElement('p');
            const creationContenuPopulations=document.createTextNode(`The population is of:${data[creationRandomNumber].population} `);
            creationDeuxiemeElementP.appendChild(creationContenuPopulations);
            recuperationDivEl.appendChild(creationDeuxiemeElementP);
            creationDeuxiemeElementP.style.color="white";
            creationDeuxiemeElementP.style.fontSize="25px";
            creationDeuxiemeElementP.style.paddingBottom='10px';
            creationDeuxiemeElementP.style.fontSize="calc(12px + 2vh)";
            creationDeuxiemeElementP.style.textAlign="center"

    
          
    //     }
        
    // }
    
    // request.send();
}

recuperationBouton.addEventListener("click",afficherContenu)
