import styled from "styled-components";
import {CardItemsImage} from "@/pages/CardItemPage/CardItemsImage.tsx";
import {CardItemsCharacteristics} from "@/pages/CardItemPage/CardItemsCharacteristics.tsx";
import {CardItemsDescription} from "@/pages/CardItemPage/CardItemsDescription.tsx";

interface CardItemsProps {

}

const CardItemsStyled = styled.div`

`

const CardItemsWrapper = styled.div`

`

const CardItemsContainer = styled.div`

`

const CardItemsCharacteristicsContainer = styled.div`

`

const CardItemsDescriptionWrapper = styled.div`

`


export function CardItems({}: CardItemsProps) {
    return (
        <CardItemsStyled>
            <CardItemsWrapper>
                <CardItemsContainer>
                    <CardItemsImage imgUrl={'/img/MainSolarPanelImg.png'}/>
                    <CardItemsCharacteristicsContainer>
                        <CardItemsCharacteristics title={'dd'} price={2222}/>
                    </CardItemsCharacteristicsContainer>
                </CardItemsContainer>
            </CardItemsWrapper>
            <CardItemsDescriptionWrapper>
                <CardItemsDescription title={'dsfdsdfs'} descriptionTitle={'sdfdsfdsf'} description={'dsdsffdsfd'}/>
            </CardItemsDescriptionWrapper>
        </CardItemsStyled>
    )
}