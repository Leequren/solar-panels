import styled from "styled-components";
import { ProductsCard } from "./ProductsCard";
import { FC } from "react";

interface ProductsProps {
  title: string;
  description: string;
}

const ProductsStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-left: 150px;
  padding-right: 150px;
  gap: 60px;
  padding-top: 160px;
`;

const ProductsTitleStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;

  > h1 {
    font-size: 60px;
    font-weight: 500;
  }

  > p {
    font-size: 26px;
    font-weight: 500;
    color: #48494b;
  }
`;

const ProductsCardContainerStyled = styled.div`
  display: flex;
  flex-direction: row;
  gap: 18px;
  width: 100%;
  overflow-y: hidden;
  overflow-x: auto;
  padding-bottom: 43px;

  &::-webkit-scrollbar {
    height: 11px;
  }

  &::-webkit-scrollbar-track {
    background: #dddddd;
    border-radius: 20px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #48494b;
    border-radius: 20px;
  }
`;

export const Products: FC<ProductsProps> = ({ title, description }) => {
  return (
    <ProductsStyled>
      <ProductsTitleStyled>
        <h1>{title}</h1>
        <p>{description}</p>
      </ProductsTitleStyled>
      <ProductsCardContainerStyled>
        <ProductsCard
          ImgUrl={"/img/ProductsCardImage1.png"}
          title={"Мощность подключаемых уст-в до 80 Вт."}
          description={
            "Два USB порта для быстрой зарядки смартфона, один универсальный настраиваемый разъём."
          }
          price={65000}
          path={"/products"}
        />
        <ProductsCard
          ImgUrl={"/img/ProductsCardImage2.png"}
          title={"Мощность подключаемых уст-в до 80 Вт."}
          description={
            "Два USB порта для быстрой зарядки смартфона, один универсальный настраиваемый разъём."
          }
          price={65000}
          path={"/products"}
        />
        <ProductsCard
          ImgUrl={"/img/ProductsCardImage3.png"}
          title={"Мощность подключаемых уст-в до 80 Вт."}
          description={
            "Два USB порта для быстрой зарядки смартфона, один универсальный настраиваемый разъём."
          }
          price={65000}
          path={"/products"}
        />
        <ProductsCard
          ImgUrl={"/img/ProductsCardImage3.png"}
          title={"Мощность подключаемых уст-в до 80 Вт."}
          description={
            "Два USB порта для быстрой зарядки смартфона, один универсальный настраиваемый разъём."
          }
          price={65000}
          path={"/products"}
        />
        <ProductsCard
          ImgUrl={"/img/ProductsCardImage3.png"}
          title={"Мощность подключаемых уст-в до 80 Вт."}
          description={
            "Два USB порта для быстрой зарядки смартфона, один универсальный настраиваемый разъём."
          }
          price={65000}
          path={"/products"}
        />
        <ProductsCard
          ImgUrl={"/img/ProductsCardImage3.png"}
          title={"Мощность подключаемых уст-в до 80 Вт."}
          description={
            "Два USB порта для быстрой зарядки смартфона, один универсальный настраиваемый разъём."
          }
          price={65000}
          path={"/products"}
        />
        <ProductsCard
          ImgUrl={"/img/ProductsCardImage3.png"}
          title={"Мощность подключаемых уст-в до 80 Вт."}
          description={
            "Два USB порта для быстрой зарядки смартфона, один универсальный настраиваемый разъём."
          }
          price={65000}
          path={"/products"}
        />
        <ProductsCard
          ImgUrl={"/img/ProductsCardImage3.png"}
          title={"Мощность подключаемых уст-в до 80 Вт."}
          description={
            "Два USB порта для быстрой зарядки смартфона, один универсальный настраиваемый разъём."
          }
          price={65000}
          path={"/products"}
        />
        <ProductsCard
          ImgUrl={"/img/ProductsCardImage3.png"}
          title={"Мощность подключаемых уст-в до 80 Вт."}
          description={
            "Два USB порта для быстрой зарядки смартфона, один универсальный настраиваемый разъём."
          }
          price={65000}
          path={"/products"}
        />
      </ProductsCardContainerStyled>
    </ProductsStyled>
  );
};
