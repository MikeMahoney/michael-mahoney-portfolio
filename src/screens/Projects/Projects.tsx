import React from 'react';
import styled from 'styled-components';
import TownshipProject from './components/TownshipProject/TownshipProject';

const ProjectsWrapper = styled.div`
  background-color: ${props => props.theme.colors.primary};
  padding: 10px 20px;
  border-radius: 3px;
`;
const ProjectsHeader = styled.div`
  color: ${props => props.theme.colors.header};
  font-family: ${props => props.theme.fontFamily};
  font-size: 24px;
  font-weight: 600;
`;
const ProjectsContent = styled.div`
  color: ${props => props.theme.colors.header};
  font-size: 18px;
  font-weight: 500;
  margin-top: 10px;
`;

function Projects () {
  return (
    <ProjectsWrapper>
      <ProjectsHeader>PROJECTS</ProjectsHeader>
      <ProjectsContent>
        <TownshipProject />
      </ProjectsContent>
    </ProjectsWrapper>
  );
}

export default Projects;