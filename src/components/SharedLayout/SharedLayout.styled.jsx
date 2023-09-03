import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  
  @media screen and (min-width: 480px) {
    width: 480px;
    padding: 0 30px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
    padding: 0 100px;
  }

  @media screen and (min-width: 1200px) {
    width: 1200px;
    padding: 0 195px;
  }
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;

  > nav {
    display: flex;
  }
`;

export const HeaderImg = styled.img`
  width: 49px;
  height: 40px;

  @media screen and (min-width: 768px) {
    width: 72px;
    height: 52px;
  }

  @media screen and (min-width: 1200px) {
    width: 85px;
    height: 59px;
  }
`;

export const ButtonMenu = styled.button`
  border: none;
  background-color: var(--dark-mode-color);

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const NavMenu = styled.div`
  display: none;

  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  @media screen and (min-width: 1200px) {
    gap: 12px;
  }
`;

export const Link = styled(NavLink)`
  padding: 8px 8px;
  text-decoration: none;
  color: var(--nav-subtitle-color);
  font-family: var(--secondary-medium);
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;

  &:hover,
  &:focus,
  &.active {
    color: var(--nav-hover-color);
  }

  @media screen and (min-width: 768px) {
    padding: 8px 12px;
    font-size: 16px;
    line-height: 20px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 20px;
    line-height: 26px;
    padding: 8px 16px;
  }
`;

export const SocialIconsList = styled.ul`
  display: flex;
  gap: 10px;
  padding: 8px 0;
`;

export const SocialIcon = styled.a`
  fill: var(--nav-subtitle-color);

  &:hover {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    fill: var(--white-color);
  }
`;

export const FooterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 0;
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
  font-size: 14px;
  line-height: 22px;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 24px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 18px;
    line-height: 26px;
  }
`;