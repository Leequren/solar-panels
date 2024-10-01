import {MainLogo} from "./MainLogo/MainLogo.tsx";
import {Nav} from "./Nav/Nav.tsx";
import styled from "styled-components";

const HeaderStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 300px;
    padding-top: 15px;
`

export function Header() {
    return (
        <HeaderStyled>
            <MainLogo black_name="Mobi" green_name="Solar"/>
            <Nav/>
        </HeaderStyled>
    )
}