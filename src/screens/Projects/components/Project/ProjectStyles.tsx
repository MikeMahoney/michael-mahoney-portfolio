import styled from "styled-components";

export const ProjectWrapper = styled.div`
  color: ${props => props.theme.colors.primary};
  background-color: ${props => props.theme.colors.secondary};
  border: 1px solid;
  padding: 5px 10px 20px 10px;
  width: 80%;
  min-width: 580px;
`;

export const ProjectHeader = styled.div`
  font-size: 16px;
  height: 30px;
  line-height: 30px;
  font-weight: 600;
  font-family: ${props => props.theme.headerFont};
`;

export const ProjectDescription = styled.div`
  margin-bottom: 10px;
  font-family: ${props => props.theme.contentFont};
`;