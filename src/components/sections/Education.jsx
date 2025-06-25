import React from 'react';
import styled from 'styled-components';
import { education } from '../../data/constants';
import EducationCard from '../cards/EducationCard';
import Tilt from 'react-parallax-tilt';
import EarthCanvas from '../canvas/Earth';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
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

const Education = () => {
  return (
    <Container id="Education">
      <Wrapper>
        <Title>Education</Title>
        <Desc>
          My academic background and coursework experiences.
        </Desc>
        <Timeline>
          {education.map((education, index) => (
            <Tilt key={`education-${index}`} glareEnable={false} scale={1.05}>
            <EducationCard education={education} />
          </Tilt>
          ))}
        </Timeline>
        <EarthCanvas />
      </Wrapper>
    </Container>
  );
};

export default Education;
