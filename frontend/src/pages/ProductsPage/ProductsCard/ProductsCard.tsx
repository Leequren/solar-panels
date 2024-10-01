import styled from "styled-components";
import {ProductsCardItem} from "./ProductsCardItem.tsx";

const ProductsCardStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 80px;
    padding-top: 150px;
    padding-bottom: 200px;
`

const ButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 75px;
    height: 70px;
    width: 648px;
    border-radius: 100px;
    border: 1px solid black;
`

const Button1 = styled.button`
    font-size: 30px;
    font-weight: 500;
    background: transparent;
    border: none;
`

const Button2 = styled.button`
    font-size: 30px;
    font-weight: 500;
    background: transparent;
    border: none;
`

const ProductsCardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, auto);
    align-items: center;
    justify-content: center;
    grid-row-gap: 40px;
    grid-column-gap: 20px;
    //flex-wrap: wrap;
`

const products = [
    {description: 'Модуль быстрой зарядки для телефона', iconUrl: '/src/assets/img/ChargeBatteryIcon.svg'},
    {description: 'Модуль jump starter для автомобиля', iconUrl: '/src/assets/img/JumpStarterIcon.svg'},
    {description: 'Модуль инвертора 200 Вт', iconUrl: '/src/assets/img/InvertorIcon.svg'},
    {description: 'Модуль универсальный с регулируемым напряжением', iconUrl: '/src/assets/img/SpeedIcon.svg'},
    {description: 'Модуль зарядки свинцовых аккумуляторов 12В', iconUrl: '/src/assets/img/BatteryIcon.svg'},
    {description: 'Солнечная панель', iconUrl: '/src/assets/img/NoCO2Icon.svg'},
    {description: 'Модуль powerbank', iconUrl: '/src/assets/img/PowerBankIcon.svg'},
    {description: 'Установка с гелиотрекером', iconUrl: '/src/assets/img/GpsIcon.svg'}
]

export function ProductsCard() {
    return (
        <ProductsCardStyled>
            <ButtonContainer>
                <Button1>Готовые сборки</Button1>
                <Button2>Комплектующие</Button2>
            </ButtonContainer>
            <ProductsCardContainer>
                <ProductsCardItem title={'Походная версия'}
                                  products={products}
                                  price={65000} imgUrl={'/img/MainSolarPanelImg.png'} path={'/'}/>
                <ProductsCardItem title={'Походная версия'}
                                  products={products}
                                  price={65000} imgUrl={'/img/MainSolarPanelImg.png'} path={'/'}/>
                <ProductsCardItem title={'Походная версия'}
                                  products={products}
                                  price={65000} imgUrl={'/img/MainSolarPanelImg.png'} path={'/'}/>

            </ProductsCardContainer>
        </ProductsCardStyled>
    )
}