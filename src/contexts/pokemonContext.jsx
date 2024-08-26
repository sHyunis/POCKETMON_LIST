import { createContext, useState, useContext } from "react";

const PokemonContext = createContext();

export const usePokemon = () => {
  return useContext(PokemonContext);
};

export const PokemonProvider = ({ children }) => {
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
    <PokemonContext.Provider
      value={{ selectPokemon, addPokemon, removePokemon }}
    >
      {children}
    </PokemonContext.Provider>
  );
};
