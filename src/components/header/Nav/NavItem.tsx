import React from "react";
import styled from "styled-components";

interface NavItemProps {
  name: string;
  path: string;
  counter?: number;
  isCart?: boolean;
  imgUrl?: string;
}

const NavItemStyled = styled.a<Partial<NavItemProps>>`
  display: flex;
  cursor: pointer;
  text-decoration: none;
  font-size: 30px;
  font-weight: 400;
  color: black;

  @media (max-width: 850px) {
    color: ${(props) => (props.isCart ? "black" : "white")};
  }

  @media (max-width: 1500px) {
    font-size: 25px;
  }
  @media (max-width: 1300px) {
    font-size: 20px;
  }
  @media (max-width: 1100px) {
    font-size: 17px;
  }
  @media (max-width: 850px) {
    font-size: 20px;
  }
  @media (max-width: 600px) {
    font-size: 17px;
  }
  @media (max-width: 393px) {
    font-size: 16px;
  }
`;

const IsCartStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;

  > img {
    width: 35px;
    height: 35px;
  }

  @media (max-width: 1500px) {
    > img {
      width: 30px;
      height: 30px;
    }
  }  
  @media (max-width: 1300px) {
    > img {
      width: 25px;
      height: 25px;
    }
  }  
  @media (max-width: 1100px) {
    > img {
      width: 22px;
      height: 22px;
    }
    @media (max-width: 850px) {
      > img {
        width: 30px;
        height: 30px;
      }
    }
    @media (max-width: 600px) {
      > img {
        width: 22px;
        height: 22px;
      }
    }
  }
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
  text-wrap: nowrap;

  @media (max-width: 1500px) {
    padding: ${(props) => (props.isCart ? "5px 10px" : "")};
    gap: 10px;
  }
  @media (max-width: 1300px) {
    padding: ${(props) => (props.isCart ? "5px 7px" : "")};
    gap: 7px;
  }
  @media (max-width: 850px) {
    padding: ${(props) => (props.isCart ? "5px 10px" : "")};
    gap: 10px;
  }
  @media (max-width: 600px) {
    padding: ${(props) => (props.isCart ? "5px 8px" : "")};
    gap: 5px;
  }
`;

const CounterStyled = styled.span`
  font-family: Jost, sans-serif;
  font-size: 30px;

  @media (max-width: 1500px) {
    font-size: 25px;
  }
  @media (max-width: 1300px) {
    font-size: 20px;
  }  
  @media (max-width: 1300px) {
    font-size: 17px;
  }
  @media (max-width: 850px) {
    font-size: 20px;
  }
  @media (max-width: 600px) {
    font-size: 17px;
  }
  @media (max-width: 393px) {
    font-size: 16px;
  }
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
        <NavItemStyled href={path} isCart={isCart}>{name}</NavItemStyled>
        {isCart && (
            <IsCartStyled>
              <CounterStyled> {counter} </CounterStyled>
              <img src={imgUrl} alt="" />
            </IsCartStyled>
        )}
      </NavItemContainer>
  );
};
