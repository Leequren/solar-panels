import styled from "styled-components";

interface AccessoriesCardProps {
    title: string;
    price: number;
    imgUrl: string;
}

const AccessoriesCardStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 390px;
    margin-top: 30px;

    > img {
        width: 390px;
        height: 370px;
        object-fit: cover;
        border-radius: 30px;
    }

    > button {
        border-radius: 100px;
        box-shadow: 0 3px 2px 0 #00000040;
        font-size: 46px;
        border: none;
        width: 100%;
        color: black;
    }
`

const AccessoriesCardTitle = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

    > h1 {
        font-size: 26px;
        font-weight: 400;
    }

    > span {
        font-family: Jost, sans-serif;
        font-size: 28px;
    }
`

export function AccessoriesCard({title, price, imgUrl}: AccessoriesCardProps) {
    return (
        <AccessoriesCardStyled>
            <img src={imgUrl} alt=""/>
            <AccessoriesCardTitle>
                <h1>{title}</h1>
                <span>{price} ₽</span>
            </AccessoriesCardTitle>
            <button>+</button>
        </AccessoriesCardStyled>
    )
}