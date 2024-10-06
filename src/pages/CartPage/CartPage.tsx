import styled from "styled-components";
import {CartProducts} from "@/pages/CartPage/components/CartProducts.tsx";
import {CartPayments} from "@/pages/CartPage/components/CartPayments.tsx";

const CartPageStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 120px;
`

const CartPageStyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 50px;
`

const CartPageTitle = styled.div`
    display: flex;
    //justify-content: center;

    > h1 {
        font-size: 60px;
        font-weight: 500;
    }

    width: 100%;
`

const CartPageComponentsContainer = styled.div`
    display: flex;
    //justify-content: center;
    gap: 20px;
`

export function CartPage() {

    return (
        <CartPageStyled>
            <CartPageStyledWrapper>
                <CartPageTitle>
                    <h1>Корзина</h1>
                </CartPageTitle>
                <CartPageComponentsContainer>
                    <CartProducts/>
                    <CartPayments/>
                </CartPageComponentsContainer>
            </CartPageStyledWrapper>
        </CartPageStyled>
    )
}