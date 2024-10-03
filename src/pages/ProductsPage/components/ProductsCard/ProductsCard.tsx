import styled from "styled-components";
import {ProductsCardItem} from "./ProductsCardItem.tsx";

const ProductsCardStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 80px;

    margin-top: 80px;
    @media (max-width: 800px) {
        margin-top: 40px;
        margin-bottom: 45px;
        gap: 45px;
    }
`;

const ProductsCardContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2, auto);
    align-items: center;
    justify-content: center;
    grid-row-gap: 40px;
    grid-column-gap: 20px;
    @media (max-width: 1580px) {
        grid-template-columns: repeat(1, auto);
    }

    @media (max-width: 400px) {
        padding: 5px 5px 0;
    }
`;

const products = [
    {description: 'Модуль быстрой зарядки для телефона', iconUrl: '/src/assets/img/ChargeBatteryIcon.svg'},
    {description: 'Модуль jump starter для автомобиля', iconUrl: '/src/assets/img/JumpStarterIcon.svg'},
    {description: 'Модуль инвертора 200 Вт', iconUrl: '/src/assets/img/InvertorIcon.svg'},
    {description: 'Модуль универсальный с регулируемым напряжением', iconUrl: '/src/assets/img/SpeedIcon.svg'},
    {description: 'Модуль зарядки свинцовых аккумуляторов 12В', iconUrl: '/src/assets/img/BatteryIcon.svg'},
    {description: 'Солнечная панель', iconUrl: '/src/assets/img/NoCO2Icon.svg'},
    {description: 'Модуль powerbank', iconUrl: '/src/assets/img/PowerBankIcon.svg'},
    {description: 'Установка с гелиотрекером', iconUrl: '/src/assets/img/GpsIcon.svg'}
];

export function ProductsCard() {
    return (
        <ProductsCardStyled>
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
    );
}