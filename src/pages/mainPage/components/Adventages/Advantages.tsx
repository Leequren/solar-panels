import {AdvantagesCard} from "./AdvantagesCard";
import styled from "styled-components";

interface AdventagesProps {
    title: string,
    description: string
}

const AdventagesStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 60px;
    padding-top: 150px;
`
const CardStyled = styled.div`
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
`
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
        width: 740px;
        text-align: center;
        color: #48494B;
    }
`

export function Advantages({title, description}: AdventagesProps) {
    return (
        <AdventagesStyled>
            <TitleStyled>
                <h1>{title}</h1>
                <p>{description}</p>
            </TitleStyled>
            <CardStyled>
                <AdvantagesCard title={'Экологичность'}
                                description={['Солнечная энергия экологически чистая', 'Тишина при работе', 'Не требуется топливо']}
                                bgImage={'/img/BgImageAdvantages1.png'}/>
                <AdvantagesCard title={'Удобство'}
                                description={['Просто хранить', 'Удобно перевозить', 'Легко использовать']}
                                bgImage={'/img/BgImageAdvantages2.png'}/>
                <AdvantagesCard title={'Практичность'}
                                description={['Корпус устойчивый к высоким температурам', 'Устойчивость конструкции к ветру', 'Защита IP65']}
                                bgImage={'/img/BgImageAdvantages3.png'}/>
                <AdvantagesCard title={'Уникальность'}
                                description={['Уникальный дизайн устройства', 'Индивидуальные функции зарядки девайсов', 'Лимитированное предложение']}
                                bgImage={'/img/BgImageAdvantages4.png'}/>
            </CardStyled>
        </AdventagesStyled>
    )
}