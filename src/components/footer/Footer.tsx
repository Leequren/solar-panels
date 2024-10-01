import { Contacts } from "./Contacts/Contacts.tsx";
import styled from "styled-components";
import { MainInfo } from "./MainInfo/MainInfo";
import { CompanyInfo } from "./CompanyInfo/CompanyInfo";

const FooterStyled = styled.div`
  display: flex;
  background-color: #2e2e2e;
  border-radius: 16px 16px 0 0;
  height: 367px;
  padding-top: 27px;
  align-items: center;
  padding-left: 150px;
  padding-right: 150px;
  flex-direction: row;
  justify-content: space-between;
`;

export function Footer() {
  return (
    <FooterStyled>
      <Contacts />
      <MainInfo />
      <CompanyInfo />
    </FooterStyled>
  );
}
