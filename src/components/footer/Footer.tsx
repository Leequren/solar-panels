import { Contacts } from "./Contacts/Contacts.tsx";
import styled from "styled-components";
import { MainInfo } from "./MainInfo/MainInfo";
import { CompanyInfo } from "./CompanyInfo/CompanyInfo";
import { useWindowDimensions } from "@/hooks/useWindowSize/useWindowWidth.tsx";
import { CompanyInfoSvg } from "@/components/footer/CompanyInfo/CompanySvg.tsx";

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
  margin-top: 160px;
  @media (max-width: 1700px) {
    padding-left: 50px;
    padding-right: 50px;
  }
  @media (max-width: 1350px) {
    padding-left: 30px;
    padding-right: 10px;
  }
  @media (max-width: 1149px) {
    padding: 20px 15px;
    flex-direction: column;
    height: 100%;
  }
  @media (max-width: 800px) {
    margin-top: 100px;
  }
  @media (max-width: 500px) {
    margin-top: 50px;
  }
`;

const FooterMobileContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-bottom: 25px;
`;

const FooterContactsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  text-align: center;
  width: 100%;
  margin-bottom: 18px;
`;

export function Footer() {
  // @ts-ignore
  const isMobile = useWindowDimensions().width < 1150;
  // @ts-ignore
  const isBig = useWindowDimensions().width > 600;

  return isMobile ? (
    <FooterStyled id='ContactsItem'>
      <FooterMobileContainer>
        <MainInfo isOneColumn={true} />
        <CompanyInfoSvg isBig={isBig} />
        <MainInfo isOneColumn={false} />
      </FooterMobileContainer>
      <FooterContactsContainer>
        <Contacts id={0} />
        <Contacts id={1} />
      </FooterContactsContainer>
      <Contacts id={2} />
      <CompanyInfo />
    </FooterStyled>
  ) : (
    <FooterStyled id='ContactsItem'>
      <Contacts />
      <MainInfo />
      <CompanyInfo />
    </FooterStyled>
  );
}
