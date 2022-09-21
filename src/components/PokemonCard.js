import React from 'react';

const PokemonCard = ({ pokemon, liked, onLike }) => (
  <div
    style={{
      border: '1px solid lightgrey',
      margin: '10px',
      padding: '0 10px 10px 10px',
      width: '120px',
    }}
  >
    <h3 style={{ lineHeight: '1.8rem' }}>
      {pokemon.name}
      {liked && ' ❤️'}
    </h3>
    {!liked && <button onClick={() => onLike(pokemon.name)}>Like</button>}
  </div>
);

export default PokemonCard;
