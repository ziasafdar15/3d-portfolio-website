import React from 'react';
import styled from 'styled-components';
import { experiences } from '../../data/constants';
import ExperienceCard from '../cards/ExperienceCard';
import Tilt from 'react-parallax-tilt';


const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  justify-content: center;
  margin-top: 40px;
  z-index: 1;
  padding: 50px 20px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  max-width: 900px;
  position: relative;
`;

const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};

  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 20px;
  text-align: center;
  font-weight: 400;
  color: ${({ theme }) => theme.text_secondary};
  margin: 20px 0 50px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Timeline = styled.div`
  position: relative;
  border-left: 3px solid ${({ theme }) => theme.primary};
  padding-left: 30px;
`;

const Experience = () => {
  return (
    <Container id="Experience">
      <Wrapper>
        <Title>Experience</Title>
        <Desc>
          My work experience as a Software Engineer and Full Stack Developer.
        </Desc>
        <Timeline>
          {experiences.map((experience, index) => (
            <Tilt key={`experience-${index}`} glareEnable={false} scale={1.05}>
            <ExperienceCard experience={experience} />
            </Tilt>
          ))}
        </Timeline>
      </Wrapper>
    </Container>
  );
};

export default Experience;
