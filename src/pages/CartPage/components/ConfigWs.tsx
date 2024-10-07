import styled from "styled-components";
import Dots from '../../../assets/img/3Dots.svg?react'
import {useWindowDimensions} from "@/hooks/useWindowSize/useWindowWidth.tsx";

const ConfigWsStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 4px;
    border-radius: 25px;

    &:hover {
        background-color: #D9D9D9;
    }
`

const ConfigWsBlockContainerStyled = styled.div`

`

const ConfigWsBlockStyled = styled.div`

`

const ConfigWsBlockItemsStyled = styled.div`

`

export const ConfigWs = () => {
    // @ts-ignore
    const isMobile = useWindowDimensions().width < 1150;

    return (
        <ConfigWsStyled>
            {isMobile ? (
                <Dots width={15} height={3}/>
            ) : (
                <Dots/>
            )
            }

            <ConfigWsBlockContainerStyled>
                <ConfigWsBlockStyled>
                    <ConfigWsBlockItemsStyled>

                    </ConfigWsBlockItemsStyled>
                </ConfigWsBlockStyled>
            </ConfigWsBlockContainerStyled>
        </ConfigWsStyled>
    )
}