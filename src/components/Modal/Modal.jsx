import { createPortal } from 'react-dom';
import sprite from "../../images/sprite.svg";
import { navLinks } from "../NavMenu";
import { Container, SocialIconsList } from "../Header/Header.styled";
import { Backdrop, Modal, Button, MobileNav, MobileLink, SocialIcon } from "./Modal.styled";

const modalRoot = document.querySelector('#modal-root');

export const MobileMenu = ({ setIsOpen }) => {
    const NavBar = () => {
        return (
        <MobileNav>
            {navLinks.map((link, index) => (
            <MobileLink key={index} to={link.to}>{link.label}</MobileLink>
            ))}
        </MobileNav>
        );
    };
    
    return createPortal(
      <Container>
    <Backdrop onClick={() => setIsOpen(false)}>
        <Modal>
            <Button type="button" onClick={() => setIsOpen(false)}>
                <svg width="20" height="20">
                    <use href={sprite + "#icon-close-menu"}></use>
                </svg>
            </Button>
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
        </Modal>
            </Backdrop>
            </Container>,
    modalRoot,
  );
}