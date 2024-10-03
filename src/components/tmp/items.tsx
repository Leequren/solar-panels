import { FC } from "react";
import styled from "styled-components";
export interface IConfig {
  [key: string]: {
    name: string;
    price: number;
    options: {
      [key: string]: {
        label: string;
        price: number;
      };
    };
  };
}
const config: IConfig = {
  power: {
    name: "Мощность",
    price: 10000,
    options: {
      "1": {
        label: "5 Вт",
        price: 1000,
      },
      "2": {
        label: "10 Вт",
        price: 2000,
      },
      "3": {
        label: "15 Вт",
        price: 3000,
      },
    },
  },
  countUsb: {
    name: "Количество USB-портов",
    price: 2000,
    options: {
      "1": {
        label: "1 порт",
        price: 0,
      },
      "2": {
        label: "2 порта",
        price: 2000,
      },
      "3": {
        label: "3 порта",
        price: 4000,
      },
    },
  },
};

const HeaderConfigItem = styled.h3`
  font-size: 26px;
  font-weight: 400;
  color: #8a8a8a;
`;

const OptionList = styled.ul`
  margin-top: 20px;
  list-style: none;
  display: flex;
  gap: 10px;
`;

const OptionItem = styled.li`
  background-color: #d9d9d9;
  padding: 8px 31px;
  border-radius: 100px;
  color: black;
`;
const ContainerConfigItem = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 10px;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const ConfigOptions: FC<{ config: IConfig }> = ({ config }) => {
  return (
    <Container>
      {Object.entries(config).map(([configKey, configItem]) => (
        <ContainerConfigItem key={configKey}>
          <HeaderConfigItem>{configItem.name}</HeaderConfigItem>
          <OptionList>
            {Object.entries(configItem.options).map(([optionKey, option]) => (
              <OptionItem key={optionKey}>{option.label}</OptionItem>
            ))}
          </OptionList>
        </ContainerConfigItem>
      ))}
    </Container>
  );
};
