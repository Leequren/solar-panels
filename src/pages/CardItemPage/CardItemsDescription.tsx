import styled from "styled-components";

interface CardItemsDescriptionProps {
    title: string,
    descriptionTitle: string,
    description: string
}

const CardItemsDescriptionContainer = styled.div`

`
const CardItemsDescriptionTitle = styled.div`

`
const CardItemsDescriptionText = styled.div`

`
const CardItemsDescriptionTextTitle = styled.div`

`
const CardItemsDescriptionTextDescription = styled.div`

`

export function CardItemsDescription({title, description, descriptionTitle}: CardItemsDescriptionProps) {

    return (
        <CardItemsDescriptionContainer>
            <CardItemsDescriptionTitle>
                <span>{title}</span>
            </CardItemsDescriptionTitle>
            <CardItemsDescriptionText>
                <CardItemsDescriptionTextTitle>
                    <span>{descriptionTitle}</span>
                </CardItemsDescriptionTextTitle>
                <CardItemsDescriptionTextDescription>
                    <span>{description}</span>
                </CardItemsDescriptionTextDescription>
            </CardItemsDescriptionText>
        </CardItemsDescriptionContainer>
    )
}