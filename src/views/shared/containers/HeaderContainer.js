import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { useDispatch, useSelector } from 'react-redux';

import Header from '../components/header';
import SearchBoxContainer from './SearchBoxContainer';
import { Action } from '../redux/reducer';

const HeaderContainer = () => {
  const dispatch = useDispatch();
  const { isScroll } = useSelector((state) => state.shared);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      const a = window.scrollY;
      if (a >= 50) {
        dispatch(Action.Creators.isScroll(true));
      } else {
        dispatch(Action.Creators.isScroll(false));
      }
    });
  }, []);
  return (
    <Container>
      <Header isScroll={isScroll} />
      <SearchBoxContainer />
    </Container>
  );
};

const Container = styled.div`

`;

export default HeaderContainer;
