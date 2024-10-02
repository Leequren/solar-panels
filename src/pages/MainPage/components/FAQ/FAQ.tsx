import styled from "styled-components";
import {FAQs} from "@/pages/MainPage/components/FAQ/FAQs.tsx";
import React from "react";

interface FAQProps {
    title: string,
    description: string
}

const FAQsStyled = styled.div`
    padding: 160px 150px;
`;

const FAQTitle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
    padding-bottom: 55px;


    > h1 {
        font-size: 60px;
        font-weight: 500;
    }

    > p {
        font-size: 26px;
        font-weight: 500;
        color: #48494B;
    }
`;

const FAQss = [

    {
        question: 'Как рассчитать стоимость?', answer: 'Рассчитать стоимость можно в корзине, после выбора интересующей продукции в разделе “Каталог”'
    },
    {
        question: 'Как рассчитать стоимость?', answer: 'Рассчитать стоимость можно в корзине, после выбора интересующей продукции в разделе “Каталог”'
    },
    {
        question: 'Как рассчитать стоимость?', answer: 'Рассчитать стоимость можно в корзине, после выбора интересующей продукции в разделе “Каталог”'
    },
    {
        question: 'Как рассчитать стоимость?', answer: 'Рассчитать стоимость можно в корзине, после выбора интересующей продукции в разделе “Каталог”'
    },
    {
        question: 'Как рассчитать стоимость?', answer: 'Рассчитать стоимость можно в корзине, после выбора интересующей продукции в разделе “Каталог”'
    },

];

export const FAQ: React.FC<FAQProps> = ({title, description}: FAQProps) => {
    return (
        <FAQsStyled>
            <FAQTitle>
                <h1>{title}</h1>
                <p>{description}</p>
            </FAQTitle>
            <FAQs FAQs={FAQss}/>
        </FAQsStyled>

    );
};