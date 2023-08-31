import styled from "styled-components";

export const BlogItem = styled.div`
  background-color: ${props => props.theme.colors.primary};
  padding: 10px 20px;
  margin-bottom: 20px;
`;

export const BlogItemYear = styled.div`
  font-family: ${props => props.theme.fontFamily};
  font-size: 32px;
  font-weight: 500;
  text-align: right;
  color: ${props => props.theme.colors.primary};
`;

export const BlogItemTitle = styled.div`
  color: ${props => props.theme.colors.header};
  font-family: ${props => props.theme.fontFamily};
  font-size: ${props => props.theme.fontSizes.title};
  font-weight: 500;
`;

export const BlogItemDescription = styled.div`
  margin-top: 10px;
`;

export const BlogItemContent = styled.div`
  margin-top: 20px;
`;