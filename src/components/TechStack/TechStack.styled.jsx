import styled from "styled-components";
import { SectionTitle } from "../../pages/About/About.styled";

export const Section = styled.section`
    padding-bottom: 30px;
`;

export const ProjectsPageTitle = styled(SectionTitle)`
    text-align: center;
`;

export const TechStackList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;

    @media screen and (min-width: 768px) {
        gap: 15px;
    }

    @media screen and (min-width: 1200px) {
        gap: 25px;
    }
`;

export const StackListItem = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: calc((100% - 30px) / 2);
    padding-bottom: 5px;

    @media screen and (min-width: 480px) {
        width: 225px;
    }

    @media screen and (min-width: 768px) {
        width: 210px;
    }
`;

export const StackIcon = styled.svg`
    width: 100px;
    height: 100px;

    &:hover {
        cursor: pointer;
        width: 120px;
        height: 120px;
    }
`;