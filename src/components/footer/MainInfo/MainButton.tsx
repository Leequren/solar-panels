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
`

export const MainButton: React.FC<MainButtonProps> = ({ name, path }) => {
    return (
        <MainButtonStyled href={path}>
            {name}
        </MainButtonStyled>
    )
}