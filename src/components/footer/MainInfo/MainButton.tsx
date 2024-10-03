import styled from "styled-components";
import React from "react";

interface MainButtonProps {
    name: string,
    path: string
}

const MainButtonStyled = styled.a`
    cursor: pointer;
    text-decoration: none;
    font-size: 26px;
    font-weight: 400;
    color: white;
    @media (max-width: 1300px) {
        font-size: 22px;
    }
    @media (max-width: 600px) {
        font-size: 18px;
    }
    @media (max-width: 500px) {
        font-size: 16px;
    }
`

export const MainButton: React.FC<MainButtonProps> = ({ name, path }) => {
    return (
        <MainButtonStyled href={path}>
            {name}
        </MainButtonStyled>
    )
}