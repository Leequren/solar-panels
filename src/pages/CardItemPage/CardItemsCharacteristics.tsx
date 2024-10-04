import styled from "styled-components";

interface CardItemsCharacteristicsProps {
    title: string;
    price: number
}

const CharacteristicsTitle = styled.div`

`

const CharacteristicsItemWrapper = styled.div`

`

const CharacteristicsItemContainer = styled.div`

`

const CharacteristicsItemButtonContainer = styled.div`

`

const CharacteristicsVariations = styled.div`

`

const CharacteristicsVariationsContainer = styled.div`

`

const CharacteristicsPrice = styled.div`

`

export function CardItemsCharacteristics({title, price}: CardItemsCharacteristicsProps) {

    return (
        <div>
            <CharacteristicsTitle>
                <span>{title}</span>
            </CharacteristicsTitle>

            <CharacteristicsItemWrapper>
                <CharacteristicsItemContainer>
                    <CharacteristicsVariations>
                        <span>Количество USB-портов: 2</span>
                        <CharacteristicsVariationsContainer>
                            <span>1</span>
                            <span>2</span>
                            <span>3</span>
                        </CharacteristicsVariationsContainer>
                    </CharacteristicsVariations>
                    <CharacteristicsPrice>
                        <span>{price}</span>
                    </CharacteristicsPrice>
                </CharacteristicsItemContainer>
                <CharacteristicsItemButtonContainer>
                    <button>В корзину</button>
                    <button>
                        <span>-</span>
                        <span>1</span>
                        <span>+</span>
                    </button>
                </CharacteristicsItemButtonContainer>
            </CharacteristicsItemWrapper>
        </div>
    )
}