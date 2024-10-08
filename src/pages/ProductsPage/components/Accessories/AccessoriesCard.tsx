import styled from "styled-components";
import {routes} from "@/const/routes.ts";
import {useNavigate} from "react-router-dom";
import {useCartStore} from "@/store/cartStore";
import Plus from '@/assets/img/Plus.svg?react'
import Minus from '@/assets/img/Minus.svg?react'
import React from "react";

interface AccessoriesCardProps {
  id: number;
  title: string;
  price: number;
  imgUrl: string;
}

const AccessoriesCardStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    max-width: 390px;
    margin-top: 30px;
    gap: 7px;

    @media (max-width: 800px) {
        max-width: 270px;
        > img {
            width: 270px;
            height: 250px;
            border-radius: 15px;
        }
    }
    @media (max-width: 500px) {
        max-width: 177px;
        > img {
            width: 177px;
            height: 160px;
        }
    }
`;

const AccessoriesCardTitle = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    min-height: 70px;

    > h1 {
        font-size: 26px;
        font-weight: 400;
        white-space: pre-wrap;
    }

    > span {
        font-family: Jost, sans-serif;
        font-size: 28px;
    }

    @media (max-width: 800px) {
        gap: 7px;

        > h1 {
            font-size: 20px;
            color: black;
        }

        > span {
            font-size: 22px;
        }
    }
    @media (max-width: 500px) {
        gap: 5px;
        > h1 {
            font-size: 13px;
        }

        > span {
            font-size: 16px;
        }
    }
`;
const MainInfoPart = styled.div`
    cursor: pointer;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-direction: column;

    > img {
        width: 390px;
        height: 370px;
        object-fit: cover;
        border-radius: 30px;
    }

    @media (max-width: 800px) {
        max-width: 270px;
        > img {
            width: 270px;
            height: 250px;
            border-radius: 15px;
        }
    }
    @media (max-width: 500px) {
        max-width: 177px;
        > img {
            width: 177px;
            height: 160px;
        }
    }
`;

const ButtonContainerStyled = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    background-color: #F4F4F4;
    border-radius: 100px;
    box-shadow: 0 3px 2px 0 #00000040;
    height: 53px;

    @media (max-width: 500px) {
        height: 24px;
    }
`

const ButtonStyled = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    padding: 10px;
    @media (max-width: 500px) {
        padding: 5px;
        > svg {
            width: 12px;
            height: 12px;
        }
    }
`

const ButtonCartStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    padding: 0 30px;

    > button {
        background-color: transparent;
        border: none;
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px;
    }

    > span {
        font-family: Jost, sans-serif;
        font-size: 26px;
        font-weight: 500;
    }

    @media (max-width: 500px) {
        > button {
            padding: 5px;

            > svg {
                width: 12px;
                height: 12px;
            }
        }

        > span {
            font-size: 13px;
        }
    }
`

export function AccessoriesCard({
                                  title,
                                  price,
                                  imgUrl,
                                  id,
                                }: AccessoriesCardProps) {
  const navigate = useNavigate();
  const {addFirstPart, parts, incementCountPart, decrementCountPart} =
    useCartStore();
  const btnHandler = (id: number) => {
    navigate(`${routes.productsCardInfo}?id=${id}`);
  };

  console.log(parts);
  const addFirstPartToCartHandler = () => {
    addFirstPart({
      idPart: id,
      defaultPrice: price,
      imgSrc: "",
      name: title,
      config: null,
    });
  };
  const addPartToCartHandler = () => {
    incementCountPart(id);
  };
  const decrementCountPartsHandler = () => {
    decrementCountPart(id);
  };
  //   const
  const addToCartBtn = (
    <ButtonStyled onClick={() => addFirstPartToCartHandler()}>
      <Plus width={26} height={26}/>
    </ButtonStyled>
  );

  const cartActions = (
    <ButtonCartStyled>
      <button onClick={() => decrementCountPartsHandler()}>
        <Minus height={4} width={26}/>
      </button>
      <span>{parts && parts[id] ? parts[id].count : "0"}</span>
      <button onClick={() => addPartToCartHandler()}>
        <Plus width={26} height={26}/>
      </button>
    </ButtonCartStyled>
  );
  //   console.log(parts && parts[id]);
  return (
    <AccessoriesCardStyled>
      <MainInfoPart onClick={() => btnHandler(id)}>
        <img src={imgUrl} alt=""/>
        <AccessoriesCardTitle>
          <h1>{title}</h1>
          <span>{price} ₽</span>
        </AccessoriesCardTitle>
      </MainInfoPart>
      <ButtonContainerStyled>{parts && parts[id] ? cartActions : addToCartBtn}</ButtonContainerStyled>
    </AccessoriesCardStyled>
  );
}
