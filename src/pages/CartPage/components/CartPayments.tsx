import styled from "styled-components";
import ArrowRight from '../../../assets/img/ArrowRight.svg?react'

interface ICartPaymentsProps {
    price: number
}

const CartPaymentsStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: 30px;
    background-color: #F2F2F2;
    height: 100%;
    width: 595px;
    border-radius: 15px;
    
    @media (max-width: 1150px) {
        background-color: white;
        width: 100%;
        padding: 0;
    }
`

const CardPaymentsTitle = styled.div`
    font-size: 35px;
    font-weight: 500;
    
    @media (max-width: 1150px) {
        font-size: 20px;
        font-weight: 400;
    }
`

const CardPaymentsPriceWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
`

const CardPaymentsPriceContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    
    @media (max-width: 1150px) {
        gap: 15px;
    }
`

const CardPaymentsButton = styled.div`
    text-align: center;
    background-color: black;
    color: white;
    border-radius: 100px;
    padding: 18px 45px;
    font-size: 30px;

    @media (max-width: 1150px) {
        font-size: 13px;
        font-weight: 400;
        padding: 12px 25px;
    }
`

const CartPaymentsPrice = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    .title {
        font-size: 26px;
        font-weight: 500;
    }

    .value {
        font-family: Jost, sans-serif;
        font-size: 26px;
        font-weight: 400;
    }
    
    @media (max-width: 1150px) {
        
        .title{
            font-size: 13px;
            font-weight: 300;
        }
        
        .value{
            font-size: 13px;
            font-weight: 300;
        }
    }
`

const CartPaymentsDiscount = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;

    .title {
        font-size: 26px;
        font-weight: 500;
    }

    .value {
        font-family: Jost, sans-serif;
        font-size: 26px;
        font-weight: 400;
    }
    
    @media (max-width: 1150px) {
        
        .title{
            font-size: 13px;
            font-weight: 300;
        }

        .value{
            font-size: 13px;
            font-weight: 300;
        }
    }
`

const CartPaymentsPromo = styled.div`
    display: flex;
    align-items: center;
    border: 1px solid black;
    border-radius: 100px;
    width: 100%;
    background-color: transparent;

    > input {
        font-family: Jost, sans-serif;
        border: none;
        outline: none;
        flex: 1;
        font-size: 20px;
        padding-left: 30px;
        border-radius: 25px;
        background-color: transparent;
    }

    > button {
        background-color: black;
        color: white;
        border: none;
        border-radius: 100px;
        width: 60px;
        height: 60px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        margin-left: 10px;
    }

    @media (max-width: 1150px) {

        > input {
            font-size: 13px;
            font-weight: 300;
        }

        > button {
            width: 30px;
            height: 30px;
        }
    }
`

const CartPaymentsTotalPrice = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;

    .title {
        font-size: 26px;
        font-weight: 500;
    }

    .value {
        font-family: Jost, sans-serif;
        font-size: 60px;
        font-weight: 400;
    }
    
    @media (max-width: 1150px) {
        gap: 10px;

        .title{
            font-size: 13px;
            font-weight: 300;
        }
        
        .value{
            font-size: 20px;
            font-weight: 400;
        }
    }
`

export function CartPayments({price}: ICartPaymentsProps) {
    let promo = price / 10
    let totalPrice = price - promo
    return (
        <CartPaymentsStyled>
            <CardPaymentsTitle>
                <span>К оплате</span>
            </CardPaymentsTitle>
            <CardPaymentsPriceWrapper>
                <CardPaymentsPriceContainer>
                    <CartPaymentsPrice>
                        <span className='title'>Стоимость товаров </span>
                        <span className='value'>{price} ₽</span>
                    </CartPaymentsPrice>
                    <CartPaymentsDiscount>
                        <span className='title'>Скидка </span>
                        <span className='value'>{promo} ₽</span>
                    </CartPaymentsDiscount>
                    <CartPaymentsPromo>
                        <input type="text" placeholder="Ввести промокод"/>
                        <button>
                            <ArrowRight/>
                        </button>
                    </CartPaymentsPromo>
                    <CartPaymentsTotalPrice>
                        <span className='title'>Итого </span>
                        <span className='value'>{totalPrice} ₽</span>
                    </CartPaymentsTotalPrice>
                </CardPaymentsPriceContainer>
                <CardPaymentsButton>
                    <span>Оформить заказ</span>
                </CardPaymentsButton>
            </CardPaymentsPriceWrapper>
        </CartPaymentsStyled>
    )
}