import Plus from '../../../assets/img/Plus.svg?react'
import Minus from '../../../assets/img/Minus.svg?react'
import Remove from '../../../assets/img/RemoveIcon.svg?react'
import Dots from '../../../assets/img/3Dots.svg?react'
import styled from "styled-components";

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

const CartProductsItemPrice = styled.div`
    > span {
        font-family: Jost, sans-serif;
        font-size: 26px;
        text-wrap: nowrap;
    }
`

const CartProductsItemCharacteristics = styled.div`
    .title {
        font-size: 26px;
        color: #8a8a8a;
    }

    .value {
        font-family: Jost, sans-serif;
        font-size: 26px;
    }
`

const CartProductsItemThreeDots = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    border-radius: 25px;
    
    &:hover {
        background-color: #D9D9D9;
    }
`

export function CartProductsItem() {
    return (
        <CartProductsItemStyled>
            <CartProductsItemContainer>
                <CartProductsItemImg>
                    <img src="/img/MainSolarPanelImg.png" alt=""/>
                </CartProductsItemImg>
                <CartProductsItemCharacteristicsContainer>
                    <CartProductsItemTitle>
                        <span>Модуль быстрой зарядки телефона</span>
                    </CartProductsItemTitle>
                    <CartProductsItemPriceContainer>
                        <CartProductsItemButton>
                            <button>
                                <Minus/>
                            </button>
                            <span>1</span>
                            <button>
                                <Plus/>
                            </button>
                        </CartProductsItemButton>
                        <CartProductsItemPrice>
                            <span>17000 ₽</span>
                        </CartProductsItemPrice>
                        <CartProductsItemCharacteristics>
                            <span className='title'>Количество USB-портов: </span>
                            <span className='value'>2</span>
                            <CartProductsItemThreeDots>
                                <Dots/>
                            </CartProductsItemThreeDots>
                        </CartProductsItemCharacteristics>
                    </CartProductsItemPriceContainer>
                </CartProductsItemCharacteristicsContainer>
            </CartProductsItemContainer>
            <CartProductsItemDeleteButton>
                <Remove stroke='#FFFFFF'/>
            </CartProductsItemDeleteButton>
        </CartProductsItemStyled>
    )
}