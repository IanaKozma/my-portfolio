import { Outlet } from "react-router-dom";
import logo from '../../images/code-girl.png';
import sprite from "../../images/sprite.svg";
import { Container, HeaderWrapper, HeaderImg, ButtonMenu, NavMenu, Link, SocialIconsList, SocialIcon, FooterWrapper, ContactsList, ContactsWrapper, ContactsIcon, ContactsLink, ContactsText } from "./SharedLayout.styled";

export const SharedLayout = () => {
  return (
    <>
      <header>
        <Container>
          <HeaderWrapper>
            <HeaderImg src={logo} alt="Logo" />
            <ButtonMenu type="button">
                <svg width="30" height="30">
                  <use href={sprite + "#icon-hamburger-menu"}></use>
                </svg>
            </ButtonMenu>
            <NavMenu>
              <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/techStack">Tech Stack</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/contact">Contact</Link>
              </nav>
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

      <Outlet />

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
        </Container>
      </footer>
    </>
  );
};