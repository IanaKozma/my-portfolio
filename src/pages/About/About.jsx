import { Container } from "../../components/Header/Header.styled";
import sprite from "../../images/sprite.svg";
import { Section, EducationSection, SectionTitle, Summary, WorkItem, JobDescription, JobTitle, JobTime, Icon, JobDetails, OfficeName, OfficeLocation, JobPeriod } from "./About.styled";

export const About = () => {
  return (
    <main>
      <Container>
        <Section>
          <SectionTitle>About Me</SectionTitle>
          <Summary>
            I am a motivated Junior Web Developer eager to learn and constantly perfectionate my skills. I am responsible, attentive to details and able to work on my own, being a team-player at the same time. I like challenges and will do my best to fullfill any task assigned to me.
          </Summary>
        </Section>
        <Section>
          <SectionTitle>Work Experience</SectionTitle>
          <ul>
            <WorkItem>
              <JobDescription>
                <JobTitle>Sales Area Manager</JobTitle>
                <JobTime>Full-time</JobTime>
              </JobDescription>
              <JobDetails>
                <OfficeName>
                  <Icon width="16" height="12">
                    <use href={sprite + "#icon-office"}></use>
                  </Icon>
                  Auger Autotechnik GmbH
                </OfficeName>
                <OfficeLocation>
                  <Icon width="16" height="12">
                    <use href={sprite + "#icon-location"}></use>
                  </Icon>
                  Cologne, Germany
                </OfficeLocation>
                <JobPeriod>
                  <Icon width="16" height="12">
                    <use href={sprite + "#icon-calendar"}></use>
                  </Icon>
                  May 2015 - Jul 2023
                </JobPeriod>
              </JobDetails>
            </WorkItem>
            <WorkItem>
              <JobDescription>
                <JobTitle>International Reservations Agent</JobTitle>
                <JobTime>Full-time</JobTime>
              </JobDescription>
              <JobDetails>
                <OfficeName>
                  <Icon width="16" height="12">
                    <use href={sprite + "#icon-office"}></use>
                  </Icon>
                  Sixt GmbH & Co. Autovermietung KG
                </OfficeName>
                <OfficeLocation>
                  <Icon width="16" height="12">
                    <use href={sprite + "#icon-location"}></use>
                  </Icon>
                  Rostock, Germany
                </OfficeLocation>
                <JobPeriod>
                  <Icon width="16" height="12">
                    <use href={sprite + "#icon-calendar"}></use>
                  </Icon>
                  Jul 2014 - Feb 2015
                </JobPeriod>
              </JobDetails>
            </WorkItem>
            <WorkItem>
              <JobDescription>
                <JobTitle>Project Coordinator</JobTitle>
                <JobTime>Full-time</JobTime>
              </JobDescription>
              <JobDetails>
                <OfficeName>
                  <Icon width="16" height="12">
                    <use href={sprite + "#icon-office"}></use>
                  </Icon>
                  Abaden Dentistas S.A.
                </OfficeName>
                <OfficeLocation>
                  <Icon width="16" height="12">
                    <use href={sprite + "#icon-location"}></use>
                  </Icon>
                  Barcelona, Spain
                </OfficeLocation>
                <JobPeriod>
                  <Icon width="16" height="12">
                    <use href={sprite + "#icon-calendar"}></use>
                  </Icon>
                  Dec 2013 - Jan 2014
                </JobPeriod>
              </JobDetails>
            </WorkItem>
            <WorkItem>
              <JobDescription>
                <JobTitle>Commercial Director</JobTitle>
                <JobTime>Part-time</JobTime>
              </JobDescription>
              <JobDetails>
                <OfficeName>
                  <Icon width="16" height="12">
                    <use href={sprite + "#icon-office"}></use>
                  </Icon>
                  Shik Barcelona VIP S.L.
                </OfficeName>
                <OfficeLocation>
                  <Icon width="16" height="12">
                    <use href={sprite + "#icon-location"}></use>
                  </Icon>
                  Barcelona, Spain
                </OfficeLocation>
                <JobPeriod>
                  <Icon width="16" height="12">
                    <use href={sprite + "#icon-calendar"}></use>
                  </Icon>
                  May 2012 - Jun 2013
                </JobPeriod>
              </JobDetails>
            </WorkItem>
            <WorkItem>
              <JobDescription>
                <JobTitle>Youth Officer</JobTitle>
                <JobTime>Full-time</JobTime>
              </JobDescription>
              <JobDetails>
                <OfficeName>
                  <Icon width="16" height="12">
                    <use href={sprite + "#icon-office"}></use>
                  </Icon>
                  Youth Council "La Palma"
                </OfficeName>
                <OfficeLocation>
                  <Icon width="16" height="12">
                    <use href={sprite + "#icon-location"}></use>
                  </Icon>
                  Lleida, Spain
                </OfficeLocation>
                <JobPeriod>
                  <Icon width="16" height="12">
                    <use href={sprite + "#icon-calendar"}></use>
                  </Icon>
                  Sep 2010 - Jun 2011
                </JobPeriod>
              </JobDetails>
            </WorkItem>
          </ul>
        </Section>
        <EducationSection>
          <SectionTitle>Education</SectionTitle>
          <ul>
            <WorkItem>
              <JobDescription>
                <JobTitle>Fullstack Developer</JobTitle>
                <JobTime>Full-time</JobTime>
              </JobDescription>
              <JobDetails>
                <OfficeName>
                  <Icon width="16" height="12">
                    <use href={sprite + "#icon-office"}></use>
                  </Icon>
                  GoIT School
                </OfficeName>
                <OfficeLocation>
                  <Icon width="16" height="12">
                    <use href={sprite + "#icon-location"}></use>
                  </Icon>
                  Ukraine (Remote)
                </OfficeLocation>
                <JobPeriod>
                  <Icon width="16" height="12">
                    <use href={sprite + "#icon-calendar"}></use>
                  </Icon>
                  Sep 2022 - Aug 2023
                </JobPeriod>
              </JobDetails>
            </WorkItem>
            <WorkItem>
              <JobDescription>
                <JobTitle>Master in International Economy</JobTitle>
                <JobTime>Full-time</JobTime>
              </JobDescription>
              <JobDetails>
                <OfficeName>
                  <Icon width="16" height="12">
                    <use href={sprite + "#icon-office"}></use>
                  </Icon>
                  Universitat de Barcelona
                </OfficeName>
                <OfficeLocation>
                  <Icon width="16" height="12">
                    <use href={sprite + "#icon-location"}></use>
                  </Icon>
                  Barcelona, Spain
                </OfficeLocation>
                <JobPeriod>
                  <Icon width="16" height="12">
                    <use href={sprite + "#icon-calendar"}></use>
                  </Icon>
                  Sep 2011 - Feb 2013
                </JobPeriod>
              </JobDetails>
            </WorkItem>
            <WorkItem>
              <JobDescription>
                <JobTitle>Master in Spanish and English Philology, Translation</JobTitle>
                <JobTime>Full-time</JobTime>
              </JobDescription>
              <JobDetails>
                <OfficeName>
                  <Icon width="16" height="12">
                    <use href={sprite + "#icon-office"}></use>
                  </Icon>
                  V. N. Karazin Kharkiv National University
                </OfficeName>
                <OfficeLocation>
                  <Icon width="16" height="12">
                    <use href={sprite + "#icon-location"}></use>
                  </Icon>
                  Kharkiv, Ukraine
                </OfficeLocation>
                <JobPeriod>
                  <Icon width="16" height="12">
                    <use href={sprite + "#icon-calendar"}></use>
                  </Icon>
                  Sep 2005 - Jul 2010
                </JobPeriod>
              </JobDetails>
            </WorkItem>
          </ul>
        </EducationSection>
      </Container>
    </main>
  );
};