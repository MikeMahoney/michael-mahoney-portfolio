import styled from "styled-components";

export const MainWrapper = styled.div`
  background-color: ${props => props.theme.colors.primary};
  display: flex;
  flex-direction: column;
  height: 100vh;
`;

export const MainHeader = styled.aside`
  display: flex;
  justify-content: space-between;
  align-itemns: center;
  background-color: ${props => props.theme.colors.primary};
  box-shadow: 0px 4px 40px -25px rgb(116, 105, 98);
  color: ${props => props.theme.colors.header};
  font-family: ${props => props.theme.headerFont};
  padding: 0 20px;
`;

export const MainHeaderTitle = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 10px;
  color: ${props => props.theme.colors.header};
  font-size: ${props => props.theme.fontSizes.title};
  font-weight: bold;
`;

export const MainHeaderNav = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex: 1;
  color: ${props => props.theme.colors.header};
  margin-left: 20px;
  a {
    text-decoration: none;
    color: ${props => props.theme.colors.secondary};
    height: 30px;
    line-height: 30px;
    font-size: 20px;
    font-weight: 600;
    &:hover {
      color: ${props => props.theme.colors.hover};
    }
  }
`;
export const MainHeaderNavLinks = styled.div`
  display: flex;
  gap: 20px;
`;

export const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  padding: 20px;
  overflow-y: auto;
  color: ${props => props.theme.colors.text};
  min-width: 617px;
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