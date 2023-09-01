import { Outlet } from "react-router-dom";
import logo from '../../images/code-girl.png';
import sprite from "../../images/sprite.svg";
import { Container, Header, Link, SocialIcons, SocialIcon } from "./SharedLayout.styled";

export const SharedLayout = () => {
  return (
    <Container>
      <Header>     
        <img src={logo} alt="Logo" width="97" height="59" />
        <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/techStack">Tech Stack</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>
        </nav>
        <SocialIcons>
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
        </SocialIcons>
      </Header>
      <Outlet />
    </Container>
  );
};