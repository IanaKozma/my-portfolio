import styled from "styled-components";

export const ProjectItem = styled.li`
    /* border-radius: 20px; */
`;

export const ProjectImg = styled.img`
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
`;

export const ProjectWrapper = styled.div`
    width: 325px;
    padding: 25px;
    background-color: var(--project-bg-color);
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
`;

export const ProjectTitle = styled.h3`
    margin-bottom: 17px;
    font-family: var(--primary-medium);
    font-size: 28px;
    line-height: 26px;
    color: var(--title-color);
`;

export const ProjectDescription = styled.p`
    font-family: var(--primary-light);
    font-size: 18px;
    line-height: 26px;
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

export const ProjectLinksList = styled.ul`
    display: flex;
    align-items: center;
    gap: 48px;
`;

export const ProjectLink = styled.a`
    display: flex;
    align-items: center;
    font-family: var(--primary-regular);
    font-size: 16px;
    line-height: 26px;
    color: var(--white-color);
    fill: var(--white-color);

    &:hover,
    &:focus {
        color: var(--nav-hover-color);
        fill: var(--nav-hover-color);
    }
`;

export const ProjectIcon = styled.svg`
    margin-right: 10px;
`;