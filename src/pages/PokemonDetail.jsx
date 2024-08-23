import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import MOCK_DATA from "../MOCK_DATA";
import styled from "styled-components";
const Wrap = styled.div`
  width: 80%;
  margin: 0 auto;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
const DetailCard = styled.div`
  width: 25%;
  background-color: white;
  border-radius: 10px;
  padding: 2rem;
  gap: 2rem;
`;

const ContentP = styled.p`
  font-size: 1rem;
  margin-top: 1rem;
  margin-bottom: 1rem;
  line-height: 2rem;
`;
const ContentH2 = styled.h2`
  font-size: 4rem;
`;
const Buttons = styled.div`
  width: 100%;
  gap: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const ContentButton = styled.button`
  width: 90px;
  height: 40px;
  margin-top: 1rem;
  margin-bottom: 2rem;
  background-color: rgba(253, 202, 255, 0.732);
  border: none;
  border-radius: 5px;

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
const PokemonDetail = () => {
  // parameter가져오기
  const { id } = useParams();
  // MOCK_DATA의 id앞 : 제거
  const paramsId = id.slice(1);
  // id에 일치하는 MOCK_DATA 가져오기
  const detailData = MOCK_DATA.find(
    (pokemon) => pokemon.id === parseInt(paramsId)
  );
  const navigate = useNavigate();

  if (!detailData) {
    return (
      <Wrap>
        <DetailCard>
          <ContentP>
            포켓몬 정보를
            <br /> 찾을 수 없습니다.
          </ContentP>
          <ContentButton onClick={() => navigate("/Dex")}>
            뒤로 가기
          </ContentButton>
        </DetailCard>
      </Wrap>
    );
  }
  return (
    <Wrap>
      <DetailCard>
        <img
          style={{
            width: "100px",
            padding: "1rem",
          }}
          src={detailData.img_url}
          alt={detailData.korean_name}
        />
        <ContentH2>{detailData.korean_name}</ContentH2>
        <ContentP>
          Type : {detailData.types} <br />
          {detailData.description}
        </ContentP>
        <Buttons>
          <ContentButton onClick={() => navigate("/Dex")}>
            뒤로 가기
          </ContentButton>
          <ContentButton>추가하기</ContentButton>
        </Buttons>
      </DetailCard>
    </Wrap>
  );
};

export default PokemonDetail;
