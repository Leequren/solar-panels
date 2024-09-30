import React, {FC, SVGProps} from "react";
import styled from "styled-components";

interface IContactsProps {
    name: string;
    Icon: FC<SVGProps<SVGSVGElement>>;
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
    }
`

export const ContactsItem: React.FC<IContactsProps> = ({name, Icon}) => {
    return (
        <ContactsItemStyled>
            <Icon/>
            <h1>{name}</h1>
        </ContactsItemStyled>
    )
}