import {MainButton} from "./MainButton";
import styled from "styled-components";

const MainInfoStyled = styled.div`
    display: flex;
    flex-direction: row;
    gap: 120px;
`

const Column = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    justify-content: center;
`

export function MainInfo() {
    return (
        <MainInfoStyled>
            <Column>
                <MainButton name={'Главная'} path={'#Home'}/>
                <MainButton name={'О сервисе'} path={'#Advantages'}/>
                <MainButton name={'Продукция'} path={'#Products'}/>
                <MainButton name={'О нас'} path={'#AboutUs'}/>

            </Column>
            <Column>
                <MainButton name={'FAQ'} path={'#FAQ'}/>
                <MainButton name={'Контакты'} path={'#Contacts'}/>
                <MainButton name={'Каталог'} path={'#Catalog'}/>
                <MainButton name={'Корзина'} path={'#Cart'}/>
            </Column>
        </MainInfoStyled>
    )
}