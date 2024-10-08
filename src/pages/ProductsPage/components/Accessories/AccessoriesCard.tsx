import styled from "styled-components";

interface AccessoriesCardProps {
  title: string;
  price: number;
  imgUrl: string;
}

const AccessoriesCardStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between; /* Устанавливаем равномерное распределение контента */
    max-width: 390px;
    margin-top: 30px;
    gap: 7px;

    > img {
        width: 390px;
        height: 370px;
        object-fit: cover;
        border-radius: 30px;
    }

    > button {
        border-radius: 100px;
        box-shadow: 0 3px 2px 0 #00000040;
        font-size: 46px;
        border: none;
        width: 100%;
        color: black;
    }

    @media (max-width: 800px) {
        max-width: 270px;
        > img {
            width: 270px;
            height: 250px;
            border-radius: 15px;
        }

        > button {
            font-size: 35px;
        }
    }
    @media (max-width: 500px) {
        max-width: 177px;
        > img {
            width: 177px;
            height: 160px;
        }

        > button {
            font-size: 20px;
        }
    }
`;

const AccessoriesCardTitle = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    min-height: 70px; /* Минимальная высота для заголовков, чтобы избежать разницы из-за переноса строк */

    > h1 {
        font-size: 26px;
        font-weight: 400;
        white-space: pre-wrap; /* Разрешаем перенос текста */
    }

    > span {
        font-family: Jost, sans-serif;
        font-size: 28px;
    }

    @media (max-width: 800px) {
        gap: 7px;

        > h1 {
            font-size: 20px;
            color: black;
        }

        > span {
            font-size: 22px;
        }
    }
    @media (max-width: 500px) {
        gap: 5px;
        > h1 {
            font-size: 13px;
        }

        > span {
            font-size: 16px;
        }
    }
`;

const AccessoriesCardContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 20px;
    align-items: stretch; /* Все карточки будут иметь одинаковую высоту */
`;

export function AccessoriesCard({ title, price, imgUrl }: AccessoriesCardProps) {
  return (
    <AccessoriesCardStyled>
      <img src={imgUrl} alt="" />
      <AccessoriesCardTitle>
        <h1>{title}</h1>
        <span>{price} ₽</span>
      </AccessoriesCardTitle>
      <button>+</button>
    </AccessoriesCardStyled>
  );
}
