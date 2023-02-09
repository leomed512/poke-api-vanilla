const url = "https://pokeapi.co/api/v2/pokemon";


const pokeBtn = document.querySelector("#pokeButton");
const refresh = document.querySelector("#reload");

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
            let msg = document.querySelector("#poke")
            msg.innerHTML =
                `<div>
                    <p class="font-bold text-2xl text-red-600">${data.name.toUpperCase()}</p>
                    <ul class="mt-5">
                        <li><p class="font-bold">Abilities</p></li>
                        <li><p class="ml-3 capitalize">${powers[0]}</p></li>
                        <li><p class="ml-3 capitalize">${powers[1]}</p></li>
                    </ul>   
                </div>
                <img class="w-2/6 md:w-2/12" src="${data.sprites.front_default}"/>    
            `
        })
        .catch(err => console.log(err))
}

