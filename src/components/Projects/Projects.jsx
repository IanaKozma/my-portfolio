import webstudio from "../../images/webstudio.jpg";
import sprite from "../../images/sprite.svg";
import { Container } from "../Header/Header.styled";
import { ProjectsPageTitle } from "../TechStack/TechStack.styled";
import { ProjectItem, ProjectImg, ProjectWrapper, ProjectTitle, ProjectDescription, ProjectStack, ProjectLinksList, ProjectLink, ProjectIcon } from "./Projects.styled";

export const MyProjects = () => {
    return (
        <Container>
            <section>
                <ProjectsPageTitle>Projects</ProjectsPageTitle>
                <ul>
                    <ProjectItem>
                        <ProjectImg src={webstudio} alt="Webstudio" width="375" />
                        <ProjectWrapper>
                            <ProjectTitle>WebStudio</ProjectTitle>
                            <ProjectDescription>A website of WebStudio company. Responsive design, transform effects, modal windows.</ProjectDescription>
                            <ProjectDescription>Role: developer</ProjectDescription>
                            <ProjectDescription>Individual project.</ProjectDescription>
                            <ProjectStack>Tech stack: HTML, SASS, JS</ProjectStack>
                            <ProjectLinksList>
                                <li>
                                    <ProjectLink
                                        href="https://ianakozma.github.io/goit-markup-hw-08-english/"
                                        target="_blank"
                                        rel="noreferrer noopener"
                                    >
                                        <ProjectIcon width="20" height="20">
                                            <use href={sprite + "#icon-link-chain"}></use>
                                        </ProjectIcon>
                                        Live Preview
                                    </ProjectLink>
                                </li>
                                <li>
                                    <ProjectLink
                                        href="https://github.com/IanaKozma/goit-markup-hw-08-english"
                                        target="_blank"
                                        rel="noreferrer noopener"
                                    >
                                        <ProjectIcon width="20" height="20">
                                            <use href={sprite + "#icon-github"}></use>
                                        </ProjectIcon>
                                        View Code
                                    </ProjectLink>
                                </li>
                            </ProjectLinksList>
                        </ProjectWrapper>
                    </ProjectItem>
                </ul>
            </section>
        </Container>
    );
};