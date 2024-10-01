import { NavItem } from "./NavItem.tsx";
import styled from "styled-components";
import React from "react";
import { routes } from "@/const/routes.ts";

interface NavBlockProps {
  IsMobile: boolean;
}

const NavStyled = styled.div`
  display: flex;
  gap: 30px;
`;
export const NavBlock: React.FC<NavBlockProps> = ({ IsMobile }) => {
  return !IsMobile ? (
    <NavStyled>
      <NavItem name="Главная" path={routes.main} />
      <NavItem name="О сервисе" path="#Additional" />
      <NavItem name="Продукция" path={routes.products} />
      <NavItem name="О нас" path="#AboutUs" />
      <NavItem name="FAQ" path="#FAQ" />
      <NavItem name="Контакты" path="#ContactsItem" />
      <NavItem
        name="Каталог"
        path="#Cart"
        counter={10}
        isCart
        imgUrl="/img/cartIcon.png"
      />
    </NavStyled>
  ) : (
    <NavStyled>
      <NavItem name="Главная" path="#Home" />
      <NavItem name="О сервисе" path="#Additional" />
      <NavItem name="Продукция" path="#Products" />
      <NavItem name="О нас" path="#AboutUs" />
      <NavItem name="FAQ" path="#FAQ" />
      <NavItem name="Контакты" path="#ContactsItem" />
      <NavItem
        name="Каталог"
        path="#Cart"
        counter={10}
        isCart
        imgUrl={"/img/cartIcon.png"}
      />
    </NavStyled>
  );
};
