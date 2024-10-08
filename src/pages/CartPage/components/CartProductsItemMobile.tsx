import Plus from '../../../assets/img/Plus.svg?react'
import Minus from '../../../assets/img/Minus.svg?react'
import Remove from '../../../assets/img/RemoveIcon.svg?react'

import styled from "styled-components";
import React from "react";
import {ConfigPart} from "@/pages/CartPage/components/ConfigPart.tsx";
import {ConfigWs} from "@/pages/CartPage/components/ConfigWs.tsx";

interface ICartProductsItemMobileProps {
    title: string
    price: number
    count: number
    imgUrl: string,
    type: string,
    titleCharacteristics?: string,
    valueCharacteristics?: string
}

const CartProductsItemMobileStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 15px;
    border-bottom: 1px solid black;
`

const CartProductsItemStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
`

const CartProductsItemImg = styled.div`
    > img {
        width: 75px;
        height: 90px;
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
    gap: 10px;
`

const CartProductsItemDeleteButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 1000px;
    height: 25px;
    min-width: 25px;
    background-color: red;
`

const CartProductsItemTitle = styled.div`
    > span {
        font-size: 13px;
        font-weight: 400;
    }
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
    gap: 9px;
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
        height: 28px;
        width: 28px;
    }

    > span {
        font-family: Jost, sans-serif;
        font-size: 10px;
    }
`

const CartProductsItemCharacteristics = styled.div`
    display: flex;
    
`

const CartProductsItemPrice = styled.div`
    > span {
        font-family: Jost, sans-serif;
        font-size: 16px;
        text-wrap: nowrap;
    }
`

export const CartProductsItemMobile: React.FC<ICartProductsItemMobileProps> = ({
imgUrl,
count,
title,
price,
type,
titleCharacteristics,
valueCharacteristics
}: ICartProductsItemMobileProps) => {
    return (
        <CartProductsItemMobileStyled>
            <CartProductsItemStyled>
                <CartProductsItemContainer>
                    <CartProductsItemImg>
                        <img src={imgUrl} alt=""/>
                    </CartProductsItemImg>
                    <CartProductsItemCharacteristicsContainer>
                        <CartProductsItemTitle>
                            <span>{title}</span>
                            <CartProductsItemCharacteristics>
                                {type === 'W' ? <ConfigWs/> : type === 'P' ?
                                    <ConfigPart value={valueCharacteristics} title={titleCharacteristics}/> : null}
                            </CartProductsItemCharacteristics>
                        </CartProductsItemTitle>
                    </CartProductsItemCharacteristicsContainer>
                </CartProductsItemContainer>
                <CartProductsItemPriceContainer>
                    <CartProductsItemPrice>
                        <span>{price} ₽</span>
                    </CartProductsItemPrice>
                    <CartProductsItemButton>
                        <button>
                            <Minus width={9} height={9}/>
                        </button>
                        <span>{count}</span>
                        <button>
                            <Plus width={9} height={9}/>
                        </button>
                    </CartProductsItemButton>
                </CartProductsItemPriceContainer>
            </CartProductsItemStyled>
            <CartProductsItemDeleteButton>
                <Remove height={9} width={9} stroke='#FFFFFF'/>
            </CartProductsItemDeleteButton>
        </CartProductsItemMobileStyled>
    )
}