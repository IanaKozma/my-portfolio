import { createPortal } from 'react-dom';
import sprite from "../../images/sprite.svg";
import { Container, SocialIconsList, SocialIcon } from "../SharedLayout/SharedLayout.styled";
import { Backdrop, Modal, Button, MobileNav, MobileLink } from "./Modal.styled";

const modalRoot = document.querySelector('#modal-root');

export const MobileMenu = ({ setIsOpen }) => {
    return createPortal(
      <Container>
    <Backdrop onClick={() => setIsOpen(false)}>
        <Modal>
            <Button type="button" onClick={() => setIsOpen(false)}>
                <svg width="20" height="20">
                    <use href={sprite + "#icon-close-menu"}></use>
                </svg>
            </Button>     
                <MobileNav>
                    <MobileLink to="/">Home</MobileLink>
                    <MobileLink to="/about">About</MobileLink>
                    <MobileLink to="/techStack">Tech Stack</MobileLink>
                    <MobileLink to="/projects">Projects</MobileLink>
                    <MobileLink to="/contact">Contact</MobileLink>
                </MobileNav>
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