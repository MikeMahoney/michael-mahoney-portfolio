import styled from 'styled-components';

export const ThumbnailWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-content: center;
  flex-direction: column;
  margin: 40px 20px 40px 20px;
`;

export const ThumbnailImage = styled.img`
  max-width: 70%;
  height: auto;
  &:hover{
    cursor: pointer;
  }
`;