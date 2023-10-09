import webstudio from "../../images/webstudio.jpg";
import mimino from "../../images/mimino.jpg";
import news from "../../images/news.jpg";
import phonebook from "../../images/phonebook.jpg";
import sprite from "../../images/sprite.svg";
import { Container } from "../Header/Header.styled";
import { ProjectsPageTitle } from "../TechStack/TechStack.styled";
import { Section, ProjectsList, ProjectItem, ProjectImg, ProjectWrapper, ProjectTitle, ProjectDescription, ProjectType, ProjectStack, StackTitle, ProjectLinksList, ProjectLink, ProjectIcon } from "./Projects.styled";

export const MyProjects = () => {
    return (
        <Container>
            <Section>
                <ProjectsPageTitle>Projects</ProjectsPageTitle>
                <ProjectsList>
                    <ProjectItem>
                        <ProjectImg src={webstudio} alt="Webstudio" width="325" />
                        <ProjectWrapper>
                            <ProjectTitle>WebStudio</ProjectTitle>
                            <ProjectDescription>A website of WebStudio company. Responsive design, transform effects, modal windows.</ProjectDescription>
                            <ProjectType>Individual project.</ProjectType>
                            <ProjectStack><StackTitle>Tech stack</StackTitle>: HTML, SASS, JS</ProjectStack>
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
                    <ProjectItem>
                        <ProjectImg src={mimino} alt="Mimino" width="325" />
                        <ProjectWrapper>
                            <ProjectTitle>Mimino</ProjectTitle>
                            <ProjectDescription>A website of Mimino Hotel, Restaurant. Adaptive design, sliders, modal windows.</ProjectDescription>
                            <ProjectType>Team project (Restaurant Menu section).</ProjectType>
                            <ProjectStack><StackTitle>Tech stack</StackTitle>: HTML, SASS, JS, Parcel</ProjectStack>
                            <ProjectLinksList>
                                <li>
                                    <ProjectLink
                                        href="https://alexkabaiev.github.io/project-13/"
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
                                        href="https://github.com/AlexKabaiev/project-13"
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
                    <ProjectItem>
                        <ProjectImg src={news} alt="News" width="325" />
                        <ProjectWrapper>
                            <ProjectTitle>News App</ProjectTitle>
                            <ProjectDescription>Adaptive design, news/weather API requests, pagination,theme change, calendar, burger menu.</ProjectDescription>
                            <ProjectType>Team project (Weather Forecast section).</ProjectType>
                            <ProjectStack><StackTitle>Tech stack</StackTitle>: HTML, SASS, JS, Parcel</ProjectStack>
                            <ProjectLinksList>
                                <li>
                                    <ProjectLink
                                        href="https://tkachenko01001.github.io/news-project/"
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
                                        href="https://github.com/Tkachenko01001/news-project"
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
                    <ProjectItem>
                        <ProjectImg src={phonebook} alt="Phonebook" width="325" />
                        <ProjectWrapper>
                            <ProjectTitle>Phonebook App</ProjectTitle>
                            <ProjectDescription>Phonebook app on React/Redux Toolkit, user registration, login, add/delete contacts.</ProjectDescription>
                            <ProjectType>Individual project.</ProjectType>
                            <ProjectStack><StackTitle>Tech stack</StackTitle>: HTML, Emotion, React/Redux</ProjectStack>
                            <ProjectLinksList>
                                <li>
                                    <ProjectLink
                                        href="https://ianakozma.github.io/goit-react-hw-08-phonebook/"
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
                                        href="https://github.com/IanaKozma/goit-react-hw-08-phonebook"
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
                </ProjectsList>
            </Section>
        </Container>
    );
};