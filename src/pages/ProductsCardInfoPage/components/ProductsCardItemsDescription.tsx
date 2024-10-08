import styled from "styled-components";

interface IProductsCardItemsDescriptionProps {
  title: string,
  description: string[]
}

const CardItemsDescriptionContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    max-width: 1500px;
    @media (max-width: 1500px) {
        max-width: 1150px;
    }
    @media (max-width: 1150px) {
        max-width: 800px;
    }
    @media (max-width: 850px) {
        max-width: 300px;
        gap: 15px;
    }
`
const CardItemsDescriptionTitle = styled.div`
    > span {
        font-size: 26px;
        border-bottom: 2px solid black;
    }

    @media (max-width: 1150px) {
        > span {
            font-size: 22px;
        }
    }
    @media (max-width: 850px) {
        > span {
            font-size: 13px;
        }
    }
`
const CardItemsDescriptionText = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`
const CardItemsDescriptionTextTitle = styled.div`
    padding-left: 30px;
    font-size: 26px;

    > span {
        font-family: Jost, sans-serif;
        line-height: 15px;
    }

    @media (max-width: 1150px) {
        font-size: 20px;
    }

    @media (max-width: 850px) {
        font-size: 13px;
        padding: 0;
    }
`
const CardItemsDescriptionTextDescription = styled.div`
    font-size: 26px;
    padding-left: 70px;

    > ul {
        display: flex;
        flex-direction: column;
        gap: 5px;

        > li {
            font-family: Jost, sans-serif;

        }

        @media (max-width: 1150px) {
            font-size: 20px;
        }
        @media (max-width: 850px) {
            font-size: 13px;
            gap: 2px;
            > li {
                line-height: 15px;
            }
        }
    }

    @media (max-width: 850px) {
        padding-left: 30px;
    }
`

export function ProductsCardItemsDescription({title, description}: IProductsCardItemsDescriptionProps) {

  return (
    <CardItemsDescriptionContainer>
      <CardItemsDescriptionTitle>
        <span>Описание</span>
      </CardItemsDescriptionTitle>
      <CardItemsDescriptionText>
        <CardItemsDescriptionTextTitle>
          <span>{title}</span>
        </CardItemsDescriptionTextTitle>
        <CardItemsDescriptionTextDescription>
          <ul>
            {description.map((item, index) => <li key={index}>{item}</li>)}
          </ul>
        </CardItemsDescriptionTextDescription>
      </CardItemsDescriptionText>
    </CardItemsDescriptionContainer>
  )
}