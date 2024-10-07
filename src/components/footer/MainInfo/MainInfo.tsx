import { MainButton } from "./MainButton";
import styled from "styled-components";
import React from "react";
import { useWindowDimensions } from "@/hooks/useWindowSize/useWindowWidth.tsx";

interface MainInfoProps {
  isOneColumn?: boolean;
}

const MainInfoStyled = styled.div`
  display: flex;
  flex-direction: row;
  gap: 120px;
  @media (max-width: 1500px) {
    gap: 60px;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  justify-content: center;
`;

export const MainInfo: React.FC<MainInfoProps> = ({ isOneColumn }) => {
  // @ts-ignore
  const isMobile = useWindowDimensions().width < 1150;

  return isMobile ? (
    isOneColumn ? (
      <Column>
        <MainButton name={"Главная"} path={"#Home"} />
        <MainButton name={"О сервисе"} path={"#Advantages"} />
        <MainButton name={"Продукция"} path={"#Products"} />
        <MainButton name={"О нас"} path={"#AboutUs"} />
      </Column>
    ) : (
      <Column>
        <MainButton name={"FAQ"} path={"#FAQ"} />
        <MainButton name={"Контакты"} path={"#Contacts"} />
        <MainButton name={"Каталог"} path={"#Catalog"} />
        <MainButton name={"Корзина"} path={"#Cart"} />
      </Column>
    )
  ) : (
    <MainInfoStyled>
      <Column>
        <MainButton name={"Главная"} path={"#Home"} />
        <MainButton name={"О сервисе"} path={"#Advantages"} />
        <MainButton name={"Продукция"} path={"#Products"} />
        <MainButton name={"О нас"} path={"#AboutUs"} />
      </Column>
      <Column>
        <MainButton name={"FAQ"} path={"#FAQ"} />
        <MainButton name={"Контакты"} path={"#Contacts"} />
        <MainButton name={"Каталог"} path={"#Catalog"} />
        <MainButton name={"Корзина"} path={"#Cart"} />
      </Column>
    </MainInfoStyled>
  );
};
