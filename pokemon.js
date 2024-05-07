const namePokemon =document.getElementById("name__pokemon");
const imgPokemon=document.getElementById("img__pokemon");
//aqui empieza mi programa 
//const pokemonContainer=document.querySelector(".container");
//const id= prompt("introduce el ID del pokemon ");
//switch(id)//
//{
//case (id==0):
         
        /*const peticionApi = async () =>{
            const peticionGet=await fetch("https://pokeapi.co/api/v2/pokemon?limit=10&offset=0")
            const datosPokemon=await peticionGet.json();
            
             
                  //const imgCharizard =datosPokemon.sprites.other.dream_world.front_default;
                  //const nombrecharizard=datosPokemon.name;
                  //namePokemon.textContent=nombrecharizard;
                 //imgPokemon.src=imgCharizard;             
            
                 }
peticionApi();*/
//break;
//case (id==1):
//console.log(`este pokemon pikachu`);
//break;
//default: 
//console.log(`este pokemon no está disponible ${id}`);
//}

function fetchPokemon (id)
{
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`)
    .then((res) => res.json())
    .then((data) => crearGaleria(data));
}
//fetchPokemon(6);
//Para mostrar los pokemones que tenemos creamos la funcion 
function galeriaPokemons(number)
//En este caso es el boton siguiente que se debe agregar 
{
    for (let i=0; i<= number; i++)
    fetchPokemon(i);
}
galeriaPokemons(9);
//console.log("inserta id", ${number});//=

function crearGaleria(pokemon)
{
    const card= document.createElement("div");
    card.classList.add("body");
    
    const spriteContainer=document.createElement("div");
    spriteContainer.classList.add(".img__pokemon");
    const sprite=document.createElement("img__pokemon");
    sprite.src=pokemon.sprites.front_default 

    sprite.Container.appendChild(sprite);


    const number=document.createElement('p');
    number.textContent=`#${pokemon.id.toString().padStart(3,0)}`;

    const nombre=document.createElement
    nombre.textContent=pokemon.nombre('p');
    nombre.clasList.add('name');
    name.textContent=pokemon.name

    card.appendChild(number);
    card.appendChild(nombre);
    pokemonContainer.appendChild(card);
}
galeriaPokemons(9);
