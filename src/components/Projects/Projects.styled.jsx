import styled, { keyframes } from "styled-components";
import { fadeIn } from 'react-animations';

const fadeAnimation = keyframes`${fadeIn}`;

export const Section = styled.section`
    padding-bottom: 60px;
`;

export const ProjectsList = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0;

    @media screen and (min-width: 768px) {
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        gap: 30px;
    }
`;

export const ProjectItem = styled.li`
    transition: transform 0.25s;
    animation: 2s ${fadeAnimation};

    &:hover {
        transform: scale(1.05)
    }

    @media screen and (max-width: 767px) {
        &:not(:last-child) {
            margin-bottom: 30px;
        }
    }
    @media screen and (min-width: 768px) {
        flex-basis: calc((100% - 30px) / 2);
        width: 354px;
    }
    @media screen and (min-width: 1200px) {
        flex-basis: calc((100% - 60px) / 3);
        width: 370px;
    }
`;

export const ProjectImg = styled.img`
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
`;

export const ProjectWrapper = styled.div`
    width: 295px;
    padding: 15px;
    background-color: var(--project-bg-color);
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
`;

export const ProjectTitle = styled.h3`
    margin-bottom: 15px;
    font-family: var(--primary-medium);
    font-size: 26px;
    line-height: 24px;
    color: var(--title-color);
`;

export const ProjectDescription = styled.p`
    font-family: var(--primary-light);
    font-size: 16px;
    line-height: 24px;
    color: var(--title-color);
`;

export const ProjectType = styled(ProjectDescription)`
    height: 35px;
    margin-top: 12px;
    color: var(--title-color);
`;

export const ProjectStack = styled.p`
    margin-top: 12px;
    margin-bottom: 21px;
    font-family: var(--primary-light);
    font-size: 14px;
    line-height: 26px;
    color: var(--title-color);
`;

export const StackTitle = styled.span`
    text-decoration: underline;
`;

export const ProjectLinksList = styled.ul`
    display: flex;
    align-items: center;
    padding: 0;
    gap: 48px;
`;

export const ProjectLink = styled.a`
    display: flex;
    align-items: center;
    font-family: var(--primary-regular);
    font-size: 14px;
    line-height: 24px;
    color: var(--white-color);
    fill: var(--white-color);

    &:hover,
    &:focus {
        color: var(--project-link-color);
        fill: var(--project-link-color);
    }
`;

export const ProjectIcon = styled.svg`
    margin-right: 10px;
`;