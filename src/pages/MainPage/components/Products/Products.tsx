import styled from "styled-components";
import {ProductsCard} from "./ProductsCard";
import {FC, useEffect} from "react";
import {usePreviewCatalogStore} from "@/store/previewCatalogStore.ts";

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
    margin-top: 160px;
    @media (max-width: 1300px) {
        padding-left: 50px;
        padding-right: 50px;
    }
    @media (max-width: 850px) {
        padding-left: 15px;
        padding-right: 15px;
        margin-top: 100px;
    }
    @media (max-width: 500px) {
        padding-left: 15px;
        padding-right: 15px;
        margin-top: 50px;
    }
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

    @media (max-width: 1300px) {
        > h1 {
            font-size: 40px;
        }

        > p {
            font-size: 18px;
        }
    }
    @media (max-width: 500px) {
        > h1 {
            font-size: 20px;
        }

        > p {
            font-size: 13px;
        }
    }
`;
const ProductsCardContainerWrapperStyled = styled.div`
    display: flex;
    justify-content: center;
    overflow-y: hidden;
    max-width: 100%;
`
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

    @media (max-width: 500px) {
        padding-bottom: 30px;
    }
`;

export const Products: FC<ProductsProps> = ({title, description}) => {

  const previewCatalogStore = usePreviewCatalogStore();

  useEffect(() => {
    previewCatalogStore.fetch();
    console.log(previewCatalogStore.previewCatalog);
  }, []);

  return (
    <ProductsStyled>
      <ProductsTitleStyled>
        <h1>{title}</h1>
        <p>{description}</p>
      </ProductsTitleStyled>
      <ProductsCardContainerWrapperStyled>
        <ProductsCardContainerStyled>
          {/* Делаем map по previewCatalogStore.previewCatalog */}
          {previewCatalogStore.previewCatalog.map((product) => (
            <ProductsCard
              key={product.id} // Используем уникальный id для ключа
              ImgUrl={'/img/ProductsCardImage1.png'} // URL изображения
              description={product.description} // Описание
              price={product.defaultPrice} // Цена
              path={product.path} // Путь для кнопки
            />
          ))}
        </ProductsCardContainerStyled>
      </ProductsCardContainerWrapperStyled>
    </ProductsStyled>
  );
};
