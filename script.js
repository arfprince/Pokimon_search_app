const input=document.querySelector("#search-input");
const button=document.querySelector("#search-button");
const pokemonName=document.querySelector("#pokemon-name");
const pokemonId=document.querySelector("#pokemon-id");
const pokemonHeight=document.querySelector("#height");
const pokemonWeight=document.querySelector("#weight");
const pokemonHP=document.querySelector("#hp");
const pokemonTypes=document.querySelector("#types");
const pokemonAttack=document.querySelector("#attack");
const pokemonDefense=document.querySelector("#defense");
const specialAttack=document.querySelector("#special-attack");
const specialDefense=document.querySelector("#special-defense");
const speed=document.querySelector("#speed");


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
        console.error();
    }
}

button.addEventListener("click", async ()=>{
    let poki=input.value;
    if(poki){
        const data = await getData(poki);
        console.log(data);
    }
    else{
        alert("You must give a Name or Id");
    }
});