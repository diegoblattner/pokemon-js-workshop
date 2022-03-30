import { useEffect, useState } from 'react';
import { fetchPokemonList } from '../../api/pokemon';
import styles from './App.module.css';
import { Header } from '../Header/Header';
import { PokemonCard } from '../PokemonCard/PokemonCard';
import { Modal } from '../Modal/Modal';

function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const [selectedPokemon, setSelectedPokemon] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    fetchPokemonList().then((result) => {
      setPokemonList(result);
    }).catch((e) => {
      setError(e.toString());
    })
    .finally(() => {
      setIsLoading(false);
    });
  }, []);

  return (
    <div className={styles.app}>
      <Header />
      <main className={styles.content}>
        {isLoading && <div>Loading...</div>}
        {error && <div>error</div>}
        <ul className={styles.pokemonList}>
          {pokemonList.map((p, i) => (
            <li key={i}>
              <PokemonCard pokemon={p} onSelect={setSelectedPokemon} />
            </li>
          ))}
        </ul>
      </main>
      <Modal
        isOpen={selectedPokemon}
        title={selectedPokemon?.name}
        onClose={() => setSelectedPokemon(null)}
      >
        {selectedPokemon && <PokemonCard pokemon={selectedPokemon} />}
      </Modal>
    </div>
  );
}

export default App;
