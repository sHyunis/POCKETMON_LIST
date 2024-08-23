import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
const Wrap = styled.div`
  width: 90%;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

const StartButton = styled.button`
  width: 200px;
  height: 50px;
  border: none;
  border-radius: 10px;
  font-family: "content";
  font-size: 1.5rem;
  cursor: pointer;
  box-shadow: 0 10px 20px rgba(195, 195, 195, 0.23),
    0 6px 6px rgba(193, 193, 193, 0.23);

  transition: 0.2s;
  &:hover {
    box-shadow: 0 10px 20px rgba(206, 206, 206, 0.23),
      0 6px 6px rgba(151, 151, 151, 0.5);
    transform: translate3d(0, -5%, 0);
  }
`;

const HomeH1 = styled.h1`
  font-size: 9rem;
  font-family: "main";
  font-weight: 500;
`;

const Home = () => {
  const navigate = useNavigate();
  return (
    <Wrap>
      <HomeH1>POKEMON</HomeH1>
      <StartButton onClick={() => navigate("/Dex")}>
        포켓몬 도감 시작하기
      </StartButton>
    </Wrap>
  );
};

export default Home;
