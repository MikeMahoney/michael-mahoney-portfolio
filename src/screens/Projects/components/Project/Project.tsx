import Collapsible from '../../../../components/Collapsible/Collapsible';
import {
  ProjectDescription,
  ProjectHeader,
  ProjectWrapper,
} from './ProjectStyles';
import { ReactNode } from 'react';

interface IProject {
  title: string;
  description: string;
  links: ReactNode;
  screenshots: ReactNode;
}

const Project: React.FC<IProject> = ({ title, description, links, screenshots }) => {
  return (
    <ProjectWrapper>
      <ProjectHeader>{title}</ProjectHeader>
      <ProjectDescription>
        {description}
      </ProjectDescription>
      <Collapsible title="Links" active>
        {links}
      </Collapsible>
      <Collapsible title="Screenshots">
        {screenshots}
      </Collapsible>
    </ProjectWrapper>
  );
}

export default Project;