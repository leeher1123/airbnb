import React from 'react';
import styled from 'styled-components';

import PlaceList from './PlaceList';

const Place = () => (
  <Container>
    <Section>
      <h2>설레는 다음 여행을 위한 아이디어</h2>
      <PlaceList />
    </Section>
  </Container>
);

const Container = styled.div`
  padding: 96px 0 0;
  margin: 0 80px;
`;

const Section = styled.div`
  h2 {
    font-size: 42px;
    font-weight: 600;
    line-height: 47px;
    color: #222;
    padding-bottom: 48px;
  }
`;

export default Place;
