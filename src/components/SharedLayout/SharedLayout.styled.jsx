import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0 60px;
  background-color: var(--dark-mode-color);

  @media screen and (min-width: 480px) {
    width: 480px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
  }

  @media screen and (min-width: 1200px) {
    width: 1200px;
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 16px;

  > nav {
    display: flex;
  }
`;

export const Link = styled(NavLink)`
  padding: 8px 16px;
  text-decoration: none;
  color: var(--nav-subtitle-color);
  font-family: var(--secondary-medium);
  font-weight: 500;
  font-size: 20px;
  line-height: 26px;

  &:hover,
  &:focus,
  &.active {
    color: var(--nav-hover-color);
  }
`;

export const SocialIcons = styled.ul`
  display: flex;
  gap: 22px;
  padding: 8px 0;
`;

export const SocialIcon = styled.a`
  fill: var(--nav-subtitle-color);

  &:hover {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    fill: var(--white-color);
  }
`;