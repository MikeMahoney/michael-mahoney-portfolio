import { Routes, Route } from 'react-router';
import { Link } from 'react-router-dom';
import Blog from '../Blog/Blog';
import Projects from '../Projects/Projects';
import {
  MainContent,
  MainHeader,
  MainHeaderNav,
  MainHeaderNavLinks,
  MainHeaderTitle,
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
      <MainHeader>
        <MainHeaderTitle>
          {/* <RetroLogo /> */}
          <div>MICHAEL MAHONEY</div>
        </MainHeaderTitle>
        <MainHeaderNav>
          <MainHeaderNavLinks>
            <Link to={"/"}>PROJECTS</Link>
            <Link to={"/blog"}>BLOG</Link>
            <Link to={"/about"}>ABOUT</Link>
          </MainHeaderNavLinks>
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
        </MainHeaderNav>
      </MainHeader>
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