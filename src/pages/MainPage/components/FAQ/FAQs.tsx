import { FC, useState } from "react";
import styled from "styled-components";
import CloseArrow from "../../../../assets/img/CloseIcon.svg?react";
import OpenArrow from "../../../../assets/img/OpenIcon.svg?react";

interface FAQsProps {
    FAQs: { question: string; answer: string }[];
}

const FAQsStyled = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 50px;
    padding-right: 50px;
    border-top: 3px solid black;
    cursor: pointer;

    > div {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 15px 0;

        > svg {
            width: 35px;
            height: 15px;
        }
    }

    h1 {
        font-size: 26px;
        font-weight: 500;
        margin: 0;
    }

    p {
        font-size: 26px;
        font-weight: 300;
        color: #666;
        padding-left: 20px;
        padding-bottom: 27px;
        padding-right: 40px;
    }

    @media (max-width: 800px) {
        border-top: 2px solid black;
        padding-left: 20px;
        padding-right: 20px;

        h1 {
            font-size: 16px;
        }

        p {
            font-size: 16px;
            padding-bottom: 15px;
            padding-left: 10px;
        }

        > div > svg {
            width: 25px;
            height: 10px;
        }
    }  
    @media (max-width: 500px) {

        border-top: 1px solid black;
        padding-left: 20px;
        padding-right: 20px;

        h1 {
            font-size: 13px;
        }

        p {
            font-size: 13px;
            padding-bottom: 15px;
            padding-left: 10px;
        }

        > div > svg {
            width: 16px;
            height: 7px;
        }
    }
`;

export const FAQs: FC<FAQsProps> = ({ FAQs }) => {
    const [openIndexes, setOpenIndexes] = useState<number[]>([]);

    const toggleFAQ = (index: number) => {
        if (openIndexes.includes(index)) {
            setOpenIndexes(openIndexes.filter((i) => i !== index))
        } else {
            setOpenIndexes([...openIndexes, index])
        }
    };

    return (
        <div>
            {FAQs.map((faq, index) => (
                <FAQsStyled key={index} onClick={() => toggleFAQ(index)}>
                    <div>
                        <h1>{faq.question}</h1>
                        {openIndexes.includes(index) ? (
                            <CloseArrow stroke={"black"} />
                        ) : (
                            <OpenArrow stroke={"black"} />
                        )}
                    </div>
                    {openIndexes.includes(index) && <p>{faq.answer}</p>}
                </FAQsStyled>
            ))}
        </div>
    );
};
