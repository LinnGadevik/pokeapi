document.querySelector('#search').addEventListener("click", getAllPokemons);

function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function lowerCaseName(string) {
    return string.toLowerCase();
}

// function getPokemon(e) {
//   const name = document.querySelector("#pokemonName").value;
//   const pokemonName = lowerCaseName(name);

//     fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
//     .then((response) => response.json())
//     .then((data) =>{
//        document.querySelector(".pokemonBox").innerHTML = `
//        <div>
//             <img src="${data.sprites.other["official-artwork"].front_default}"
//              alt="${capitalizeFirstLetter(data.name)}">
//         </div>
//         <div class="pokemonInfo">
//             <h1>${capitalizeFirstLetter(data.name)}</h1>
//             <p>weight: ${data.weight}</p>
//         </div>
//        `;
//     })
//     .catch((err)=> {
//         console.log("Pokemon not found", err);
//     });

//     e.preventDefault();
// }

// let getAllPokemons = null
async function getAllPokemons() {
    console.log("hejsan")
    // fetch(`https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0`)
    const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
    const data =await response.json()
    console.log (data)
    console.log
}

let names = [""];
let sortedNames = names.sort();


let input = document.getElementById("pokemonName");

pokemonName.addEventListener("keyup", (e) => {
    removeElements();
   for (let i of sortedNames) {
    
    if (
        i.toLowerCase().startsWith(pokemonName.value.toLowerCase()
        ) &&
          input.value !=""
          ); {
        let listItem = document.createElement("li");

        listItem.classList.add("list-items");
        listItem.style.cursor = "pointer";
        listItem.setAttribute("onclick", "displayNames('" + i + "')");

        let word = "<b>" + i.substr(0,input.value.length) + "</b>";
        word += i.substr(input.value.length);
        listItem.innerHTML = word;
        document.querySelector(".list").appendChild(listItem);
    }
   }
});

function displayNames(value) {
    input.value = value;
    removeElements();
}
function removeElements() {
    let items = document.querySelectorAll(".list-items");
    items.forEach((item) => {
        item.remove();
    });
}

