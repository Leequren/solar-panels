import React from "react";
import styled from "styled-components";

interface NavItemProps {
  name: string;
  path: string;
  counter?: number;
  isCart?: boolean;
  imgUrl?: string;
}

const NavItemStyled = styled.a`
  display: flex;
  gap: 10px;
  cursor: pointer;
  text-decoration: none;
  font-size: 30px;
  font-weight: 400;
  color: black;
  cursor: pointer;
`;

const IsCartStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;

const NavItemContainer = styled.div<Partial<NavItemProps>>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border: ${(props) => (props.isCart ? "1px solid #D1D1D1" : "")};
  border-radius: ${(props) => (props.isCart ? "1000px" : "")};
  padding: ${(props) => (props.isCart ? "10px 20px" : "")};
  gap: 20px;
  cursor: pointer;
`;

const CounterStyled = styled.span`
  font-family: Jost, sans-serif;
  font-size: 30px;
`;

export const NavItem: React.FC<NavItemProps> = ({
  name,
  path,
  counter,
  isCart,
  imgUrl,
}) => {
  return (
    <NavItemContainer isCart={isCart}>
      <NavItemStyled href={path}>{name}</NavItemStyled>
      {isCart && (
        <IsCartStyled>
          <CounterStyled> {counter} </CounterStyled>
          <img src={imgUrl} alt="" width={35} height={35} />
        </IsCartStyled>
      )}
    </NavItemContainer>
  );
};
