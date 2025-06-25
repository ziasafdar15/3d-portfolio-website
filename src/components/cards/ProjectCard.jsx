import React from 'react';
import styled from 'styled-components';

const CardContainer = styled.div`
  position: relative;
  margin-bottom: 40px;
  padding-left: 30px;
`;

const Dot = styled.div`
  position: absolute;
  left: 0;
  top: 20px;
  width: 14px;
  height: 14px;
  background: ${({ theme }) => theme.primary};
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.text_secondary};
`;

const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  background: #1d1836;
  color: #fff;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  background-color: rgba(17, 25, 40, 0.83);
  border: 1px solid rgba(255, 255, 255, 0.125);
  border-radius: 6px;
  padding: 20px;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 20px;
    left: -7px;
    border-width: 7px;
    border-style: solid;
    border-color: transparent rgba(255, 255, 255, 0.3) transparent transparent;
  }
`;

const Top = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Name = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const Date = styled.div`
  font-size: 14px;
  font-weight: 500;
  color: ${({ theme }) => theme.text_secondary};

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const Description = styled.div`
  font-size: 15px;
  font-weight: 400;
  color: ${({ theme }) => theme.text_primary + 99};

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const TechStack = styled.div`
  margin-top: 8px;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const TechBadge = styled.div`
  background: ${({ theme }) => theme.primary};
  color: ${({ theme }) => theme.text_secondary};
  font-size: 13px;
  padding: 6px 12px;
  border-radius: 20px;
  font-weight: 500;
`;

const ProjectCard = ({ project }) => {
    return (
      <CardContainer>
        <Dot />
        <ContentBox>
          <Top>
            <Name>{project.title}</Name>
            {/* Optionally remove Category or add if your projects have it */}
            {/* <Category>{project.category}</Category> */}
            <Date>{project.date}</Date>
          </Top>
  
          <Description>{project.description}</Description>
  
          {project.tags && (
            <TechStack>
              {project.tags.map((tag, idx) => (
                <TechBadge key={idx}>{tag}</TechBadge>
              ))}
            </TechStack>
          )}
        </ContentBox>
      </CardContainer>
    );
  };
  
export default ProjectCard;
