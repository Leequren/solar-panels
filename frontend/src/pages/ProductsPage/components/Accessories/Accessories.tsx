import {AccessoriesCard} from "./AccessoriesCard.tsx";
import styled from "styled-components";

const AccessoriesStyled = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-left: 150px;
    padding-right: 150px;
    gap: 20px;
    flex-wrap: wrap;
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