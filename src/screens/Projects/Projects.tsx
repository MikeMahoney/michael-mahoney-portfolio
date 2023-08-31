import React, { Fragment } from 'react';
import Project from './components/Project/Project';
import { ProjectsContent, ProjectsHeader, ProjectsWrapper } from './ProjectsStyles';
import Thumbnail from '../../components/Thumbnail/Thumbnail';
import TownshipWidget from './components/TownshipWidget/TownshipWidget';

import ScreenshotCell from '../../images/townshipScreenshots/tsScreenshot1.png';
import ScreenshotTown from '../../images/townshipScreenshots/tsScreenshot2.png';
import ScreenshotClub from '../../images/townshipScreenshots/tsScreenshot3.png';
import ScreenshotGun from '../../images/townshipScreenshots/tsScreenshot4.png';
import ScreenshotHall from '../../images/townshipScreenshots/tsScreenshot5.png';
import ScreenshotNPC from '../../images/townshipScreenshots/tsScreenshot6.png';

interface IProjects { }

const Projects: React.FC<IProjects> = () => {
  return (
    <ProjectsWrapper>
      <ProjectsHeader>PROJECTS</ProjectsHeader>
      <ProjectsContent>
        <Project
          title="TOWN-SHIP DREAM ESCAPE"
          description="A first-person puzzle/side-scrolling shooter made in Unity.
          Available to download for free from Itch.io."
          links={<TownshipWidget />}
          screenshots={
            <Fragment>
              <Thumbnail image={ScreenshotCell} />
              <Thumbnail image={ScreenshotTown} />
              <Thumbnail image={ScreenshotClub} />
              <Thumbnail image={ScreenshotGun} />
              <Thumbnail image={ScreenshotHall} />
              <Thumbnail image={ScreenshotNPC} />
            </Fragment>
          }
        />
        <Project
          title="HOLLY WALSH ARTIST WEBSITE"
          description="A portfolio website I created to showcase the works of the artist Holly Walsh."
          links={"Website is currently down."}
          screenshots={
            <Fragment>
            </Fragment>
          }
        />
        <Project
          title="TownSimple"
          description="A straightforward WebGL town building simulator I created for my final year project at MTU.
          Built using BabylonJS."
          links={<a href="https://github.com/MikeMahoney/TownSimple">https://github.com/MikeMahoney/TownSimple</a>}
          screenshots={
            <Fragment>
            </Fragment>
          }
        />
      </ProjectsContent>
    </ProjectsWrapper>
  );
}

export default Projects;