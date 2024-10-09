import React, {useState} from 'react';
import styled from 'styled-components';
import SubmitArrow from '@/assets/img/ArrowSubmit.svg?react'
import BackArrow from '@/assets/img/BackArrow.svg?react'

interface ModalProps {
  isModalOpen: boolean;
  closeModal: () => void;
}

const ModalBackground = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const ModalContent = styled.div`
    backdrop-filter: blur(30px);
    padding: 30px;
    border-radius: 40px;
    max-width: 600px;
    text-align: center;
    border: 1px solid #CACACA;

    @media (max-width: 1150px) {
        max-width: 340px;
        padding: 25px;
    }
`;

const SubmitButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    background-color: black;
    color: white;
    border: none;
    border-radius: 100px;
    padding: 18px 45px;
    font-size: 30px;
    font-weight: 500;
    cursor: pointer;
    
    @media (max-width: 1150px) {
        font-size: 16px;
        font-weight: 400;
        padding: 10px 105px;
    }
`;

const SubmitButtonBack = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    background-color: black;
    color: white;
    border: none;
    border-radius: 100px;
    padding: 18px 45px;
    font-size: 30px;
    font-weight: 500;
    cursor: pointer;

    @media (max-width: 1150px) {
        font-size: 13px;
        font-weight: 400;
        padding: 12px 25px;
        gap: 10px;

        > svg {
            width: 13px;
            height: 13px;
        }
    }
`;

const ModalFormStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 50px;

    > h2 {
        font-size: 30px;
        font-weight: 500;
    }

    @media (max-width: 1150px) {
        gap: 25px;

        > h2 {
            font-size: 16px;
            padding: 0 18px;
            font-weight: 400;
        }

    }
`

const ModalFormInputStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;

    > input {
        border: 1px solid #C4C4C4;
        border-radius: 100px;
        padding: 24px 0 24px 35px;
        font-size: 26px;
        font-weight: 500;
    }

    .input_Jost {
        font-family: Jost, sans-serif;
        font-weight: 400;
    }

    @media (max-width: 1150px) {
        gap: 15px;

        > input {
            font-size: 13px;
            padding: 12px 20px;
            font-weight: 400;
        }
    }
`

const ModalFormContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    
    @media (max-width: 1150px) {
        gap: 10px;
    }
`

const ModalBottomContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;

    > p {
        font-weight: 500;
    }

    > p > a {
        color: #0CA4E6;
        text-decoration: none;
        cursor: pointer;
    }

    @media (max-width: 1150px) {
        gap: 10px;

        > p {
            font-size: 10px;
        }
    }
`

const ModalSubmitedContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;

    > h2 {
        font-size: 30px;
        font-weight: 500;
        padding: 0 65px;
    }

    @media (max-width: 1150px) {
        gap: 40px;

        > h2 {
            font-size: 16px;
            font-weight: 400;
            padding: 0;
        }
    }
`

const ModalSubmitImgStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: black;
    width: 144px;
    height: 144px;
    border-radius: 1000px;

    @media (max-width: 1150px) {
        height: 100px;
        width: 100px;

        > svg {
            height: 33px;
            width: 48px;
        }
    }
`

const ModalSubmitContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 50px;
    
    @media (max-width: 1150px) {
        gap: 40px;
    }
`

const ModalSubmitTextStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;

    > p {
        font-size: 30px;
        font-weight: 500;
    }

    @media (max-width: 1150px) {
        gap: 24px;

        > p {
            font-size: 16px;
            font-weight: 400;
        }
    }
`

export const Modal: React.FC<ModalProps> = ({isModalOpen, closeModal}) => {
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);

  const handleSubmit = () => {
    setIsFormSubmitted(true);
  };

  if (!isModalOpen) return null;

  return (
    <ModalBackground onClick={closeModal}>
      <ModalContent onClick={(e) => e.stopPropagation()}>
        {isFormSubmitted ? (
          <ModalSubmitedContainerStyled>
            <h2>Заявка успешно отправлена!</h2>
            <ModalSubmitContainerStyled>
              <ModalSubmitImgStyled>
                <SubmitArrow/>
              </ModalSubmitImgStyled>
              <ModalSubmitTextStyled>
                <p>Ожидайте ответа менеджера</p>
                <SubmitButtonBack onClick={closeModal}>На главную <BackArrow/></SubmitButtonBack>
              </ModalSubmitTextStyled>
            </ModalSubmitContainerStyled>
          </ModalSubmitedContainerStyled>
        ) : (
          <ModalFormStyled>
            <h2>Заполните форму и скоро с вами свяжется менеджер</h2>
            <ModalFormContainerStyled>
              <ModalFormInputStyled>
                <input type="text" placeholder="Имя"/>
                <input className='input_Jost' type="tel" placeholder="+7 (000) 000 00 00"/>
                <input className='input_Jost' type="email" placeholder="example@gmail.com"/>
              </ModalFormInputStyled>
              <ModalBottomContainerStyled>
                <p>При отправке формы, я подтверждаю, что прочитал <a href='#'>соглашение</a> и согласен на обработку
                  моих персональных данных.</p>
                <SubmitButton onClick={handleSubmit}>Отправить </SubmitButton>
              </ModalBottomContainerStyled>
            </ModalFormContainerStyled>
          </ModalFormStyled>
        )}
      </ModalContent>
    </ModalBackground>
  );
};
