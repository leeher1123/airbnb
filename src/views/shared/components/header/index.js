import React from 'react';
import styled from 'styled-components';

import { IconLogo } from '../../../../icons';
import Menu from './Menu';
import Profile from './Profile';

const Header = () => (
  <Container>
    <Logo><IconLogo /></Logo>
    <Menu />
    <Profile />
  </Container>
);

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  background: #000;
  padding: 0 80px;
  margin-top: 50px;
`;

const Logo = styled.div`
  flex: 1;
  svg {
    width: 102px;
    height: 32px;
    fill: #fff;
  }
`;

export default Header;
