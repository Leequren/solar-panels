import React from "react";
import styled from "styled-components";

interface MainLogoProps {
    black_name: string,
    green_name: string
}

const LogoContainer = styled.span`
    display: flex;
    align-items: center;
`

const LogoText = styled.h1`
    @font-face {
        font-family: 'Jost';
        src: url('/fonts/Jost-VariableFont_wght.ttf');
        font-weight: 100 900;
        font-style: normal;
        font-display: swap;
    }
    font-family: 'Jost', sans-serif;
    font-size: 50px;
    font-weight: 400;
    color: ${props => props.color};
`

export const MainLogo: React.FC<MainLogoProps> = ({ black_name, green_name }) => {
    return (
        <LogoContainer>
            <LogoText color="black">{black_name}</LogoText>
            <LogoText color="#4EBA0C">{green_name}</LogoText>
        </LogoContainer>
    )
}