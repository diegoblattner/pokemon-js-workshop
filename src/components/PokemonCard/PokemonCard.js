import styles from "./PokemonCard.module.css";
const pokemonUrl = "https://pokeapi.co/api/v2/pokemon/"
const imageUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/";

const getImage = (pokemon) => {
  const id = pokemon.url.replace(pokemonUrl, "").replaceAll("/", "");
  return `${imageUrl}${id}.png`;
};

export const PokemonCard = ({
  pokemon,
  onSelect,
}) => {
  return (
    <div className={styles.pokemonCard} onClick={() => onSelect(pokemon)}>
      <div><img src={getImage(pokemon)} alt={pokemon.name} /></div>
      <div>{pokemon.name}</div>
    </div>
  );
};
