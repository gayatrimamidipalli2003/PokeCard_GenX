const typeColor = {
    bug: "#26de81",
    dragon: "#ffeaa7",
    electric: "#fed330",
    fairy: "#FF0069",
    fighting: "#30336b",
    fire: "#f0932b",
    flying: "#81ecec",
    grass: "#00b894",
    ground: "#EFB549",
    ghost: "#a55eea",
    ice: "#74b9ff",
    normal: "#95afc0",
    poison: "#6c5ce7",
    psychic: "#a29bfe",
    rock: "#2d3436",
    water: "#0190FF",
};
const url = " https://pokeapi.co/api/v2/pokemon/";
const card = document.getElementById("card");
const btn = document.getElementById("btn");

let getPokeData = () => {
    // Generate a random number between 1 and 150
    let id = Math.floor(Math.random() * 150) + 1;
    // const pokemonName = document.getElementById('pokeName').value.toLowerCase();
    // Combine the pokeapi url with pokemon id
    const finalUrl = url + id;
    // const finalName = url + pokemonName;
    // Fetch generated URL
    // console.log(finalName);
    fetch(finalUrl)
        .then((response) => response.json())
        .then((data) => {
            generateCard(data);
        });
};

//Generate Card

let generateCard = (data) => {
    // Get necessary data and assign it to variables
    const hp = data.stats[0].base_stat;
    const height = data.height;
    const weight = data.weight;
    const imgSrc = data.sprites.other.dream_world.front_default;
    const pokeName = data.name[0].toUpperCase() + data.name.slice(1);
    const statAttack = data.stats[1].base_stat;
    const statDefense = data.stats[2].base_stat;
    const statSpeed = data.stats[5].base_stat;
    let move1 = data.moves[0].move.name;
    let move2 = data.moves[1].move.name;
    let move3 = data.moves[2].move.name;
    let move4 = data.moves[3].move.name;


    move1 = move1.replace('-', ' ');
    move2 = move2.replace('-', ' ');
    move3 = move3.replace('-', ' ');
    move4 = move4.replace('-', ' ');

    // Set themeColor based on pokemon type
    const themeColor = typeColor[data.types[0].type.name];
    card.innerHTML = `
        <div class="topbar">
            <p class="height">
                <span>Height</span>
                ${height}
            </p>
            <p class="weight">
                <span>Weight</span>
                ${weight}            
            </p>
        </div>
        <img src=${imgSrc} />
        <h2 class="poke-name">${pokeName}</h2>
        <div class="types">
         
        </div>
        <div class="stats">
        <div>
            <p>HP</p>
            <h3>${hp}</h3>
        </div>
          <div>
            <p>Attack</p>
            <h3>${statAttack}</h3>
          </div>
          <div>
            <p>Defense</p>
            <h3>${statDefense}</h3>
          </div>
          <div>
            <p>Speed</p>
            <h3>${statSpeed}</h3>
          </div>
        </div>
        <br>
        <div class="moves">
            <h2>Moves</h2>
            <p>${move1}</p>
            <p>${move2}</p>
            <p>${move3}</p>
            <p>${move4}</p>
          </div>
  `;
    appendTypes(data.types);
    styleCard(themeColor);
};
let appendTypes = (types) => {
    types.forEach((item) => {
        let span = document.createElement("SPAN");
        span.textContent = item.type.name;
        document.querySelector(".types").appendChild(span);
    });
};
let styleCard = (color) => {
    card.style.background = `radial-gradient(circle at 50% 0%, ${color} 36%, #ffffff 36%)`;
    card.querySelectorAll(".types span").forEach((typeColor) => {
        typeColor.style.backgroundColor = color;
    });
};

btn.addEventListener("click", getPokeData);
window.addEventListener("load", getPokeData);
// export id;





// // fetch = Function used for making HTTP requests to fetch resources.
// // (JSON style data, images, files)
// // simplifies asynchronous data fetching in JavaScript and
// // used for interacting with APIs to retrieve and send
// // fetch(url, {options})
// // example :
// // fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
// //     .then(response => {
// //
// //         if(!response.ok) {
// //             throw new Error("Could not find pokemon");
// //         }
// //         return response.json();
// //     })
// //     .then(data => console.log(data.id))
// //     .catch(error => console.error(error));


// async function fetchData(){
//     try{

//         const pokemonName = document.getElementById('pokemonName').value.toLowerCase();

//         const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

//         if(!response.ok){
//             throw new Error("Could not fetch data");
//         }

//         const data = await response.json();
//         const pokemonSpriteBack = data.sprites.back_default;
//         const pokemonSpriteFront = data.sprites.front_default;

//         const imgElementFront = document.getElementById('pokemonSpriteFront');
//         const imgElementBack = document.getElementById('pokemonSpriteBack');

//         imgElementFront.src = pokemonSpriteFront;
//         imgElementBack.src = pokemonSpriteBack;

//         imgElementFront.style.display = 'block';
//         imgElementBack.style.display = 'block';
//     }
//     catch(error){
//         console.error(error);
//     }
// }