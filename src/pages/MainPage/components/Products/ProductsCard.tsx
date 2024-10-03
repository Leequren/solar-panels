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
    align-items: flex-start;
    max-width: 580px;
    > img {
        height: 435px;
        border-radius: 15px;
        object-fit: cover;
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
        height: 100%;
    }

    > span {
        font-size: 26px;
        font-weight: 500;
        font-family: Jost, sans-serif;
        padding-bottom: 13px;
        color: #48494B;
        text-wrap: nowrap;
    }

    > button {
        background-color: black;
        border-radius: 100px;
        color: white;
        font-size: 26px;
        font-weight: 500;
        padding: 14px 33px;
    }

    @media (max-width: 1300px) {
        > img {
            height: 350px;
        }

        > h1 {
            font-size: 18px;
        }

        > p {
            font-size: 18px;
        }

        > span {
            font-size: 24px;
        }
        >button{
            font-size: 22px;
        }
    }
    @media (max-width: 850px) {
        > img {
            height: 200px;
        }

        > h1 {
            font-size: 16px;
        }

        > p {
            display: none;
        }

        > span {
            font-size: 20px;
        }
        >button{
            font-size: 22px;
        }
    }
    @media (max-width: 500px) {
        > img {
            height: 150px;
        }

        > h1 {
            font-size: 13px;
        }

        > span {
            font-size: 16px;
            
        }
        >button{
            font-size: 16px;
            padding: 10px 25px;
        }
    }
`;

export function ProductsCard({title, description, price, path, ImgUrl}: ProductsCardProps) {
    return (
        <ProductsCardStyled>
            <img src={ImgUrl} alt=''/>
            <h1>{title}</h1>
            <p>{description}</p>
            <span>Цена: {price} рублей</span>
            <button>Подробнее</button>
        </ProductsCardStyled>
    );
}