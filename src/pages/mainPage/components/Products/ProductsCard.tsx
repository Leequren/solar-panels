import styled from "styled-components";

interface ProductsCardProps {
    ImgUrl: string,
    title: string,
    description: string,
    price: number,
    path: string
}

const ProductsCardStyled = styled.div`
    display: flex;
    flex-direction: column;
    max-height: 658px;
    max-width: 560px;

    > img {
        height: 435px;
        border-radius: 15px;
    }

    > h1 {
        font-family: Jost, sans-serif;
        padding-top: 20px;
        padding-bottom: 7px;
        font-size: 20px;
        font-weight: 400;
        color: #48494B;
    }

    > p {
        font-family: Jost, sans-serif;
        padding-bottom: 10px;
        font-size: 20px;
        font-weight: 400;
        color: #48494B;
    }

    > span {
        font-size: 26px;
        font-weight: 500;
        font-family: Jost, sans-serif;
        padding-bottom: 13px;
    }

    > button {
        background-color: black;
        border-radius: 100px;
        color: white;
        font-size: 26px;
        font-weight: 500;
        padding: 14px 33px;
        width: 210px;
        height: 60px;
    }
`

export function ProductsCard({title, description, price, path, ImgUrl}: ProductsCardProps) {
    return (
        <ProductsCardStyled>
            <img src={ImgUrl} alt=''/>
            <h1>{title}</h1>
            <p>{description}</p>
            <span>Цена: {price} рублей</span>
            <button>Подробнее</button>
        </ProductsCardStyled>
    )
}