import React, { useState } from 'react';
import styled from 'styled-components';
import { projects } from '../../data/constants';
import ProjectCard from '../cards/ProjectCard';
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
  margin: 20px 0 30px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const ToggleButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 40px;
  gap: 10px;
`;

const ToggleButton = styled.button`
  padding: 10px 16px;
  border: 1px solid ${({ theme }) => theme.text_primary};
  background-color: ${({ active, theme }) =>
    active ? theme.primary : 'transparent'};
  color: ${({ active, theme }) =>
    active ? theme.text_secondary : theme.text_primary};
  border-radius: 8px;
  cursor: pointer;
  font-size: 14px;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${({ theme }) => theme.primary + 'DD'};
    color: ${({ theme }) => theme.text_secondary};
  }
`;

const Timeline = styled.div`
  position: relative;
  border-left: 3px solid ${({ theme }) => theme.primary};
  padding-left: 30px;
`;

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Web App", "Mobile App", "AI/Machine Learning", "Game"];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <Container id="Projects">
      <Wrapper>
        <Title>Projects</Title>
        <Desc>
          A showcase of some of the applications and projects I've built.
        </Desc>

        <ToggleButtonGroup>
          {categories.map((category) => (
            <ToggleButton
              key={category}
              active={selectedCategory === category}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>

        <Timeline>
          {filteredProjects.map((project, index) => (
            <Tilt key={`project-${index}`} glareEnable={false} scale={1.05}>
              <ProjectCard project={project} />
            </Tilt>
          ))}
        </Timeline>
      </Wrapper>
    </Container>
  );
};

export default Projects;
