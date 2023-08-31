import { TownshipWidgetWrapper } from './TownshipWidgetStyles';

interface ITownshipWidget { }

const TownshipWidget: React.FC<ITownshipWidget> = () => {
  return (
    <TownshipWidgetWrapper>
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
    </TownshipWidgetWrapper>
  );
}

export default TownshipWidget;