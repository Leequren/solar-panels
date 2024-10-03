import React, {FC, SVGProps} from "react";
import styled from "styled-components";

interface IContactsProps {
    name: string,
    Icon?: FC<SVGProps<SVGSVGElement>>
}

const ContactsItemStyled = styled.div`
    display: flex;
    flex-direction: row;
    gap: 21px;
    align-items: center;
    

    > h1 {
        font-family: Jost, sans-serif;
        font-size: 26px;
        font-weight: 400;
        text-wrap: wrap;
        width: 628px;
        @media (max-width: 1700px) {
            width: 500px;
        }
        @media (max-width: 1300px) {
            width: 400px;
            font-size: 22px;
        }
        @media (max-width: 1149px) {
            width: 100%;
            text-align: center;
        }
        @media (max-width: 600px) {
            font-size: 18px;
        }
        @media (max-width: 500px) {
            font-size: 16px;
        }
    }
`

export const ContactsItem: React.FC<IContactsProps> = ({ name, Icon }) => {
    return (
        <ContactsItemStyled>
            {Icon && <Icon />}
            <h1>{name}</h1>
        </ContactsItemStyled>
    );
};