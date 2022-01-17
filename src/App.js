import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import { GlobalStyle } from './style/GlobalStyle';
import Header from './views/shared/components/header';

const App = () => (
  <Container>
    <GlobalStyle />
    <Header />
    <Switch>
      <Route exact path="/" component={Main} />
    </Switch>
  </Container>
);

const Container = styled.div`

`;

export default App;
