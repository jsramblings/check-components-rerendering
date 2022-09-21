import React from 'react';
import './style.css';
import PokemonList from './components/PokemonList';

export default function App() {
  return (
    <div>
      <h1>Hello!</h1>
      <p>
        This is an app that showcases how to use the React DevTools to check
        what components rerendered and why 🕵🏻‍♀️
      </p>
      <PokemonList />
    </div>
  );
}
