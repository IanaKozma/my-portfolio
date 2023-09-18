import { Container } from "../../components/Header/Header.styled";
import photo349 from "../../images/photo349.jpg";
import photo280 from "../../images/photo280.jpg";
import photo230 from "../../images/photo230.jpg";
import { HeroWrapper, HeroTitle, HeroTitleName, HeroImg } from "./Home.styled";

export const Home = () => {
  return (
    <main>
      <Container>
        <HeroWrapper>
          <HeroTitle>Hi 👋<br/>
            My name is <HeroTitleName>Iana</HeroTitleName><br/>
            I am a web developer</HeroTitle>
              <picture>
                <source
                  media="(min-width: 1200px)"
                  srcSet={`${photo349} 349w`}
                  sizes="349px"
                />
                <source
                  media="(min-width: 768px)"
                  srcSet={`${photo280} 280w`}
                  sizes="280px"
                />
                <source
                  media="(max-width: 767px)"
                  srcSet={`${photo230} 230w`}
                  sizes="230px"
                />
                <HeroImg src={photo349} alt="MyPhoto" />
              </picture>
          </HeroWrapper>
      </Container>
    </main>
  );
};