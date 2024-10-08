import { routes } from "@/const/routes";
import styled from "styled-components";

interface ProductsCardItemProps {
  title: string;
  products: { description: string; iconUrl: string }[];
  price: number;
  path: string;
  imgUrl: string;
}

const ProductsCardItemStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px 30px 0;
    max-width: 765px;
    border: 1px solid #b3b3b3;
    border-radius: 30px;

    > img {
        height: 420px;
        width: 400px;
        object-fit: cover;
        border-radius: 15px;
    }
    
    @media (max-width: 500px) {
        padding: 5px 5px 0;

        > img {
            height: 338px;
            width: 323px;
        }
    }
    
    @media (max-width: 395px) {
        > img {
            height: 308px;
            width: 293px;
        }
        
    }
`;

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
        color: #48494b;
    }

    @media (max-width: 840px) {
        > h1 {
            font-size: 16px;
            color: black;
        }

        > span {
            font-size: 16px;
            color: black;
        }
    }
`;

const Rectangle = styled.div`
  height: 1px;
  width: 100%;
  margin: 15px 0;
  background: linear-gradient(
    90deg,
    rgba(0, 0, 0, 0) 0%,
    #000000 49.5%,
    rgba(0, 0, 0, 0) 100%
  );
`;

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
        flex-direction: row;
        align-items: center;
        gap: 10px;
        justify-content: flex-start;
        text-align: left;
        text-wrap: wrap;

        > li {
            list-style: none;
            font-size: 20px;
            font-weight: 300;
            line-height: 20px;
            @media (max-width: 840px) {
                font-size: 13px;
            }
        }

        > img {
            max-height: 25px;
            width: 30px;
            border-radius: 15px;
        }

        @media (max-width: 500px) {
            > img {
                max-height: 15px;
                max-width: 20px;
            }
        }
    }

    @media (max-width: 820px) {
        grid-template-rows: repeat(8, auto);
        grid-template-columns: repeat(1, auto);
    }
`;

const ButtonContainer = styled.div`
  display: flex;
  position: relative;
  top: 26px;
  flex-direction: row;
  gap: 10px;
  z-index: 3;

  > button {
    font-size: 20px;
    font-weight: 500;
    padding: 13px 35px 14px 34px;
    background-color: #dcdedd;
    border: none;
    border-radius: 100px;
  }
    
    @media (max-width: 840px) {
        > button {
            font-size: 16px;
        }
    }
`;

const ButtonConfiguratorContainer = styled.a`
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
  justify-content: center;
  padding: 12px 35px 13px;
  border-radius: 100px;
  background-color: black;
  color: white;
  text-decoration: none;
    @media (max-width: 840px) {
        padding: 11px 15px;
        > span {
            display: none;
        }
    }
`;

export function ProductsCardItem({
  title,
  price,
  path,
  imgUrl,
  products,
}: ProductsCardItemProps) {
  return (
    <ProductsCardItemStyled>
      <img src={imgUrl} alt="" />
      <ProductsCardTitle>
        <h1>{title}</h1>
        <span>от {price} ₽</span>
      </ProductsCardTitle>
      <Rectangle />
      <Description>
        {products.map((product, index) => (
          <div key={index}>
            <img src={product.iconUrl} alt="" />
            <li>{product.description}</li>
          </div>
        ))}
      </Description>
      <ButtonContainer>
        <button>Подробнее</button>
        <ButtonConfiguratorContainer href={routes.configurator}>
          <img src="/src/assets/img/GearWheel.svg" alt="" />
          <span>конфигуратор</span>
        </ButtonConfiguratorContainer>
      </ButtonContainer>
    </ProductsCardItemStyled>
  );
}
