import {AccessoriesCard} from "./AccessoriesCard.tsx";
import styled from "styled-components";
import {usePartsStore} from "@/store/partsStore.ts";
import {useEffect} from "react";

const AccessoriesStyled = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
    margin-top: 50px;
    @media (max-width: 500px) {
        margin-top: 15px;
        gap: 10px;
    }
`;

export function Accessories() {

  const partsStore = usePartsStore();

  useEffect(() => {
    partsStore.fetch();
    console.log(partsStore.parts)
  }, []);

  return (
    <AccessoriesStyled>
      {partsStore.parts.map((part) => (
        <AccessoriesCard
          key={part.id}
          id={part.id}
          title={part.name}
          price={part.defaultPrice}
          imgUrl={'/img/MainSolarPanelImg.png'}
        />
      ))
      }
    </AccessoriesStyled>
  )
}