import styled from "styled-components";
import {CartProducts} from "@/pages/CartPage/components/CartProducts.tsx";
import {CartPayments} from "@/pages/CartPage/components/CartPayments.tsx";

const CartPageStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 120px;
    
    @media (max-width: 1650px) {
        margin-top: 30px;
    }
`;

const CartPageStyledWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
`;

const CartPageTitle = styled.div`
    display: flex;
    width: 100%;

    > h1 {
        font-size: 60px;
        font-weight: 500;
    }

    @media (max-width: 1150px) {
        > h1 {
            font-size: 20px;
        }
    }

`;

const CartPageComponentsContainer = styled.div`
    display: flex;
    gap: 20px;
    
    @media (max-width: 1650px) {
        flex-direction: column;
        align-items: center;
    }
`;

export function CartPage() {

    return (
        <CartPageStyled>
            <CartPageStyledWrapper>
                <CartPageTitle>
                    <h1>Корзина</h1>
                </CartPageTitle>
                <CartPageComponentsContainer>
                    <CartProducts/>
                    <CartPayments price={10000}/>
                </CartPageComponentsContainer>
            </CartPageStyledWrapper>
        </CartPageStyled>
    )
}