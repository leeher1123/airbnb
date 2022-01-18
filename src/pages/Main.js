import React from 'react';
import styled from 'styled-components';

import Header from '../views/shared/components/header';
import SearchBox from '../views/shared/components/header/SearchBox';
import Visual from '../views/main/components/Visual';
import SearchBoxContainer from '../views/shared/containers/SearchBoxContainer';

const Main = () => (
  <Container>
    <TopHeader>
      <Header />
    </TopHeader>
    <SearchBoxContainer />
    <Visual />
  </Container>
);

const Container = styled.div`

`;

const TopHeader = styled.div`
  padding-top: 50px;
`;

export default Main;
