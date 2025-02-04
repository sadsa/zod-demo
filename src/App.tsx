import { useState, useEffect } from "react";
import { fetchPokemon, Pokemon } from "./examples/01-manual-validation";
import "./App.css";

function App() {
  const [pokemonId, setPokemonId] = useState(1);
  const [pokemon, setPokemon] = useState<null | Pokemon>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadPokemon() {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchPokemon(pokemonId);
        setPokemon(data);
      } catch (err) {
        setError(
          err instanceof Error ? err.message : "Failed to fetch Pokemon"
        );
      } finally {
        setLoading(false);
      }
    }

    loadPokemon();
  }, [pokemonId]);

  return (
    <div className="container">
      <h1>Pokedex</h1>

      <div className="controls">
        <button
          onClick={() => setPokemonId((id) => Math.max(1, id - 1))}
          disabled={pokemonId === 1 || loading}
        >
          Previous
        </button>
        <span>Pokemon #{pokemonId}</span>
        <button onClick={() => setPokemonId((id) => id + 1)} disabled={loading}>
          Next
        </button>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p className="error">Error: {error}</p>}

      {pokemon && !loading && !error && (
        <div className="pokemon-card">
          <h2>{pokemon.name}</h2>
          <p>Height: {pokemon.height}</p>
          <p>Weight: {pokemon.weight}</p>
          <p>Types: {pokemon.types.map((t) => t.type.name).join(", ")}</p>
        </div>
      )}
    </div>
  );
}

export default App;
