import Plus from '../../../assets/img/Plus.svg?react'
import Minus from '../../../assets/img/Minus.svg?react'
import Remove from '../../../assets/img/RemoveIcon.svg?react'

import styled from "styled-components";
import React from "react";
import {ConfigPart} from "@/pages/CartPage/components/ConfigPart.tsx";
import {ConfigWs} from "@/pages/CartPage/components/ConfigWs.tsx";

interface ICartProductsItemDesktopProps {
    title: string
    price: number
    count: number
    imgUrl: string,
    type: string,
    titleCharacteristics?: string,
    valueCharacteristics?: string
}

const CartProductsItemStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 60px;
`

const CartProductsItemImg = styled.div`
    > img {
        width: 200px;
        height: 200px;
        object-fit: cover;
        border-radius: 15px;
    }
`

const CartProductsItemContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 20px;
`
const CartProductsItemCharacteristicsContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 50px;
    justify-content: center;
`

const CartProductsItemDeleteButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 1000px;
    height: 40px;
    min-width: 40px;
    background-color: red;
`

const CartProductsItemTitle = styled.div`
    font-size: 26px;
`

const CartProductsItemPriceContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
`

const CartProductsItemButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
    border: 1px solid black;
    border-radius: 1000px;
    max-height: 60px;

    > button {
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        background-color: transparent;
        cursor: pointer;
        height: 60px;
        width: 60px;
    }

    > span {
        font-family: Jost, sans-serif;
        font-size: 25px;
    }
`

const CartProductsItemCharacteristics = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`

const CartProductsItemPrice = styled.div`
    > span {
        font-family: Jost, sans-serif;
        font-size: 26px;
        text-wrap: nowrap;
    }
`

export const CartProductsItemDesktop: React.FC<ICartProductsItemDesktopProps> = ({imgUrl, count, title, price, type, titleCharacteristics, valueCharacteristics}: ICartProductsItemDesktopProps) => {
    return (
        <CartProductsItemStyled>
            <CartProductsItemContainer>
                <CartProductsItemImg>
                    <img src={imgUrl} alt=""/>
                </CartProductsItemImg>
                <CartProductsItemCharacteristicsContainer>
                    <CartProductsItemTitle>
                        <span>{title}</span>
                    </CartProductsItemTitle>
                    <CartProductsItemPriceContainer>
                        <CartProductsItemButton>
                            <button>
                                <Minus/>
                            </button>
                            <span>{count}</span>
                            <button>
                                <Plus/>
                            </button>
                        </CartProductsItemButton>
                        <CartProductsItemPrice>
                            <span>{price} ₽</span>
                        </CartProductsItemPrice>
                        <CartProductsItemCharacteristics>
                            {type === 'W' ? <ConfigWs/> : type === 'P' ? <ConfigPart value={valueCharacteristics} title={titleCharacteristics}/> : null}
                        </CartProductsItemCharacteristics>
                    </CartProductsItemPriceContainer>
                </CartProductsItemCharacteristicsContainer>
            </CartProductsItemContainer>
            <CartProductsItemDeleteButton>
                <Remove stroke='#FFFFFF'/>
            </CartProductsItemDeleteButton>
        </CartProductsItemStyled>
    );
}