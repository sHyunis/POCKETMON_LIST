import React from "react";
import Dashboard from "../components/Dashboard";
import PokemonList from "../components/PokemonList";
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
  return (
    <DexContainer>
      <Dashboard />
      <PokemonList />
    </DexContainer>
  );
};

export default Dex;
