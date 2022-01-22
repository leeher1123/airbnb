import React from 'react';
import styled from 'styled-components';

import { appData } from '../../../../appData';
import PlaceItem from './PlaceItem';

const PlaceList = () => (
  <Container>
    <List>
      {
        appData.map((item) => <PlaceItem item={item} />)
      }
    </List>
  </Container>
);

const Container = styled.div`

`;

const List = styled.div`
  display: grid;
  grid-template-columns: 302px 302px 302px 302px;
  grid-template-rows: 402.656px;
  column-gap: 24px;
`;

export default PlaceList;
