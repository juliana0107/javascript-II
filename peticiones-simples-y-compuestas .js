// Obtener detalles de un Pokémon por nombre
async function getPokemonDetails(name) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  const pokemon = await response.json();
  return pokemon;
}

getPokemonDetails('pikachu')
  .then(data => console.log(data))
  .catch(error => console.log(error));

// Obtener habilidades de un Pokémon específico
async function getPokemonAbilities(name) {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
  const pokemon = await response.json();
  const abilities = pokemon.abilities.map(ability => ability.ability.name);
  return abilities;
}

getPokemonAbilities('charizard')
  .then(data => console.log(data))
  .catch(error => console.log(error));

// Obtener información sobre un tipo específico de Pokémon
async function getPokemonType(type) {
  const response = await fetch(`https://pokeapi.co/api/v2/type/${type}`);
  const pokemonType = await response.json();
  return pokemonType;
}

getPokemonType('water')
  .then(data => console.log(data))
  .catch(error => console.log(error));

// Obtener una lista de los primeros 50 Pokémon
async function getPokemonList() {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/?limit=50`);
  const pokemonList = await response.json();
  return pokemonList;
}

getPokemonList()
  .then(data => console.log(data))
  .catch(error => console.log(error));

// Obtener el nombre y el tipo de un Pokémon, así como el nombre y el tipo de su evolución
async function getPokemonAndEvolution(pokemonName) {
  // Obtener detalles del Pokémon
  const pokemonResponse = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
  const pokemonData = await pokemonResponse.json();

  // Obtener detalles de la evolución del Pokémon
  const speciesResponse = await fetch(pokemonData.species.url);
  const speciesData = await speciesResponse.json();
  const evolutionChainResponse = await fetch(speciesData.evolution_chain.url);
  const evolutionChainData = await evolutionChainResponse.json();

  // Obtener el nombre y el tipo del Pokémon
  const pokemon = {
    name: pokemonData.name,
    type: pokemonData.types[0].type.name
  };

  // Obtener el nombre y el tipo de la evolución del Pokémon
  const evolution = {
    name: evolutionChainData.chain.species.name,
    type: evolutionChainData.chain.species.types[0].type.name
  };

  return { pokemon, evolution };
}

getPokemonAndEvolution('charizard')
  .then(data => console.log(data))
  .catch(error => console.log(error));