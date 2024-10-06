import {ProductsCardItems} from "@/pages/ProductsCardInfoPage/components/ProductsCardItems.tsx";
import styled from "styled-components";

const CardItemStyled = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    margin-top: 120px;

    @media (max-width: 850px) {
        margin-top: 25px;
    }
`

export function ProductsCardInfoPage() {

    return (
        <CardItemStyled>
            <ProductsCardItems/>
        </CardItemStyled>
    )
}