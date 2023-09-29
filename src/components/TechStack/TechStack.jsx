import sprite from "../../images/sprite.svg";
import { Container } from "../Header/Header.styled";
import { Section, ProjectsPageTitle, TechStackList, StackListItem, StackIcon } from "./TechStack.styled";

export const TechStack = () => {
    return (
        <Container>
            <Section>
            <ProjectsPageTitle>Tech Stack</ProjectsPageTitle>
            <TechStackList>
                <StackListItem>
                    <StackIcon>
                        <use href={sprite + "#icon-html"}></use>
                    </StackIcon>
                </StackListItem>
                <StackListItem>
                    <StackIcon>
                        <use href={sprite + "#icon-css"}></use>
                    </StackIcon>
                </StackListItem>
                <StackListItem>
                    <StackIcon>
                        <use href={sprite + "#icon-js"}></use>
                    </StackIcon>
                </StackListItem>
                <StackListItem>
                    <StackIcon>
                        <use href={sprite + "#icon-react"}></use>
                    </StackIcon>
                </StackListItem>
                <StackListItem>
                    <StackIcon>
                        <use href={sprite + "#icon-node"}></use>
                    </StackIcon>
                </StackListItem>
                </TechStackList>
                </Section>
        </Container>
    );
};