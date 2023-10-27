import styled from "styled-components";

export const Section = styled.section`
    color: var(--white-color);

    @media screen and (min-width: 1200px) {
        padding: 0 100px;
    }
`;

export const SectionTitle = styled.h2`
    padding: 18px 0;
    background: linear-gradient(315deg, #ee9617, #fe5858);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: var(--primary-bold);
    font-size: 30px;
    line-height: 38px;

    @media screen and (min-width: 768px) {
        padding: 28px 0;
        font-size: 38px;
        line-height: 45px;
    }

    @media screen and (min-width: 1200px) {
        padding: 38px 0;
        font-size: 42px;
        line-height: 52px;
    }
`;

export const Summary = styled.p`
    font-family: var(--primary-regular);
    font-size: 14px;
    line-height: 18px;

    @media screen and (min-width: 768px) {
        width: 500px;
        font-size: 16px;
        line-height: 22px;
    }

    @media screen and (min-width: 1200px) {
        width: 600px;
        font-size: 18px;
        line-height: 26px;
    }
`;

export const AboutList = styled.ul`
    padding: 0;
`;

export const WorkItem = styled.li`
    border-bottom: 2px solid var(--nav-subtitle-color);
    padding-bottom: 24px;

    &:not(:first-child) {
        padding-top: 30px;
    }
`;

export const JobDescription = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 4px;
    padding-right: 18px;
`;

export const JobTitle = styled.h3`
    font-family: var(--primary-regular);
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 1px;
    width: 300px;

    @media screen and (min-width: 768px) {
        font-size: 20px;
        line-height: 28px;
        width: 600px;
    }
`;

export const JobTime = styled.p`
    font-family: var(--primary-semibold);
    font-size: 9px;
    line-height: 26px;
    border: 1px solid var(--jobtime-bg-color);
    border-radius: 12px;
    padding: 1px 22px;
    background-color: var(--jobtime-bg-color);
    color: var(--jobtime-text-color);
`;

export const Icon = styled.svg`
    margin-right: 5px;
`;

export const JobDetails = styled.div`
    color: var(--primary-medium);
    font-size: 12px;
    line-height: 28px;
    letter-spacing: 1px;

    @media screen and (min-width: 1200px) {
        display: flex;
        align-items: center;
    }
`;

export const OfficeName = styled.p`
    display: flex;
    align-items: center;

    @media screen and (min-width: 1200px) {
        width: 320px;
    }
`;

export const OfficeLocation = styled.p`
    display: flex;
    align-items: center;

    @media screen and (min-width: 1200px) {
        margin-right: auto;
    }
`;

export const JobPeriod = styled.p`
    display: flex;
    align-items: center;
`;

export const LanguagesWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 300px;
`;

export const LanguagesItem = styled.li`
    &:not(:last-child) {
        margin-bottom: 15px;
    }
`;

export const CvLink = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 150px;
    margin: 40px auto;
    gap: 7px;
    padding: 10px 15px;
    border-radius: 5px;
    border: none;
    background: linear-gradient(#13B0F5, #E70FAA);
    color: var(--black-color);

    &:hover,
    &:focus {
        fill: var(--white-color);
        stroke: var(--white-color);
        color: var(--white-color);
    }
`;