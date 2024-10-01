import { FC } from "react";
import styled from "styled-components";

interface MainItemProps {
  title: string;
  description: string;
  img: string;
  weight: string;
  power: string;
  size: string;
}

const MainItemStyled = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 115px;
  padding: 144px 150px 0 150px;
`;

const Characteristics = styled.div`
  display: flex;
  flex-direction: column;

  > h1 {
    font-size: 30px;
    font-weight: 500;
    color: #48494b;
  }

  > span {
    font-family: Jost, sans-serif;
    font-size: 50px;
    font-weight: 400;
  }
`;

const CharacteristicsContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
`;

export const MainItem: FC<MainItemProps> = ({
  title,
  description,
  img,
  weight,
  power,
  size,
}) => {
  return (
    <MainItemStyled>
      <div style={{ display: "flex", flexDirection: "column", gap: "45px" }}>
        <div
          style={{
            width: "676px",
            display: "flex",
            flexDirection: "column",
            gap: "15px",
          }}
        >
          <h1 style={{ fontSize: "60px" }}>{title}</h1>
          <p style={{ fontSize: "30px" }}>{description}</p>
        </div>

        <CharacteristicsContainer>
          <Characteristics>
            <h1>Масса, кг</h1>
            <span>{weight}</span>
          </Characteristics>

          <Characteristics>
            <h1>Мощность, Вт</h1>
            <span>{power}</span>
          </Characteristics>

          <Characteristics>
            <h1>Размер, см</h1>
            <span>{size}</span>
          </Characteristics>
        </CharacteristicsContainer>

        <div style={{ display: "flex", gap: "20px" }}>
          <button
            style={{
              fontSize: "30px",
              backgroundColor: "black",
              color: "white",
              padding: "18px 45px",
              borderRadius: "100px",
              boxShadow: "0px 0px 10px 5px #00000040",
            }}
          >
            Предзаказ
          </button>
          <button
            style={{
              fontSize: "30px",
              backgroundColor: "#DCDEDD",
              border: "none",
              padding: "18px 45px",
              borderRadius: "100px",
            }}
          >
            Подробнее
          </button>
        </div>
      </div>
      <div>
        <img src={img} alt="" style={{ borderRadius: "35px" }} />
      </div>
    </MainItemStyled>
  );
};
