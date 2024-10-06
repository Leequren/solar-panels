import styled from "styled-components";

interface AdvantageCardProps {
    title: string;
    description: string[];
    bgImage: string;
}

const AdvantagesCardStyled = styled.div<Partial<AdvantageCardProps>>`
    display: flex;
    flex-direction: column;
    gap: 20px;
    max-height: 256px;
    width: 790px;
    box-shadow: 0 0 20px 0 #0000001c;
    border-radius: 10px;
    padding: 36px 0 30px 60px;
    background: url(${props => props.bgImage}) no-repeat bottom right 83px;

    > h1 {
        font-size: 30px;
        font-weight: 500;
    }

    @media (max-width: 1650px) {
        padding-right: 0;
        max-width: 700px;
        background-size: auto 200px;
    }
    @media (max-width: 1500px) {
        max-width: 550px;
        height: 220px;
        background-size: auto 180px;
    }
    @media (max-width: 1200px) {
        max-width: 750px;
        height: 250px;
    }
    @media (max-width: 850px) {
        background-size: auto 160px;
        max-width: 650px;
        height: 200px;
        gap: 10px;
        padding-top: 25px;
    }
    @media (max-width: 700px) {
        height: 170px;
        max-width: 450px;
        background: url(${props => props.bgImage}) no-repeat bottom right 39px;
        background-size: auto 130px;
        > h1 {
            font-size: 23px;
        }
    }
    @media (max-width: 500px) {
        max-height: 118px;
        max-width: 363px;
        background-size: auto 100px;
        padding-top: 16px;
        padding-left: 40px;
        > h1 {
            font-size: 16px;
            max-width: 250px;
        }
    }

`;

const AdvantagesCardUlStyled = styled.ul`
    display: flex;
    flex-direction: column;
    gap: 10px;

    > li {
        font-family: Jost, sans-serif;
        font-size: 30px;
        font-weight: 300;
        padding-left: 15px;
    }

    @media (max-width: 1500px) {
        > li {
            font-size: 20px;
        }
    }
    @media (max-width: 1200px) {
        > li {
            font-size: 25px;
        }
    }
    @media (max-width: 850px) {
        gap: 5px;
        > li {
            font-size: 20px;
        }
    }
    @media (max-width: 700px) {
        > li {
            font-size: 17px;
        }
    }
    @media (max-width: 500px) {
        max-width: 280px;
        gap: 0;
        > li {
            font-size: 13px;
            max-width: 280px;
        }
    }
`

export function AdvantagesCard({
                                   title,
                                   description,
                                   bgImage,
                               }: AdvantageCardProps) {

    return (
        <AdvantagesCardStyled bgImage={bgImage}>
            <h1>{title}</h1>
            <AdvantagesCardUlStyled>
                {description.map((descItem) => (
                    <li key={descItem}>{descItem}</li>
                ))}
            </AdvantagesCardUlStyled>
        </AdvantagesCardStyled>
    );
}
