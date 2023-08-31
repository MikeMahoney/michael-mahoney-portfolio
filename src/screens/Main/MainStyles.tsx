import styled from "styled-components";

export const MainWrapper = styled.div`
  background-color: ${props => props.theme.colors.primary};
  display: flex;
  height: 100vh;
`;

export const MainSideBar = styled.aside`
  display: flex;
  width: 270px;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${props => props.theme.colors.primary};
  box-shadow: 0px 4px 40px -25px rgb(116, 105, 98);
  color: ${props => props.theme.colors.header};
  font-family: ${props => props.theme.fontFamily};
  padding: 0 20px;
`;

export const MainSideBarTitle = styled.div`
  font-size: ${props => props.theme.fontSizes.title};
  font-weight: bold;
  display: flex;
  justify-content: center;
  margin: 20px 10px;
  color: ${props => props.theme.colors.header};
`;

export const MainSideBarNav = styled.div`
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

export const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  padding: 20px;
  overflow-y: auto;
  color: ${props => props.theme.colors.text};
  width: 60%;
  min-width: 617px;
  margin-left: auto;
  margin-right: auto;
`;

export const ThemeSwitcher = styled.div`
  display: flex;
  height: 40px;
  margin-left: 20px;
  width: 135px;
  justify-content: space-between;
  align-items: center;
`;

export const ThemeSwitcherOption = styled.div`
  display: flex;
  color: ${props => props.theme.colors.header};
  &:hover {
    color: ${props => props.theme.colors.hover};
    cursor: pointer;
  }
`;