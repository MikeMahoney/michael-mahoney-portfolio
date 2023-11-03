import styled from "styled-components";

export const CollapsibleWrapper = styled.div`
  color: ${props => props.theme.colors.primary};
  font-weight: 600;
  margin-top: 3px;
`;

export const CollapsibleHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: ${props => props.theme.headerFont};
  border-top: 1px solid ${props => props.theme.colors.primary};
  border-bottom: 1px solid ${props => props.theme.colors.primary};
  height: 30px;
  padding-right: 10px;
  &:hover {
    cursor: pointer;
  }
`;

export const CollapsibleCaretOpen = styled.div`
  font-size: 15px;
`;

export const CollapsibleCaretClosed = styled.div`
  font-size: 15px;
`;

export const CollapsibleContent = styled.div`
  font-family: ${props => props.theme.contentFont};
`;