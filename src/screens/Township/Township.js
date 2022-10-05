import React from 'react';
import styled from 'styled-components';

const TownshipWrapper = styled.div`
  background-color: white;
`;
const TownshipHeader = styled.div`
  color: #bf2222;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-size: 48px;
  font-weight: 500;
  text-align: center;
`;

function Township () {
  return (
    <TownshipWrapper>
      <TownshipHeader>TOWNSHIP PROJECT</TownshipHeader>
    </TownshipWrapper>
  );
}

export default Township;