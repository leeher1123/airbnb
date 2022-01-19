import React from 'react';
import styled, { css } from 'styled-components';

import { IconLogo } from '../../../../icons';
import Menu from './Menu';
import Profile from './Profile';

const Header = ({ isScroll }) => (
  <Container isScroll={isScroll}>
    <Logo isScroll={isScroll}><IconLogo /></Logo>
    {
      isScroll || <Menu />
    }
    <Profile isScroll={isScroll} />
  </Container>
);

const Container = styled.div`
  ${({ isScroll }) => isScroll && css`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    transition: .2s;
  `}
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  padding: 0 80px;
  background: ${({ isScroll }) => (isScroll ? '#fff' : '#000')}
`;

const Logo = styled.div`
  flex: 1;
  svg {
    width: 102px;
    height: 32px;
    fill: ${({ isScroll }) => (isScroll ? '#FF385C' : '#fff')}
  }
`;

export default Header;
