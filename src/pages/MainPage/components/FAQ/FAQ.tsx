import styled from "styled-components";

interface FAQProps {
    title: string,
    description: string
}

const FAQTitle = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;

    > h1 {
        font-size: 60px;
        font-weight: 500;
    }

    > p {
        font-size: 26px;
        font-weight: 500;
        color: #48494B;
    }
`

export function FAQ({title, description}: FAQProps) {
    return (
        <FAQTitle>
            <h1>{title}</h1>
            <p>{description}</p>
        </FAQTitle>
    )
}