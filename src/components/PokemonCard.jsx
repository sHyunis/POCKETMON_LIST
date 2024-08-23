import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const ListCards = styled.div`
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  margin: 0 auto;
  justify-content: space-between;
  gap: 1rem;
`;

const ListCard = styled.div`
  width: 100px;
  background-color: white;
  text-align: center;
  border-radius: 10px;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  transition: 0.2s;
  box-shadow: 0 10px 20px rgba(195, 195, 195, 0.23),
    0 6px 6px rgba(193, 193, 193, 0.23);
  cursor: pointer;
  &:hover {
    transform: scale(104%);
  }
`;

const AddButton = styled.button`
  background-color: rgba(253, 202, 255, 0.732);
  border: none;
  border-radius: 5px;
  padding: 0.5rem;
  font-size: 0.8rem;
  cursor: pointer;
  margin-bottom: 1rem;
  box-shadow: 0 10px 20px rgba(195, 195, 195, 0.23),
    0 6px 6px rgba(193, 193, 193, 0.23);

  transition: 0.2s;
  &:hover {
    box-shadow: 0 10px 20px rgba(206, 206, 206, 0.23),
      0 6px 6px rgba(151, 151, 151, 0.5);
    transform: translate3d(0, -5%, 0);
  }
`;
const PokemonCard = ({ addPokemon, pokemonData }) => {
  return (
    <ListCards>
      {pokemonData.map((data) => (
        <ListCard key={data.id}>
          <Link
            to={`/pokemonDetail/:${data.id}`}
            style={{ textDecoration: "none" }}
          >
            <img src={data.img_url} alt={data.korean_name} />
            <p>{data.korean_name}</p>
            <p>No.{data.id}</p>
          </Link>
          <AddButton
            onClick={() => {
              addPokemon(data);
            }}
          >
            추가하기
          </AddButton>
        </ListCard>
      ))}
    </ListCards>
  );
};

export default PokemonCard;
