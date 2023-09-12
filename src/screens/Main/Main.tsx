import { Routes, Route } from 'react-router';
import { Link } from 'react-router-dom';
import Blog from '../Blog/Blog';
import Projects from '../Projects/Projects';
import {
  MainContent,
  MainSideBar,
  MainSideBarNav,
  MainSideBarTitle,
  MainWrapper,
  ThemeSwitcher,
  ThemeSwitcherOption
} from './MainStyles';
import RetroLogo from './components/RetroLogo';

interface IMain {
  setThemeType: Function;
}

const Main: React.FC<IMain> = ({ setThemeType }) => {
  return (
    <MainWrapper>
      <MainSideBar>
        <MainSideBarTitle>
          {/* <RetroLogo /> */}
          <div>MICHAEL MAHONEY</div>
        </MainSideBarTitle>
        <MainSideBarNav>
          <Link to={"/"}>PROJECTS</Link>
          <Link to={"/blog"}>BLOG</Link>
          <Link to={"/about"}>ABOUT</Link>
        </MainSideBarNav>
        <ThemeSwitcher>
          <ThemeSwitcherOption onClick={() => {
            setThemeType('DEFAULT')
          }}>
            DEFAULT
          </ThemeSwitcherOption>
          {' / '}
          <ThemeSwitcherOption onClick={() => {
            setThemeType('DARK')
          }}>
            RETRO
          </ThemeSwitcherOption>
        </ThemeSwitcher>
      </MainSideBar>
      <MainContent>
        <Routes>
          <Route path="/blog" element={<Blog />} />
          <Route path="/" element={<Projects />} />
        </Routes>
      </MainContent>
    </MainWrapper>
  );
}

export default Main;