import styled from "styled-components";

interface CardItemsImageProps {
    imgUrl: string;
}

const CardItemsImageContainer = styled.div`
    > img {
        width: 800px;
        height: 717px;
        border-radius: 30px;
    }
`

export function CardItemsImage({ imgUrl }: CardItemsImageProps) {
    return (
        <CardItemsImageContainer>
            <img src={imgUrl} alt=""/>
        </CardItemsImageContainer>
    );
}