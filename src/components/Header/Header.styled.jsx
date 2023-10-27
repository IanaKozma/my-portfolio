import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  /* width: 100%;
  height: 100%; */
  margin: 0 auto;
  padding: 0 15px;
  
  /* @media screen and (min-width: 480px) {
    width: 480px;
  } */

  @media screen and (min-width: 768px) {
    width: 768px;
  }

  @media screen and (min-width: 1200px) {
    width: 1200px;
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
  fill: var(--white-color);

  :hover,
  :focus {
    fill: var(--nav-hover-color);
  }

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
    fill: var(--white-color);
  }
`;