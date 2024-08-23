import React from "react";
import Home from "./pages/Home";
import Dex from "./pages/Dex";
import PokemonDetail from "./pages/PokemonDetail";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import GlobalStyle from "./styles/GlobalStyle";
import GlobalFont from "./styles/GlobalFont";
import { PokemonProvider } from "./contexts/pokemonContext";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <GlobalFont />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Dex" element={<Dex />}></Route>
          <Route path="/PokemonDetail/:id" element={<PokemonDetail />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
