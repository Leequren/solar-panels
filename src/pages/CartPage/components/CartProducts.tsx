import {CartProductsItem} from "@/pages/CartPage/components/CartProductsItem.tsx";
import styled from "styled-components";

const CartProductsStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export function CartProducts() {
    return (
        <CartProductsStyled>
            <CartProductsItem/>
            <CartProductsItem/>
            <CartProductsItem/>
        </CartProductsStyled>
    )
}