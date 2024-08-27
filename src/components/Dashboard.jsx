import React from "react";
import styled from "styled-components";
import defaultImage from "../assets/imgs/pokeball-13iwdk7Y.png"; // Import the image
import { useSelector, useDispatch } from "react-redux";
import { removePokemon } from "../features/pokemonSlice";
// import { usePokemon } from "../contexts/PokemonContext";

const Wrap = styled.div`
  width: 90%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  background-color: white;
  border-radius: 10px;
`;

const DashboardH2 = styled.h2`
  font-size: 2.5rem;
  margin: 1rem;
`;

const DashBoardCards = styled.div`
  width: 90%;
  display: flex;
  flex-direction: row;
  gap: 0.5rem;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 2rem;
  margin-bottom: 2rem;
`;
const DashBoardCard = styled.div`
  width: 80px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: 0 10px 20px rgba(151, 151, 151, 0.23),
    0 6px 6px rgba(151, 151, 151, 0.23);
  border-radius: 10px;
  padding: 1rem;
`;

const DefaultImg = styled.img`
  width: 50px;
`;

const DeleteButton = styled.button`
  background-color: rgba(253, 202, 255, 0.732);
  border: none;
  border-radius: 5px;
  padding: 0.5rem;
  font-size: 0.8rem;
  cursor: pointer;
  margin-top: 1rem;
  margin-bottom: 1rem;
  box-shadow: 0 10px 20px rgba(195, 195, 195, 0.23),
    0 6px 6px rgba(193, 193, 193, 0.23);
`;

const Dashboard = () => {
  // const { selectPokemon, removePokemon } = usePokemon();
  const selectPokemon = useSelector((state) => state.pokemon);

  const dispatch = useDispatch();

  return (
    <Wrap>
      <DashboardH2>나만의 포켓몬</DashboardH2>
      <DashBoardCards>
        {Array(6)
          .fill()
          .map((_, index) => (
            <DashBoardCard key={index}>
              {selectPokemon[index] ? (
                <>
                  <img
                    src={selectPokemon[index].img_url}
                    alt={selectPokemon[index].korean_name}
                  />
                  <p>{selectPokemon[index].korean_name}</p>

                  <DeleteButton
                    onClick={() => {
                      dispatch(removePokemon({ id: selectPokemon[index].id }));
                    }}
                  >
                    삭제
                  </DeleteButton>
                </>
              ) : (
                <DefaultImg src={defaultImage} alt="Default Pokémon" />
              )}
            </DashBoardCard>
          ))}
      </DashBoardCards>
    </Wrap>
  );
};

export default Dashboard;
