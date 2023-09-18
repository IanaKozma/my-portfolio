import { useState } from 'react';
import logo from '../../images/code-girl.png';
import sprite from "../../images/sprite.svg";
import { navLinks } from "../NavMenu";
import { MobileMenu } from "../Modal/Modal";
import { Container, HeaderWrapper, HeaderImg, ButtonMenu, NavMenu, Link, SocialIconsList, SocialIcon } from "./Header.styled";

export const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const NavBar = () => {
        return (
            <nav>
                {navLinks.map((link, index) => (
                    <Link key={index} to={link.to}>{link.label}</Link>
                ))}
            </nav>
        );
    };

    return (
        <>
            <header>
                <Container>
                    <HeaderWrapper>
                        <HeaderImg src={logo} alt="Logo" />
                        <ButtonMenu type="button" onClick={() => setIsOpen(true)}>
                            <svg width="30" height="30">
                                <use href={sprite + "#icon-hamburger-menu"}></use>
                            </svg>
                        </ButtonMenu>
                        {isOpen && <MobileMenu setIsOpen={setIsOpen} />}
                        <NavMenu>
                            {NavBar()}
                            <SocialIconsList>
                                <li>
                                    <SocialIcon
                                        href="https://github.com/IanaKozma"
                                        target="_blank"
                                        rel="noreferrer noopener"
                                    >
                                        <svg width="30" height="30">
                                            <use href={sprite + "#icon-github"}></use>
                                        </svg>
                                    </SocialIcon>
                                </li>
                                <li>
                                    <SocialIcon
                                        href="https://www.linkedin.com/in/iana-kozma/"
                                        target="_blank"
                                        rel="noreferrer noopener"
                                    >
                                        <svg width="30" height="30">
                                            <use href={sprite + "#icon-linkedin"}></use>
                                        </svg>
                                    </SocialIcon>
                                </li>
                            </SocialIconsList>
                        </NavMenu>
                    </HeaderWrapper>
                </Container>
            </header>
        </>
    );
};