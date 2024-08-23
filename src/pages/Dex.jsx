import React from "react";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
import MOCK_DATA from "../MOCK_DATA";
import { useState } from "react";
import styled from "styled-components";
const DexContainer = styled.div`
  width: 80%;
  margin: 30px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const Dex = () => {
  const [selectPokemon, setSelectPokemon] = useState([]);

  const addPokemon = (addPokemon) => {
    if (selectPokemon.length >= 6) {
      alert("포켓몬은 최대 6개까지만 추가가 가능합니다 삭제 후 추가해주세요");
    } else if (
      selectPokemon.find((prevPokemon) => prevPokemon.id === addPokemon.id)
    ) {
      alert("이미 추가되어있는 포켓몬입니다.");
    } else {
      setSelectPokemon((prevPokemon) => [...prevPokemon, addPokemon]);
    }
  };

  const removePokemon = (removePokemon) => {
    setSelectPokemon((prevPokemon) =>
      prevPokemon.filter((prevPokemon) => prevPokemon.id !== removePokemon.id)
    );
  };
  return (
    <DexContainer>
      <Dashboard selectPokemon={selectPokemon} removePokemon={removePokemon} />
      <PokemonList addPokemon={addPokemon} pokemonData={MOCK_DATA} />
    </DexContainer>
  );
};

export default Dex;
