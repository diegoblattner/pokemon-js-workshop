const url = "https://pokeapi.co/api/v2/pokemon?limit=151";

export const fetchPokemonList = async () => {
  const response = await fetch(url);
  const data = await response.json();
  return data.results;
};
