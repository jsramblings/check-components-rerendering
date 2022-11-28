import React from "react";

const PokemonCard = ({ pokemon, liked, onLike }) => (
  <div
    style={{
      border: "1px solid lightgrey",
      margin: "10px",
      padding: "0 10px 20px 10px",
      width: "140px",
      textAlign: "center",
    }}
  >
    <h3 style={{ lineHeight: "1.8rem" }}>{pokemon.name}</h3>
    {liked ? " ❤️" : <button onClick={() => onLike(pokemon.name)}>Like</button>}
  </div>
);

export default PokemonCard;
