import { ProductsCardItems } from "@/pages/ProductsCardInfoPage/components/ProductsCardItems.tsx";
import { useProductInfoStore } from "@/store/productInfoStore";
import { useEffect } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import styled from "styled-components";

const CardItemStyled = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  margin-top: 120px;

  @media (max-width: 850px) {
    margin-top: 25px;
  }
`;

interface ISearchParams {
  id: number;
}

export function ProductsCardInfoPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const params: ISearchParams = {
    id: Number(searchParams.get("id")) || 0,
  };
  const { productInfo, fetch } = useProductInfoStore();

  useEffect(() => {
    fetch(params.id);
  }, [params.id]);
  console.log(productInfo);
  return (
    <CardItemStyled>
      <ProductsCardItems />
    </CardItemStyled>
  );
}
