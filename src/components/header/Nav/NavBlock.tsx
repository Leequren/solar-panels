import {NavItem} from "./NavItem.tsx";
import styled from "styled-components";
import React, {useState} from "react";
import {routes} from "@/const/routes.ts";
import BurgerMenuClose from "@/assets/img/BurgerMenuClose.svg?react"
import RemoveIcon from "@/assets/img/RemoveIcon.svg?react"

interface NavBlockProps {
    IsMobile: boolean;
}

const NavStyled = styled.div`
    display: flex;
    gap: 30px;
    @media (max-width: 1100px) {
        gap: 15px;
    }
`;

const NavStyledMobile = styled.div`
    display: flex;
    gap: 50px;
    align-items: center;
    @media (max-width: 600px) {
        gap: 15px;
    }
`;

const BurgerMenu = styled.div`
    display: flex;
    position: relative;
    justify-content: center;
    align-items: flex-start;
    padding: 10px;
    cursor: pointer;
`;

const BurgerMenuItem = styled.div`
    display: flex;
    position: absolute;
    top: 40px;
    right: -20px;
    left: auto;
    bottom: auto;
    flex-direction: column;
    padding: 15px;
    gap: 15px;
    align-items: flex-end;
    width: 140px;
    background-color: #2C2C2C;
    border-radius: 15px;
`

export const NavBlock: React.FC<NavBlockProps> = ({IsMobile}) => {
    const [isBurgerOpen, setIsBurgerOpen] = useState(false)

    const DesktopLayout = (<NavStyled>
        <NavItem name="Главная" path={routes.main}/>
        <NavItem name="О сервисе" path="#Additional"/>
        <NavItem name="Продукция" path={routes.products}/>
        <NavItem name="О нас" path="#AboutUs"/>
        <NavItem name="FAQ" path="#FAQ"/>
        <NavItem name="Контакты" path="#ContactsItem"/>
        <NavItem
            name="Каталог"
            path={routes.cart}
            counter={10}
            isCart
            imgUrl="/img/cartIcon.png"
        />
    </NavStyled>)
    const burgerBtn = !isBurgerOpen ? (<BurgerMenuClose width={22} height={13}/>) : (<RemoveIcon width={15} height={15} stroke={'black'}/>)
    const mobileLayout = (
        <NavStyledMobile>
                <NavItem
                    name="Каталог"
                    path={routes.cart}
                    counter={10}
                    isCart
                    imgUrl="/img/cartIcon.png"
                />
                <BurgerMenu onClick={() => setIsBurgerOpen(!isBurgerOpen)}>
                    {burgerBtn}
                    <BurgerMenuItem style={{display: isBurgerOpen ? "flex" : "none"}}>
                        <NavItem name="Главная" path={routes.main}/>
                        <NavItem name="О сервисе" path="#Additional"/>
                        <NavItem name="Продукция" path={routes.products}/>
                        <NavItem name="О нас" path="#AboutUs"/>
                        <NavItem name="FAQ" path="#FAQ"/>
                        <NavItem name="Контакты" path="#ContactsItem"/>
                    </BurgerMenuItem>
                </BurgerMenu>
        </NavStyledMobile>
    )

    return !IsMobile ? (
            DesktopLayout
        ) :
        (
            mobileLayout
        );
};
