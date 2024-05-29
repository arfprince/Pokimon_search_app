const input=document.querySelector("#search-input");
const button=document.querySelector("#search-button");
const pokemonName=document.querySelector("#pokemon-name");
const pokemonId=document.querySelector("#pokemon-id");
const pokemonHeight=document.querySelector("#height");
const pokemonWeight=document.querySelector("#weight");
const pokemonHP=document.querySelector("#hp");
const pokemonAttack=document.querySelector("#attack");
const pokemonDefense=document.querySelector("#defense");
const specialAttack=document.querySelector("#special-attack");
const specialDefense=document.querySelector("#special-defense");
const pokemonSpeed=document.querySelector("#speed");
const pokemonPowerTypes=document.querySelector("#types");
const pokemonPic=document.querySelector("#pic");

async function getData(poki) {
    try {
        const baseUrl=`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${poki}`;
        const response=await fetch(baseUrl);
        if(!response.ok){
            throw new Error(response.statusText);
        }
        else{
            return response.json();
        }
    } catch (error) {
        alert("Pokémon not found");
        console.error();
    }
}

function randerPokimonInfo(data){
    pokemonName.innerText=data.name.toUpperCase();
    pokemonId.innerText=`#${data.id}`;
    pokemonWeight.innerText=`Weight: ${data.weight}`;
    pokemonHeight.innerText=`Height: ${data.height}`;
    for(let i=0;i<data.types.length;i++){
        let span=document.createElement("span");
        span.innerHTML=`<div id="type" style="height: 25px; width: 90px; background-color: crimson; border-radius: 5px; margin: 4px; padding: 4px;"> ${data.types[i].type.name.toUpperCase()} </div>`;
        pokemonPowerTypes.appendChild(span);
    }
    pokemonPic.innerHTML=`<img id="sprite" style="height: 150px;" src="${data.sprites.front_default}">`;

    for(let i=0;i<data.stats.length;i++){
        if(data.stats[i].stat.name==="hp"){
            pokemonHP.innerText=data.stats[i].base_stat;
        }
        else if(data.stats[i].stat.name==="attack"){
            pokemonAttack.innerText=data.stats[i].base_stat;
        }
        else if(data.stats[i].stat.name==="defense"){
            pokemonDefense.innerText=data.stats[i].base_stat;
        }
        else if(data.stats[i].stat.name==="special-defense"){
            specialDefense.innerText=data.stats[i].base_stat;
        }
        else if(data.stats[i].stat.name==="special-attack"){
            specialAttack.innerText=data.stats[i].base_stat;
        }
        else if(data.stats[i].stat.name==="speed"){
            pokemonSpeed.innerText=data.stats[i].base_stat;
        }
    }
}

button.addEventListener("click", async ()=>{
    pokemonPowerTypes.innerHTML="";
    pokemonPic.innerHTML="";
    let poki=input.value;
    if(poki){
        console.log(typeof(poki));
        const data = await getData(poki.toLowerCase());
        randerPokimonInfo(data);
    }
    else{
        alert("You must give a Name or Id");
    }
});