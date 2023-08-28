import React from 'react';
import { Routes, Route } from 'react-router';
import styled from 'styled-components';

import { Link } from 'react-router-dom';
import Blog from '../Blog/Blog';
import Projects from '../Projects/Projects';

const MainWrapper = styled.div`
  background-color: ${props => props.theme.colors.secondary};
  display: flex;
  height: 100vh;
`;
const MainSideBar = styled.aside`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${props => props.theme.colors.primary};
  box-shadow: 0px 4px 70px -25px rgb(116, 105, 98);
  color: ${props => props.theme.colors.header};
  font-family: ${props => props.theme.fontFamily};
`;
const MainSideBarTitle = styled.div`
  font-size: ${props => props.theme.fontSizes.title};
  font-weight: bold; 
  margin-left: 10px;
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
  color: ${props => props.theme.colors.header};
`;
const MainSideBarNav = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  color: ${props => props.theme.colors.header};
  margin-left: 20px;
  a {
    text-decoration: none;
    color: ${props => props.theme.colors.secondary};
    height: 30px;
    font-size: 20px;
    font-weight: 600;
    &:hover {
      color: ${props => props.theme.colors.hover};
    }
  }
`;
const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  flex: 3;
  height: 100vh;
  padding: 20px;
  overflow-y: auto;
  color: ${props => props.theme.colors.text};
`;

const ThemeSwitcher = styled.div`
  display: flex;
  height: 40px;
  margin-left: 20px;
  width: 45%;
  justify-content: space-between;
  align-items: center;
`;
const ThemeSwitcherOption = styled.div`
  display: flex;
  color: ${props => props.theme.colors.header};
  &:hover {
    color: ${props => props.theme.colors.hover};
    cursor: pointer;
  }
`;

function Main( { setThemeType }: any ) {
  return (
      <MainWrapper>
          <MainSideBar>
              <MainSideBarTitle>
                <div>MICHAEL MAHONEY</div>
              </MainSideBarTitle>
              <MainSideBarNav>
                <Link to={"/"}>PROJECTS</Link>
                <Link to={"/blog"}>BLOG</Link>
                <Link to={"/about"}>ABOUT</Link>
              </MainSideBarNav>
              <ThemeSwitcher>
                <ThemeSwitcherOption onClick={()=>{
                  setThemeType('DEFAULT')
                }}>
                  DEFAULT
                </ThemeSwitcherOption>
                {' / '}
                <ThemeSwitcherOption onClick={()=>{
                  setThemeType('DARK')
                }}>
                  RETRO
                </ThemeSwitcherOption>
              </ThemeSwitcher>
          </MainSideBar>
          <MainContent>
            <Routes>
              <Route path="/blog" element={ <Blog /> } />
              <Route path="/" element={ <Projects /> } />
            </Routes>
          </MainContent>
      </MainWrapper>
  );
}

export default Main;