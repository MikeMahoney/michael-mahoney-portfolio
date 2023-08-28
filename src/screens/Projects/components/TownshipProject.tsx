import React from 'react';
import styled from 'styled-components';

const TownshipProjectWrapper = styled.div`
  background-color: ${props => props.theme.colors.primary};
  border: 1px solid;
  border-color: ${props => props.theme.colors.secondary};
  border-radius: 3px;
  padding: 5px 10px;
`;
const TownshipProjectHeader = styled.div`
  color: ${props => props.theme.colors.secondary};
  font-family: ${props => props.theme.fontFamily};
  font-size: 16px;
  font-weight: 500;
`;
const TownshipProjectWidget = styled.div``;

function TownshipProject () {
  return (
    <TownshipProjectWrapper>
      <TownshipProjectHeader>TOWN-SHIP DREAM ESCAPE</TownshipProjectHeader>
      <TownshipProjectWidget>
        <iframe
          src="https://itch.io/embed/2219629?bg_color=222222&amp;fg_color=eeeeee&amp;link_color=BF2222&amp;border_color=363636"
          width="552"
          height="167"
          title="Town-Ship Dream Escape"
        >
          <a href="https://mikemahoney.itch.io/town-ship-dream-escape">
            Town-Ship Dream Escape by MikeMahoney
          </a>
        </iframe>
      </TownshipProjectWidget>
    </TownshipProjectWrapper>
  );
}

export default TownshipProject;