import styled from "styled-components";
import { Link } from "../Header/Header.styled";

export const FooterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 12px;
  border-bottom: 1px solid var(--footer-line-color);

  @media screen and (min-width: 768px) {
    padding-bottom: 15px;
  }

  @media screen and (min-width: 1200px) {
    padding-bottom: 18px;
  }
`;

export const ContactsList = styled.ul`
  display: block;

  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 8px 0;
  }
`;

export const ContactsWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
`;

export const ContactsIcon = styled.svg`
  margin-right: 10px;
  fill: var(--nav-subtitle-color);
`;

export const ContactsLink = styled.li`
  margin-right: 10px;
  color: var(--nav-subtitle-color);

  :hover,
  :focus {
    color: var(--nav-hover-color);
  }

  @media screen and (min-width: 768px) {
    margin-right: 30px;
  }

  @media screen and (min-width: 1200px) {
    margin-right: 40px;
  }
`;

export const ContactsText = styled.a`
  color: var(--nav-subtitle-color);
  font-family: var(--secondary-regular);
  font-size: 12px;
  line-height: 22px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 24px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 18px;
    line-height: 26px;
  }
`;

export const Copyright = styled.p`
  font-family: var(--primary-regular);
  font-size: 10px;
  line-height: 26px;
  background: linear-gradient(#13B0F5, #E70FAA);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 20px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 18px;
    line-height: 26px;
  }
`;

export const FooterLink = styled(Link)`
  font-size: 10px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 18px;

    &:not(:last-child) {
      padding-right: 52px;
    }
  }
`;

export const FooterNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 0;

  @media screen and (min-width: 768px) {
    padding: 15px 0;
  }

  @media screen and (min-width: 1200px) {
    padding: 18px 0;
  }
`;