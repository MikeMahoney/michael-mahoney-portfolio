import styled from 'styled-components';
import Collapsible from '../../../../components/Collapsible/Collapsible';

const TownshipProjectWrapper = styled.div`
  color: ${props => props.theme.colors.header};
  font-family: ${props => props.theme.fontFamily};
  background-color: ${props => props.theme.colors.primary};
  border: 1px solid;
  border-color: ${props => props.theme.colors.secondary};
  border-radius: 3px;
  padding: 5px 10px;
  width: fit-content;
`;
const TownshipProjectHeader = styled.div`
  font-size: 16px;
  height: 30px;
  line-height: 30px;
  font-weight: 600;
`;
const TownshipProjectDescription = styled.div`
  margin-bottom: 10px;
`;
const TownshipProjectWidget = styled.div`
  margin: 10px 0;
`;

function TownshipProject () {
  return (
    <TownshipProjectWrapper>
      <TownshipProjectHeader>TOWN-SHIP DREAM ESCAPE</TownshipProjectHeader>
      <TownshipProjectDescription>
        A first-person puzzle/side-scrolling shooter made in Unity.
        Available to download for free from Itch.io.
      </TownshipProjectDescription>
      <Collapsible title="Links" active>
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
      </Collapsible>
      <Collapsible title="Screenshots"></Collapsible>
    </TownshipProjectWrapper>
  );
}

export default TownshipProject;