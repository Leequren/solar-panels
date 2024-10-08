import { AdvantagesCard } from "./AdvantagesCard";
import styled from "styled-components";

interface AdvantagesProps {
  title: string;
  description: string;
}

const AdvantagesStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 60px;
    margin-top: 150px;
    
    @media (max-width: 1200px) {
        margin-top: 100px;
        gap: 30px;
    }
    @media (max-width: 700px) {
        margin-top: 80px;
        gap: 25px;
    }
    @media (max-width: 500px) {
        margin-top: 50px;
    }

`;

const CardStyled = styled.div`
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
    
    @media (max-width: 1200px) {
        display: flex;
        flex-direction: column;
    }
`;

const TitleStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;
    align-items: center;

    > h1 {
        font-size: 60px;
        font-weight: 500;
    }

    > p {
        font-size: 26px;
        font-weight: 500;
        max-width: 740px;
        text-align: center;
        color: #48494b;
    }

    @media (max-width: 1500px) {
        > h1 {
            font-size: 50px;
        }

        > p {
            font-size: 20px;
        }
    }
    @media (max-width: 1200px) {
        gap: 15px;
        > h1 {
            font-size: 40px;
        }

        > p {
            font-size: 17px;
        }
    }
    @media (max-width: 700px) {
        > h1 {
            font-size: 30px;
        }

        > p {
            font-size: 15px;
            text-align: center;
            text-wrap: wrap;
            width: 100%;
        }
    }
    @media (max-width: 500px) {
        gap: 13px;
        > h1 {
            font-size: 20px;
        }

        > p {
            font-size: 13px;
        }
    }    

`;

export function Advantages({ title, description }: AdvantagesProps) {
  return (
    <AdvantagesStyled id='Additional'>
      <TitleStyled>
        <h1>{title}</h1>
        <p>{description}</p>
      </TitleStyled>
      <CardStyled>
        <AdvantagesCard
          title={"Экологичность"}
          description={[
            "Солнечная энергия экологически чистая",
            "Тишина при работе",
            "Не требуется топливо",
          ]}
          bgImage={"/img/BgImageAdvantages1.png"}
        />
        <AdvantagesCard
          title={"Удобство"}
          description={[
            "Просто хранить",
            "Удобно перевозить",
            "Легко использовать",
          ]}
          bgImage={"/img/BgImageAdvantages2.png"}
        />
        <AdvantagesCard
          title={"Практичность"}
          description={[
            "Корпус устойчивый к высоким температурам",
            "Устойчивость конструкции к ветру",
            "Защита IP65",
          ]}
          bgImage={"/img/BgImageAdvantages3.png"}
        />
        <AdvantagesCard
          title={"Уникальность"}
          description={[
            "Уникальный дизайн устройства",
            "Индивидуальные функции зарядки девайсов",
            "Лимитированное предложение",
          ]}
          bgImage={"/img/BgImageAdvantages4.png"}
        />
      </CardStyled>
    </AdvantagesStyled>
  );
}
