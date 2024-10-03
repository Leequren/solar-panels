import {ProductsCard} from "./components/ProductsCard/ProductsCard.tsx";
import {Accessories} from "./components/Accessories/Accessories.tsx";
import styled from "styled-components";
import {useState} from "react";

const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    height: 70px;
    width: 648px;
    border-radius: 100px;
    border: 1px solid black;
    @media (max-width: 800px) {
        width: 320px;
        height: 40px;
    }
`

const StyledBtn = styled.button<{ mode: boolean }>`
    font-size: 30px;
    font-weight: 500;
    background: ${props => props.mode ? 'black' : 'white'};
    color: ${props => props.mode ? 'white' : 'black'};
    border: none;
    border-radius: 100px;
    width: 50%;
    align-self: stretch;
    cursor: pointer;
    @media (max-width: 800px) {
        font-size: 16px;
    }
`
const BtnContainerWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 120px;
    @media (max-width: 1350px) {
        margin-top: 80px;
    }
    @media (max-width: 800px) {
        margin-top: 40px;
    }
`

export function ProductsPage() {
    const [switchedBtn, setSwitchedBtn] = useState(true)
    return (
        <div>
            <BtnContainerWrapper>
                <ButtonContainer>
                    <StyledBtn mode={switchedBtn} onClick={() => setSwitchedBtn(true)}>Готовые сборки</StyledBtn>
                    <StyledBtn mode={!switchedBtn} onClick={() => setSwitchedBtn(false)}>Комплектующие</StyledBtn>
                </ButtonContainer>
            </BtnContainerWrapper>
            {switchedBtn ? <ProductsCard/> :
                <Accessories/>}
        </div>
    );
}
