import logo from '../../images/code-girl.png';
import sprite from "../../images/sprite.svg";
import { navLinks } from "../NavMenu";
import { Container, HeaderImg, SocialIcon, SocialIconsList } from "../Header/Header.styled";
import { FooterWrapper, ContactsList, ContactsWrapper, ContactsIcon, ContactsLink, ContactsText, Copyright, FooterLink, FooterNav } from "./Footer.styled";

export const Footer = () => {
    const NavBar = () => {
        return (
            <nav>
                {navLinks.map(({to, label}) => (
                    <FooterLink key={to} to={to}>{label}</FooterLink>
                ))}
            </nav>
        );
    };

    return (
        <>
            <footer>
                <Container>
                    <FooterWrapper>
                        <HeaderImg src={logo} alt="Logo" />
                        <ContactsWrapper>
                            <ContactsList>
                                <ContactsLink><ContactsText href="mailto:yana.kozma@gmail.com">
                                    <ContactsIcon width="16" height="12">
                                        <use href={sprite + "#icon-envelope"}></use>
                                    </ContactsIcon>
                                    yana.kozma@gmail.com</ContactsText></ContactsLink>
                                <ContactsLink><ContactsText href="tel:+491637061581">
                                    <ContactsIcon width="10" height="16">
                                        <use href={sprite + "#icon-smartphone"}></use>
                                    </ContactsIcon>
                                    +49 163 706 15 81</ContactsText></ContactsLink>
                            </ContactsList>
                            <SocialIconsList>
                                <li>
                                    <SocialIcon
                                        href="https://github.com/IanaKozma"
                                        target="_blank"
                                        rel="noreferrer noopener"
                                    >
                                        <svg width="25" height="25">
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
                                        <svg width="25" height="25">
                                            <use href={sprite + "#icon-linkedin"}></use>
                                        </svg>
                                    </SocialIcon>
                                </li>
                            </SocialIconsList>
                        </ContactsWrapper>
                    </FooterWrapper>
                    <FooterNav>
                        {NavBar()}
                        <Copyright>© Portfolio 2023 by IK</Copyright>
                    </FooterNav>
                </Container>
            </footer>
        </>
    );
};