import React from 'react';
import styled from 'styled-components';

import { appData } from '../../../../appData';
import PlaceItem from './PlaceItem';

const PlaceList = () => (
  <Container>
    <List>
      {
        appData.map((item) => <PlaceItem item={item} key={item.id} />)
      }
    </List>
  </Container>
);

const Container = styled.div`
  
`;

const List = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default PlaceList;
