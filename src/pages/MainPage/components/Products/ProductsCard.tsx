import styled from "styled-components";

interface ProductsCardProps {
  ImgUrl: string;
  description: string;
  price: number;
  path: string;
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

  > p {
    font-family: Jost, sans-serif;
    padding-bottom: 10px;
    padding-top: 20px;
    font-size: 20px;
    font-weight: 400;
    color: #48494b;
    height: 100%;
  }

  > span {
    font-size: 26px;
    font-weight: 500;
    font-family: Jost, sans-serif;
    padding-bottom: 13px;
    color: #48494b;
    text-wrap: nowrap;
  }

  > a {
    background-color: black;
    border-radius: 100px;
    color: white;
    font-size: 26px;
    font-weight: 500;
    padding: 14px 33px;
    text-decoration: none;
  }

  @media (max-width: 1300px) {
    > img {
      height: 350px;
    }

    > p {
      font-size: 18px;
    }

    > span {
      font-size: 24px;
    }
    > button {
      font-size: 22px;
    }
  }
  @media (max-width: 850px) {
    > img {
      height: 200px;
    }

    > p {
      padding-top: 10px;
    }

    > span {
      font-size: 20px;
    }
    > button {
      font-size: 22px;
    }
  }
  @media (max-width: 500px) {
    > img {
      height: 150px;
    }

    > span {
      font-size: 16px;
    }
    > button {
      font-size: 16px;
      padding: 10px 25px;
    }
  }
`;

export function ProductsCard({
  description,
  price,
  ImgUrl,
  path,
}: ProductsCardProps) {
  return (
    <ProductsCardStyled>
      <img src={ImgUrl} alt="" />
      <p>{description}</p>
      <span>Цена: {price} рублей</span>
      <a href={path}>Подробнее</a>
    </ProductsCardStyled>
  );
}
