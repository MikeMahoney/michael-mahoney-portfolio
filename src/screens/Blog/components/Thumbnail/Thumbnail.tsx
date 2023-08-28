import React from 'react';
import styled from 'styled-components';

const ThumbnailWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-content: center;
  flex-direction: column;
  margin: 40px 20px 40px 20px;
`;
const ThumbnailImage = styled.img`
  max-width: 70%;
  height: auto;
  &:hover{
    cursor: pointer;
  }
`;

function Thumbnail(props: any) {
  return (
      <ThumbnailWrapper>
        <ThumbnailImage
          width={props.width}
          height={props.height}
          src={props.image}
          alt={props.title}
        />
      </ThumbnailWrapper>
  );
}

export default Thumbnail;