import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Backdrop = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: var(--backdrop-bg-color);

    body {
        overflow: hidden;
    }

    @media screen and (min-width: 768px) {
        display: none;
    }
`;

export const Modal = styled.div`
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: auto;
    height: auto;
    padding: 15px 0 25px 25px;
    background-color: var(--white-color);
    color: var(--dark-mode-color);

    @media screen and (min-width: 768px) {
        display: none;
    }
`;

export const Button = styled.button`
    position: absolute;
    top: 20px;
    right: 20px;
    width: 40px;
    height: 40px;
    background-color: var(--white-color);
    fill: var(--dark-mode-color);
    border: none;

    &:hover,
    &:focus {
        fill: var(--nav-hover-color);
    }
`;

export const MobileNav = styled.nav`
    display: flex;
    flex-direction: column;
    padding-top: 30px;
`;

export const MobileLink = styled(NavLink)`
    margin-bottom: 8px;
    text-decoration: none;
    color: var(--dark-mode-color);
    font-family: var(--secondary-medium);
    font-weight: 500;
    font-size: 18px;
    line-height: 22px;

    &:hover,
    &:focus,
    &.active {
        color: var(--nav-hover-color);
    }
`;

export const SocialIcon = styled.a`
  fill: var(--footer-line-color);

  &:hover {
    fill: var(--nav-hover-color);
  }
`;