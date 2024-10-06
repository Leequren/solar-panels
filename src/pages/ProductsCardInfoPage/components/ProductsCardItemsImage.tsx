import styled from "styled-components";

const CardItemsImageContainer = styled.div`
    > img {
        width: 800px;
        height: 717px;
        border-radius: 30px;
        object-fit: cover;
    }

    @media (max-width: 1500px) {
        > img {
            width: 600px;
            height: 517px;
        }
    }
    @media (max-width: 1150px) {
        > img {
            width: 450px;
            height: 367px;
        }
    }
    @media (max-width: 850px) {
        > img {
            width: 363px;
            height: 363px;
        }
    }
    @media (max-width: 380px) {
        > img {
            width: 300px;
            height: 300px;
        }
    }
`

export function ProductsCardItemsImage() {
    return (
        <CardItemsImageContainer>
            <img src='/img/MainSolarPanelImg.png' alt=""/>
        </CardItemsImageContainer>
    );
}