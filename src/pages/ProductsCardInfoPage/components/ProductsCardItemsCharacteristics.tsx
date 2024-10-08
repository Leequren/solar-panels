import styled from "styled-components";
import Plus from '../../../assets/img/Plus.svg?react'
import Minus from '../../../assets/img/Minus.svg?react'

interface IProductsCardItemsCharacteristicsProps {
  name: string;
  price: number;
  partConfigurations: Record<string, Record<string, { price: number; valueConfig: string; partId: number | null }>>;
}

const CardItemsCharacteristicsStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 50px;
    margin-top: 20px;
    @media (max-width: 1150px) {
        gap: 30px;
    }
    @media (max-width: 850px) {
        gap: 10px;
        margin-top: 0;
    }
`

const CharacteristicsTitle = styled.div`
    > span {
        font-size: 35px;
        font-weight: 400;
    }

    @media (max-width: 1150px) {

        > span {
            font-size: 30px;
            font-weight: 400;
        }
    }
    @media (max-width: 1150px) {

        > span {
            font-size: 16px;
            font-weight: 400;
        }
    }
`

const CharacteristicsItemWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px;
    @media (max-width: 1150px) {
        gap: 10px;
    }
    @media (max-width: 850px) {
        gap: 25px;
    }
`

const CharacteristicsItemContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 70px;
    @media (max-width: 1150px) {
        gap: 20px;
    }
    @media (max-width: 850px) {
        flex-direction: column-reverse;
        gap: 10px;
    }
`

const CharacteristicsItemButtonContainer = styled.div`
    display: flex;
    gap: 20px;
    width: 100%;
`

const AddToCartButton = styled.button`
    border: none;
    background-color: black;
    color: white;
    border-radius: 46px;
    padding: 15px 45px;
    font-size: 26px;
    @media (max-width: 1150px) {
        padding: 10px 30px;
        font-size: 20px;
    }
    @media (max-width: 850px) {
        padding: 10px 30px;
        width: 100%;
        font-size: 15px;
    }
`

const AddToCartCounterButton = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 40px;
    border: 1px solid black;
    border-radius: 1000px;
    max-height: 60px;

    > button {
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        background-color: transparent;
        cursor: pointer;
        height: 60px;
        width: 60px;
    }

    > span {
        font-family: Jost, sans-serif;
        font-size: 25px;
    }

    @media (max-width: 1150px) {
        gap: 41px;
        > button {
            width: 30px;
            height: 30px;
            padding-left: 10px;
            padding-right: 10px;
        }

        > span {
            font-size: 20px;
        }
    }
`

const CharacteristicsVariations = styled.div`
    display: flex;
    flex-direction: column;
    gap: 25px;
    @media (max-width: 850px) {
        gap: 10px;
    }
`

const CharacteristicsVariationsTitle = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;

    .title {
        font-size: 26px;
        font-weight: 400;
        color: #8a8a8a;
    }

    .value {
        font-family: Jost, sans-serif;
        font-size: 26px;
        font-weight: 400;
    }

    @media (max-width: 1150px) {
        .title {
            font-size: 22px;
            font-weight: 400;
        }

        .value {
            font-size: 20px;
            font-weight: 400;
        }

    }
    @media (max-width: 850px) {
        .title {
            font-size: 15px;
            font-weight: 400;
            color: black;
        }

        .value {
            display: none;
        }

    }
`

const CharacteristicsVariationsContainer = styled.div`
    display: flex;
    gap: 10px;

    > span {
        padding: 1px 31px;
        border-radius: 1000px;
        background-color: #D9D9D9;
        font-family: Jost, sans-serif;
        font-size: 26px;
    }

    @media (max-width: 1150px) {
        > span {
            padding: 3px 20px;
            font-size: 16px;
        }
    }
    @media (max-width: 850px) {
        > span {
            padding: 3px 21px;
            font-size: 13px;
        }
    }
`

const CharacteristicsPrice = styled.div`
    > span {
        font-family: Jost, sans-serif;
        font-size: 60px;
    }

    @media (max-width: 1150px) {
        > span {
            font-size: 45px;
        }
    }
    @media (max-width: 850px) {
        > span {
            font-size: 16px;
        }
    }
`

export function ProductsCardItemsCharacteristics({
                                                   name,
                                                   price,
                                                   partConfigurations
                                                 }: IProductsCardItemsCharacteristicsProps) {

  const hasConfigurations = Object.keys(partConfigurations).length > 0;

  return (
    <CardItemsCharacteristicsStyled>
      <CharacteristicsTitle>
        <span>{name}</span>
      </CharacteristicsTitle>

      <CharacteristicsItemWrapper>
        <CharacteristicsItemContainer>
          {hasConfigurations && Object.entries(partConfigurations).map(([configName, configOptions]) => (
            <CharacteristicsVariations key={configName}>
              <CharacteristicsVariationsTitle>
                <span className='title'>Количество {configName}-портов: </span>
              </CharacteristicsVariationsTitle>
              <CharacteristicsVariationsContainer>
                {Object.entries(configOptions).map(([idConfig, option]) => (
                  <span key={idConfig}>{option.valueConfig}</span>
                ))}
              </CharacteristicsVariationsContainer>
            </CharacteristicsVariations>
          ))}
          <CharacteristicsPrice>
            <span>{price} ₽</span>
          </CharacteristicsPrice>
        </CharacteristicsItemContainer>
        <CharacteristicsItemButtonContainer>
          <AddToCartButton>В корзину</AddToCartButton>
          {/*<AddToCartCounterButton>*/}
          {/*    <button>*/}
          {/*        <Minus/>*/}
          {/*    </button>*/}
          {/*    <span>1</span>*/}
          {/*    <button>*/}
          {/*        <Plus/>*/}
          {/*    </button>*/}
          {/*</AddToCartCounterButton>*/}
        </CharacteristicsItemButtonContainer>
      </CharacteristicsItemWrapper>
    </CardItemsCharacteristicsStyled>
  );
}