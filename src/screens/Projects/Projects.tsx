import React from 'react';
import styled from 'styled-components';
import TownshipProject from './components/TownshipProject';

const ProjectsWrapper = styled.div`
  background-color: white;
  padding: 10px 20px;
`;
const ProjectsHeader = styled.div`
  color: #bf2222;
  font-family: ${props => props.theme.fontFamily};
  font-size: 24px;
  font-weight: 500;
`;
const ProjectsContent = styled.div`
  color: #bf2222;
  font-size: 18px;
  font-weight: 500;
  margin-top: 20px;
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