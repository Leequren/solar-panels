import styled from "styled-components";
import {FC} from "react";

interface IConfigPartProps {
    title?: string
    value?: string
}

const ConfigPartStyled = styled.div`
    .title {
        font-size: 26px;
        color: #8a8a8a;
    }

    .value {
        font-family: Jost, sans-serif;
        font-size: 26px;
    }
    
    @media (max-width: 1150px) {
        
        .title {
            font-size: 13px;
            color: black;
        }
        
        .value{
            font-size: 13px;
        }
        
    }
`

export const ConfigPart: FC<IConfigPartProps> = ({
title,
value
}) => {
    return (
        <ConfigPartStyled>
            <span className='title'>{title}: </span>
            <span className='value'>{value}</span>
        </ConfigPartStyled>
    )
}