import { act, FC, useState } from "react";
import styled from "styled-components";
import AddIcon from "@/assets/img/AddIcon.svg?react";
import OpenIcon from "@/assets/img/OpenIcon.svg?react";
import CloseIcon from "@/assets/img/CloseIcon.svg?react";
import RemoveIcon from "@/assets/img/RemoveIcon.svg?react";

interface IConfigItem {
  [key: string]: {
    price: number;
    countUsb: number;
  };
}

interface IConfigItemProps {
  name: string;
  price: number;
  description: string[];
  config?: {
    [key: string]: {
      desc: string;
      configOptions: IConfigItem;
    };
  };
}

const ContentWrapper = styled.div<{ removed: boolean }>`
  margin-bottom: 20px;
  border: ${(props) =>
    props.removed ? "1px solid #B5B5B5" : "1px solid #000000"};
  border-radius: 40px;
  display: flex;
  flex-direction: column;
  max-width: 1074px;
`;

const Container = styled.div<{ removed: boolean; opened: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  border-bottom-color: ${(props) => (props.removed ? "#D9D9D9" : "black")};
  border-bottom: ${(props) => (props.opened ? "1px solid" : "0px solid")};
`;

const Header = styled.h2<{ removed: boolean }>`
  font-size: 25px;
  font-weight: 300;
  margin-left: 10px;
  text-decoration: ${(props) => (props.removed ? "line-through" : "none")};
  text-decoration-color: #b5b5b5;
  color: ${(props) => (props.removed ? "#B5B5B5" : "black")};
`;

const OpenActionContainer = styled.div<{ removed: boolean }>`
  border-left: ${(props) =>
    props.removed ? "1px solid #B5B5B5" : "1px solid #000000"};
  align-self: stretch;
  display: flex;
  align-items: center;
  justify-content: center;
  /* margin-right: 25px; */
  width: 80px;
`;
const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 25px;
`;
const ActionAddContainer = styled.div`
  display: flex;
  align-items: center;
`;
const actionRemoveAddDimentions = {
  height: 20,
  width: 20,
};
const actionOpenCloseDimentions = {
  height: 20,
  width: 20,
};

const EquipmentInfoContainer = styled.div<{ display: "block" | "none" }>`
  margin: 20px 0px;
  display: flex;
  flex-direction: column;
  display: ${(props) => props.display};
`;
const CharactersContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;
const ImgEquipContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #d9d9d9;
  border-radius: 20px;
  width: 274px;
  height: 274px;
`;
const ImgEquipSpan = styled.span`
  font-size: 23px;
  font-weight: 500;
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
`;

const DescriptionItemContainer = styled.div`
  background-color: #e3ffa6;
  border-radius: 20px;
  min-height: 120px;
  min-width: 345px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const MainDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  background-color: #2c2c2c;
  border-radius: 20px;
  width: 274px;
  padding: 20px;
`;

const MainDescriptionItemContainer = styled.div``;
const MainDescriptionItemHeader = styled.h1`
  font-size: 26px;
  font-weight: 500;
  color: #ffffff;
`;
const MainDescriptionItemSpan = styled.div`
  font-size: 20px;
  color: #e3e3e3;
`;
const DescriptionSpan = styled.div`
  font-weight: 500;
  font-size: 20px;
`;

const ConfigContainer = styled.div`
  margin-top: 40px;
`;

const ConfigHeader = styled.h2`
  font-size: 26px;
  font-weight: 300;
`;

const ConfigOptionsContainer = styled.div``;

const ConfigOptionsItem = styled.div`
  background-color: #2c2c2c;
  border-radius: 47px;
`;

const ConfigOptionsItemSpan = styled.span`
  font-weight: 400;
  font-size: 26px;
`;
export const ConfigItem: FC<IConfigItemProps> = ({
  name,
  description,
  price,
  config,
}) => {
  const [removed, setRemoved] = useState<boolean>(false);
  const [opened, setOpened] = useState<boolean>(false);

  const actionRemoveAddBtn = !removed ? (
    <RemoveIcon {...actionRemoveAddDimentions} />
  ) : (
    <AddIcon {...actionOpenCloseDimentions} />
  );

  const actionOpenCloseBtn = !opened ? (
    <OpenIcon stroke={!removed ? "black" : "#B5B5B5"} />
  ) : (
    <CloseIcon stroke={!removed ? "black" : "#B5B5B5"} />
  );

  // function renderConfig() {
  //   if (!config) return null;
  //   console.log(config);
  //   console.log(
  //     Object.keys(config).map((configKey) => {
  //       console.log(configKey);
  //       console.log(config[configKey]);
  //     })
  //   );
  //   return (
  //     <ConfigOptionsContainer>
  //       {Object.keys(config).map((configKey) => (
  //         <div key={configKey}>
  //           <h3>{configKey}</h3>
  //           <p>{config[configKey].desc}</p>
  //           {Object.keys(config[configKey].configOptions).map((optionKey) => (
  //             <ConfigOptionsItem key={optionKey}>
  //               <ConfigOptionsItemSpan>
  //                 {optionKey}:{" "}
  //                 {config[configKey].configOptions[optionKey].price} руб., USB
  //                 портов: {config[configKey].configOptions[optionKey].countUsb}
  //               </ConfigOptionsItemSpan>
  //             </ConfigOptionsItem>
  //           ))}
  //         </div>
  //       ))}
  //     </ConfigOptionsContainer>
  //   );
  // }

  return (
    <ContentWrapper removed={removed}>
      <Container removed={removed} opened={opened}>
        <HeaderContainer>
          <ActionAddContainer onClick={() => setRemoved(!removed)}>
            {actionRemoveAddBtn}
          </ActionAddContainer>
          <Header removed={removed}>{name}</Header>
        </HeaderContainer>

        <OpenActionContainer
          removed={removed}
          onClick={() => setOpened(!opened)}
        >
          {actionOpenCloseBtn}
        </OpenActionContainer>
      </Container>
      <EquipmentInfoContainer display={opened ? "block" : "none"}>
        <CharactersContainer>
          <ImgEquipContainer>
            {/* <img
              src="https://via.placeholder.com/150"
              alt="placeholder"
              style={{ height: "100%" }}
            /> */}
            <ImgEquipSpan>Фото</ImgEquipSpan>
          </ImgEquipContainer>
          <DescriptionContainer>
            {description.map((item, index) => (
              <DescriptionItemContainer>
                <DescriptionSpan>{item}</DescriptionSpan>
              </DescriptionItemContainer>
            ))}
          </DescriptionContainer>

          <MainDescriptionContainer>
            <MainDescriptionItemContainer>
              <MainDescriptionItemHeader>
                Мощный повербанк модуль
              </MainDescriptionItemHeader>
              {description.map((item, index) => (
                <MainDescriptionItemSpan>{item}</MainDescriptionItemSpan>
              ))}
            </MainDescriptionItemContainer>
          </MainDescriptionContainer>
        </CharactersContainer>
        {/* <CharactersContainer>{renderConfig()}</CharactersContainer> */}
      </EquipmentInfoContainer>
    </ContentWrapper>
  );
};
