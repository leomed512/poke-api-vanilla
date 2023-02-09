const url = "https://pokeapi.co/api/v2/pokemon";
const pokeBtn = document.querySelector("#pokeButton");
const refresh = document.querySelector("#reload");
const msg = document.querySelector("#poke")
refresh.addEventListener("click", refreshPage);
pokeBtn.addEventListener("click", getPokemon);

function refreshPage() {
    window.location.reload("Refresh")
}

async function getPokemon() {

    const pokemonNum = document.querySelector("#pokeNum").value;
    await fetch(`${url}/${pokemonNum}`)
        .then((response) => response.json())
        .then((data) => {
            let powers = data.abilities.map((e) => { return e.ability.name });
            console.log(powers);
            msg.innerHTML =
                `<div>
                    <p class="font-bold text-2xl text-red-600">${data.name.toUpperCase()}</p>
                    <ul class="mt-5">
                        <li><p class="font-bold">Abilities</p></li>
                        <li><p class="ml-3 capitalize">${powers[0]}</p></li>
                        <li><p class="ml-3 capitalize">${powers[1]}</p></li>
                    </ul>   
                </div>
                <img class="w-2/6 md:w-1/5" src="${data.sprites.front_default}"/>    
            `
        })
        .catch(err => {
            msg.innerHTML =
                `<div>
                    <p class="p-5 font-bold text-lg text-red-600">Something went wrong! <br> No Pokemón with that name or ID where found.</p>
                </div> 
            `
            console.log(err);
        })
}

function handle(e) {
    if (e.keyCode === 13) {
        e.preventDefault();
        getPokemon()
    }
}