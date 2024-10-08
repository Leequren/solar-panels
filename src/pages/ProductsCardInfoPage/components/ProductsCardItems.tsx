import styled from "styled-components";
import { ProductsCardItemsImage } from "@/pages/ProductsCardInfoPage/components/ProductsCardItemsImage.tsx";
import { ProductsCardItemsCharacteristics } from "@/pages/ProductsCardInfoPage/components/ProductsCardItemsCharacteristics.tsx";
import { ProductsCardItemsDescription } from "@/pages/ProductsCardInfoPage/components/ProductsCardItemsDescription.tsx";

interface IProductsCardItemsProps {
  imgUrl: string;
  name: string;
  price: number;
  partConfigurations: Record<string, any>; // Объект с характеристиками товара
  description: string[];
}

const CardItemsStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 80px;
    @media (max-width: 850px) {
        gap: 40px;
    }
`;

const CardItemsWrapper = styled.div``;

const CardItemsContainer = styled.div`
    display: flex;
    gap: 50px;
    @media (max-width: 1150px) {
        gap: 30px;
    }
    @media (max-width: 850px) {
        flex-direction: column;
        gap: 10px;
    }
`;

const CardItemsCharacteristicsContainer = styled.div``;

const CardItemsDescriptionWrapper = styled.div``;

export function ProductsCardItems({
                                    imgUrl,
                                    name,
                                    price,
                                    partConfigurations,
                                    description,
                                  }: IProductsCardItemsProps) {
  return (
    <CardItemsStyled>
      <CardItemsWrapper>
        <CardItemsContainer>
          <ProductsCardItemsImage imgUrl={imgUrl} />
          <CardItemsCharacteristicsContainer>
            <ProductsCardItemsCharacteristics
              name={name}
              price={price}
              partConfigurations={partConfigurations}
            />
          </CardItemsCharacteristicsContainer>
        </CardItemsContainer>
      </CardItemsWrapper>
      <CardItemsDescriptionWrapper>
        <ProductsCardItemsDescription title={name} description={description} />
      </CardItemsDescriptionWrapper>
    </CardItemsStyled>
  );
}
