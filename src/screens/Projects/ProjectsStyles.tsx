import styled from "styled-components";

export const ProjectsWrapper = styled.div`
  padding: 10px 20px;
  border-radius: 3px;
`;

export const ProjectsHeader = styled.div`
  color: ${props => props.theme.colors.header};
  font-family: ${props => props.theme.headerFont};
  font-size: 24px;
  font-weight: 600;
`;

export const ProjectsContent = styled.div`
  display: flex;
  flex-direction: column;
  color: ${props => props.theme.colors.header};
  font-size: 18px;
  font-weight: 500;
  margin-top: 10px;
  gap: 20px;
`;