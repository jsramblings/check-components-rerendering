import React, { useState, useEffect, useCallback } from "react";
import PokemonCard from "./PokemonCard";

const usePokemons = () => {
  const [pokemons, setPokemons] = useState([]);

  useEffect(async () => {
    const data = await fetch(`https://pokeapi.co/api/v2/pokemon`).then(
      (response) => response.json()
    );
    setPokemons(data.results);
  }, []);

  return pokemons;
};

const PokemonList = () => {
  const [liked, setLiked] = useState([]);
  const pokemons = usePokemons();
  const handleLike = useCallback(
    (name) => setLiked((state) => [...state, name]),
    [setLiked]
  );
  return (
    <div>
      <h3>Here are some pokemons..</h3>
      <p>Click "Like" to check what components rerender!</p>
      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {pokemons.map((pokemon) => (
          <PokemonCard
            key={pokemon.name}
            liked={liked.includes(pokemon.name)}
            pokemon={pokemon}
            onLike={handleLike}
          />
        ))}
      </div>
    </div>
  );
};

export default PokemonList;
