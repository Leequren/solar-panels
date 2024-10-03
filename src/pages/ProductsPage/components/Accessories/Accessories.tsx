import {AccessoriesCard} from "./AccessoriesCard.tsx";
import styled from "styled-components";

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
`

export function Accessories() {
    return(
        <AccessoriesStyled>
            <AccessoriesCard title={'Модуль быстрой зарядки для телефона\n'} price={10000} imgUrl={'/img/MainSolarPanelImg.png'} />
            <AccessoriesCard title={'Модуль быстрой зарядки для телефона\n'} price={10000} imgUrl={'/img/MainSolarPanelImg.png'} />
            <AccessoriesCard title={'Модуль быстрой зарядки для телефона\n'} price={10000} imgUrl={'/img/MainSolarPanelImg.png'} />
            <AccessoriesCard title={'Модуль быстрой зарядки для телефона\n'} price={10000} imgUrl={'/img/MainSolarPanelImg.png'} />
            <AccessoriesCard title={'Модуль быстрой зарядки для телефона\n'} price={10000} imgUrl={'/img/MainSolarPanelImg.png'} />
            <AccessoriesCard title={'Модуль быстрой зарядки для телефона\n'} price={10000} imgUrl={'/img/MainSolarPanelImg.png'} />
            <AccessoriesCard title={'Модуль быстрой зарядки для телефона\n'} price={10000} imgUrl={'/img/MainSolarPanelImg.png'} />
            <AccessoriesCard title={'Модуль быстрой зарядки для телефона\n'} price={10000} imgUrl={'/img/MainSolarPanelImg.png'} />
            <AccessoriesCard title={'Модуль быстрой зарядки для телефона\n'} price={10000} imgUrl={'/img/MainSolarPanelImg.png'} />
            <AccessoriesCard title={'Модуль быстрой зарядки для телефона\n'} price={10000} imgUrl={'/img/MainSolarPanelImg.png'} />
            <AccessoriesCard title={'Модуль быстрой зарядки для телефона\n'} price={10000} imgUrl={'/img/MainSolarPanelImg.png'} />
        </AccessoriesStyled>
    )
}