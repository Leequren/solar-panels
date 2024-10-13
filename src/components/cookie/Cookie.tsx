import { useCookieBannerStore } from "@/store/cookieStore";
import React from "react";
import styled from "styled-components";

const BannerWrapper = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  box-shadow: 0px -2px 10px rgba(0, 0, 0, 0.3);
`;

const BannerText = styled.p`
  margin: 0;
  font-size: 16px;
`;

const AcceptButton = styled.button`
  padding: 8px 16px;
  background-color: #ff9800;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  @media screen and (min-width: 801px) {
    margin-left: 5px;
  }
  @media screen and (max-width: 800px) {
    margin-top: 10px;
  }

  &:hover {
    background-color: #e68900;
  }
`;

const CookieBanner = () => {
  const { isCookieAccepted, acceptCookies } = useCookieBannerStore();

  // Если куки уже приняты, не показываем баннер
  if (isCookieAccepted) return null;

  return (
    <BannerWrapper>
      <BannerText>
        Мы используем куки для улучшения вашего опыта. Продолжая использовать
        сайт, вы соглашаетесь с нашей политикой.
      </BannerText>
      <AcceptButton onClick={acceptCookies}>Принять</AcceptButton>
    </BannerWrapper>
  );
};

export default CookieBanner;
