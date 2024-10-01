import { FC } from "react";
import styled from "styled-components";
import AddIcon from "@/assets/img/AddIcon.svg?react";
import OpenIcon from "@/assets/img/OpenIcon.svg?react";
import CloseIcon from "@/assets/img/CloseIcon.svg?react";
interface IConfigItemProps {
  name: string;
  description: string[];
  price: number;
  config?: {
    [key: string]: {
      price: number;
      countUsb: number;
    };
  };
}
const Container = styled.div`
  max-width: 1074px;
  display: flex;
  align-items: center;
  border: 1px solid #000000;
  border-radius: 81px;
`;
const Header = styled.h2`
  font-size: 25px;
  font-weight: 300;
`;

const OpenActionContainer = styled.div`
  border-left: 1px solid #000000;
`;
const ActionAddContainer = styled.div``;
export const ConfigItem: FC<IConfigItemProps> = ({
  name,
  description,
  price,
  config,
}) => {
  return (
    <Container>
      <ActionAddContainer>
        <AddIcon />
      </ActionAddContainer>
      <Header>{name}</Header>
      <OpenActionContainer>
        <OpenIcon />
      </OpenActionContainer>
    </Container>
  );
};
