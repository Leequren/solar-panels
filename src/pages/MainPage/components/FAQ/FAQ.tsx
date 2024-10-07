import styled from "styled-components";
import { FAQs } from "@/pages/MainPage/components/FAQ/FAQs.tsx";
import React, { useEffect } from "react";
import { useFaqStore } from "@/store/faqStore";

interface FAQProps {
  title: string;
  description: string;
}

const FaqWrapper = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 160px;

  @media (max-width: 800px) {
    margin-top: 100px;
  }
  @media (max-width: 500px) {
    margin-top: 50px;
  }
`;

const FAQsStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 55px;
  width: 90%;
  @media (max-width: 800px) {
    gap: 35px;
  }
  @media (max-width: 500px) {
    gap: 25px;
  }
`;

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
    color: #48494b;
  }

  @media (max-width: 800px) {
    gap: 10px;

    > h1 {
      font-size: 40px;
    }
    > p {
      font-size: 20px;
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

const FAQss = [
  {
    question: "Как рассчитать стоимость?",
    answer:
      "Рассчитать стоимость можно в корзине, после выбора интересующей продукции в разделе “Каталог”",
  },
  {
    question: "Как рассчитать стоимость?",
    answer:
      "Рассчитать стоимость можно в корзине, после выбора интересующей продукции в разделе “Каталог”",
  },
  {
    question: "Как рассчитать стоимость?",
    answer:
      "Рассчитать стоимость можно в корзине, после выбора интересующей продукции в разделе “Каталог”",
  },
  {
    question: "Как рассчитать стоимость?",
    answer:
      "Рассчитать стоимость можно в корзине, после выбора интересующей продукции в разделе “Каталог”",
  },
  {
    question: "Как рассчитать стоимость?",
    answer:
      "Рассчитать стоимость можно в корзине, после выбора интересующей продукции в разделе “Каталог”",
  },
];

export const FAQ: React.FC<FAQProps> = ({ title, description }: FAQProps) => {
  const faqsStore = useFaqStore();

  useEffect(() => {
    faqsStore.fetch();
  }, []);
  const faqItems = faqsStore.faqs.length ? faqsStore.faqs : [];
  return (
    <FaqWrapper>
      <FAQsStyled>
        <FAQTitle>
          <h1>{title}</h1>
          <p>{description}</p>
        </FAQTitle>
        <FAQs FAQs={faqItems} />
      </FAQsStyled>
    </FaqWrapper>
  );
};
