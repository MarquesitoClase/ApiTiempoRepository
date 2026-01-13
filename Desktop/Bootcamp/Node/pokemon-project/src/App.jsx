import { useEffect, useState } from "react";
import Pokemon from "./components/pokemon";
import pokemonsData from "./data/pokemon.json";

function App() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    setPokemons(pokemonsData);
  }, []);

  return (
    <div>
      {pokemons.map((p) => (
        <Pokemon key={p.numDex} pokemon={p} />
      ))}
    </div>
  );
}

export default App;