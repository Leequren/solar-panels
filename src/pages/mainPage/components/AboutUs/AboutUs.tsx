import styled from "styled-components";

interface AboutUsProps {
    title: string,
    description: string,
    imgUrl: string,
    bgUrl: string,
    path: string
}

const AboutUsStyled = styled.div`
    display: flex;
    flex-direction: row;
    gap: 80px;
    padding-left: 210px;
    padding-right: 150px;
    padding-top: 170px;
    align-items: center;
    justify-content: center;

    > img {
        height: 516px;
        width: 744px;
        border-radius: 35px;
    }
`

const AboutUsContentStyled = styled.div<Partial<AboutUsProps>>`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 20px;
    background: url(${props => props.bgUrl}) no-repeat right bottom;
    height: 395px;
    width: 625px;

    > h1 {
        font-size: 60px;
        font-weight: 500;
    }

    > p {
        font-size: 26px;
        font-weight: 500;
        color: #48494B;
        padding-bottom: 20px;
    }

    > button {
        width: 180px;
        height: 70px;
        padding: 19px 40px;
        font-size: 26px;
        font-weight: 500;
        background-color: black;
        color: white;
        border-radius: 100px;
    }
`

export function AboutUs({title, description, imgUrl, bgUrl}: AboutUsProps) {
    return (
        <AboutUsStyled>
            <img src={imgUrl} alt=""/>
            <AboutUsContentStyled bgUrl={bgUrl}>
                <h1>{title}</h1>
                <p>{description}</p>
                <button>Каталог</button>
            </AboutUsContentStyled>
        </AboutUsStyled>
    )
}