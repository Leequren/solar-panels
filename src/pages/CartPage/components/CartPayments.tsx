import styled from "styled-components";
import ArrowRight from '../../../assets/img/ArrowRight.svg?react'

const CartPaymentsStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: 30px;
    background-color: #F2F2F2;
    height: 100%;
    width: 595px;
    border-radius: 15px;
`

const CardPaymentsTitle = styled.div`
    font-size: 35px;
    font-weight: 500;
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
`

const CardPaymentsButton = styled.div`
    text-align: center;
    background-color: black;
    color: white;
    border-radius: 100px;
    padding: 18px 45px;
    font-size: 30px;
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
`

const CartPaymentsTotalPrice = styled.div`
    display: flex;
    flex-direction: column;

    .title {
        font-size: 26px;
        font-weight: 500;
    }

    .value {
        font-family: Jost, sans-serif;
        font-size: 60px;
        font-weight: 400;
    }
`

export function CartPayments() {
    return (
        <CartPaymentsStyled>
            <CardPaymentsTitle>
                <span>К оплате</span>
            </CardPaymentsTitle>
            <CardPaymentsPriceWrapper>
                <CardPaymentsPriceContainer>
                    <CartPaymentsPrice>
                        <span className='title'>Стоимость товаров </span>
                        <span className='value'>48000 ₽</span>
                    </CartPaymentsPrice>
                    <CartPaymentsDiscount>
                        <span className='title'>Скидка </span>
                        <span className='value'>0 ₽</span>
                    </CartPaymentsDiscount>
                    <CartPaymentsPromo>
                        <input type="text" placeholder="Ввести промокод"/>
                        <button>
                            <ArrowRight/>
                        </button>
                    </CartPaymentsPromo>
                    <CartPaymentsTotalPrice>
                        <span className='title'>Итого </span>
                        <span className='value'>48000 ₽</span>
                    </CartPaymentsTotalPrice>
                </CardPaymentsPriceContainer>
                <CardPaymentsButton>
                    <span>Оформить заказ</span>
                </CardPaymentsButton>
            </CardPaymentsPriceWrapper>
        </CartPaymentsStyled>
    )
}