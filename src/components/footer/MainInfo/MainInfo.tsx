import { MainButton } from "./MainButton";
import styled from "styled-components";
import React from "react";
import { useWindowDimensions } from "@/hooks/useWindowSize/useWindowWidth.tsx";
import {routes} from "@/const/routes.ts";

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
        <MainButton name={"Главная"} path={routes.main} />
        <MainButton name={"О сервисе"} path={routes.main + '#Additional'} />
        <MainButton name={"Продукция"} path={routes.products} />
        <MainButton name={"О нас"} path={routes.main + '#AboutUs'} />
      </Column>
    ) : (
      <Column>
        <MainButton name={"FAQ"} path={routes.main + "#faq"} />
        <MainButton name={"Контакты"} path={routes.main + "#ContactsItem"} />
        <MainButton name={"Каталог"} path={"#Catalog"} />
        <MainButton name={"Корзина"} path={routes.cart} />
      </Column>
    )
  ) : (
    <MainInfoStyled>
      <Column>
        <MainButton name={"Главная"} path={routes.main} />
        <MainButton name={"О сервисе"} path={routes.main + '#Additional'} />
        <MainButton name={"Продукция"} path={routes.products} />
        <MainButton name={"О нас"} path={routes.main + '#AboutUs'} />
      </Column>
      <Column>
        <MainButton name={"FAQ"} path={routes.main + "#faq"} />
        <MainButton name={"Контакты"} path={routes.main + "#ContactsItem"} />
        <MainButton name={"Каталог"} path={"#Catalog"} />
        <MainButton name={"Корзина"} path={routes.cart} />
      </Column>
    </MainInfoStyled>
  );
};
