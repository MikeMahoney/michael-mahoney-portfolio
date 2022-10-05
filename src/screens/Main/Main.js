import React from 'react';
import { Routes, Route } from 'react-router';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Blog from '../Blog/Blog';
import Township from '../Township/Township';

const MainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #bf2222;
`;
const MainHeader = styled.header`
  position: fixed;
  width: 300px;
  display: flex;
  flex-direction: column;
  background-color: white;
  box-shadow: 0px 4px 70px -25px rgb(116, 105, 98);
  height: 100%;
  color: #bf2222;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  a {
    text-decoration: none;
    color: #bf2222;
    margin-left: 20px;
    height: 30px;
    font-size: 20px;
    font-weight: 600;
    &:hover {
      color: black;
    }
  }
`;
const MainHeaderNav = styled.div`
  display: flex;
  flex-direction: column;
`;
const MainTitle = styled.div`
  font-size: 300%;
  font-weight: bold; 
  margin-left: 10px;
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
`;
const MainContent = styled.div`
  margin-top: 20px;
  margin-right: 20px;
  margin-left: 320px;
`;

function Main () {
  return (
      <MainWrapper>
          <MainHeader>
              <MainTitle>
                <div>MICHAEL MAHONEY</div>
              </MainTitle>
              <MainHeaderNav>
                <Link to={"/"}>BLOG</Link>
                <Link to={"/township"}>TOWNSHIP PROJECT</Link>
              </MainHeaderNav>
          </MainHeader>
          <MainContent>
            <Routes>
              <Route path="/" element={ <Blog /> } />
              <Route path="/township" element={ <Township /> } />
            </Routes>
          </MainContent>
      </MainWrapper>
  );
}

export default Main;