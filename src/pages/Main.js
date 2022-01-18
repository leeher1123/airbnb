import React from 'react';
import styled from 'styled-components';

import Header from '../views/shared/components/header';
import SearchBox from '../views/shared/components/header/SearchBox';

const Main = () => (
  <Container>
    <Header />
    <SearchBox />
  </Container>
);

const Container = styled.div`

`;

export default Main;
