import {CartProductsItem} from "@/pages/CartPage/components/CartProductsItem.tsx";
import styled from "styled-components";

const CartProductsStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export function CartProducts() {
    return (
        <CartProductsStyled>
            <CartProductsItem count={1} title={'Модуль быстрой зарядки телефона'} price={17000}
                              imgUrl={'/img/MainSolarPanelImg.png'} titleCharacteristics={'Количество USB-портов'}
                              valueCharacteristics={'2'} type={'W'}/>
            <CartProductsItem count={1} title={'Модуль быстрой зарядки телефона'} price={17000}
                              imgUrl={'/img/MainSolarPanelImg.png'} titleCharacteristics={'Количество USB-портов'}
                              valueCharacteristics={'2'} type={'S'}/>
            <CartProductsItem count={1} title={'Модуль быстрой зарядки телефона'} price={17000}
                              imgUrl={'/img/MainSolarPanelImg.png'} titleCharacteristics={'Количество USB-портов'}
                              valueCharacteristics={'2'} type={'P'}/>
        </CartProductsStyled>
    )
}