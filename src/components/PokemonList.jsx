import React from "react";
import PokemonCard from "./PokemonCard";

const PokemonList = ({ addPokemon, pokemonData }) => {
  return (
    <div>
      <PokemonCard addPokemon={addPokemon} pokemonData={pokemonData} />
    </div>
  );
};

export default PokemonList;
