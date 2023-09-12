import styled from "styled-components";

export const ProjectWrapper = styled.div`
  color: ${props => props.theme.colors.header};
  font-family: ${props => props.theme.fontFamily};
  background-color: ${props => props.theme.colors.primary};
  border: 1px solid;
  border-color: ${props => props.theme.colors.secondary};
  border-radius: 3px;
  padding: 5px 10px 20px 10px;
  width: 80%;
  min-width: 580px;
`;

export const ProjectHeader = styled.div`
  font-size: 16px;
  height: 30px;
  line-height: 30px;
  font-weight: 600;
`;

export const ProjectDescription = styled.div`
  margin-bottom: 10px;
`;