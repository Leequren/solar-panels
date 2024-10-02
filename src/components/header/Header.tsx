import {MainLogo} from "./MainLogo/MainLogo.tsx";
import {Nav} from "./Nav/Nav.tsx";
import styled from "styled-components";

const HeaderStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 150px;
    padding-right: 150px;
    padding-top: 15px;
    
    @media (max-width: 1650px) {
        padding-left: 50px;
        padding-right: 50px;
    }
    @media (max-width: 450px) {
        padding-left: 15px;
        padding-right: 30px;
        
    }
`

export function Header() {
    return (
        <HeaderStyled>
            <MainLogo black_name="Mobi" green_name="Solar"/>
            <Nav/>
        </HeaderStyled>
    )
}