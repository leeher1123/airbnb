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
  height: 80px;
  background: #000;
`;

const Logo = styled.div`
  svg {
    width: 102px;
    height: 32px;
    fill: #fff;
  }
`;

export default Header;
