import styled from "styled-components";

interface ProductsCardItemProps {
    title: string,
    products: { description: string; iconUrl: string }[],
    price: number,
    path: string,
    imgUrl: string
}

const ProductsCardItemStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 30px 0;
    width: 765px;
    height: 782px;
    border: 1px solid #B3B3B3;
    border-radius: 30px;

    > img {
        height: 420px;
        width: 400px;
        object-fit: cover;
    }
`

const ProductsCardTitle = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding-top: 20px;

    > h1 {
        font-size: 35px;
        font-weight: 400;
    }

    > span {
        font-family: Jost, sans-serif;
        font-size: 35px;
        font-weight: 400;
        color: #48494B;
    }
`

const Rectangle = styled.div`
    height: 1px;
    width: 100%;
    margin: 15px 0;
    background: linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, #000000 49.5%, rgba(0, 0, 0, 0) 100%);
`

const Description = styled.div`
    display: grid;
    align-items: center;
    justify-content: center;
    grid-template-rows: repeat(4, auto);
    grid-template-columns: repeat(2, auto);
    grid-row-gap: 15px;
    width: 100%;
    margin-top: 5px;
    > div {
        display: flex;
        gap: 10px;
    }

    > div {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 10px;
        justify-content: flex-start;
        text-align: left;
        text-wrap: wrap;
        width: 352px;
        
        > li {
            list-style: none;
            font-size: 20px;
            font-weight: 300;
            line-height: 20px;
        }

        > img {
            max-height: 25px;
            max-width: 30px;
            border-radius: 15px;
        }
    }

`

const ButtonContainer = styled.div`
    display: flex;
    position: relative;
    top: 29px;
    flex-direction: row;
    gap: 10px;
    z-index: 3;

    > button {
        font-size: 20px;
        font-weight: 500;
        padding: 13px 35px 14px 34px;
        background-color: #DCDEDD;
        border: none;
        border-radius: 100px;
        
    }
`

const ButtonConfiguratorContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 8px;
    align-items: center;
    justify-content: center;
    padding: 12px 35px 13px;
    border-radius: 100px;
    background-color: black;
    color: white;
`

export function ProductsCardItem({title,  price, path, imgUrl, products}: ProductsCardItemProps) {
    return (
        <ProductsCardItemStyled>
            <img src={imgUrl} alt=""/>
            <ProductsCardTitle>
                <h1>{title}</h1>
                <span>от {price} ₽</span>
            </ProductsCardTitle>
            <Rectangle/>
            <Description>
                {products.map((product, index) => (
                    <div key={index}>
                        <img src={product.iconUrl} alt=""/>
                        <li>{product.description}</li>
                    </div>
                ))}
            </Description>
            <ButtonContainer>
                <button>Подробнее</button>
                <ButtonConfiguratorContainer>
                    <img src="/src/assets/img/GearWheel.svg" alt=""/>
                    конфигуратор
                </ButtonConfiguratorContainer>
            </ButtonContainer>
        </ProductsCardItemStyled>
    )
}