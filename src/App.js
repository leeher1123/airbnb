import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import Main from './pages/Main';
import { GlobalStyle } from './style/GlobalStyle';
import Search from './pages/Search';

const App = () => (
  <Container>
    <GlobalStyle />
    <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/s/:place" component={Search} />
    </Switch>
  </Container>
);

const Container = styled.div`

`;

export default App;
