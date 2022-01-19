import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { useSelector } from 'react-redux';

import SearchBox from '../components/header/SearchBox';

const SearchBoxContainer = () => {
  const { isScroll } = useSelector((state) => state.shared);
  return (
    <Container>
      <SearchBox isScroll={isScroll} />
    </Container>
  );
};

const Container = styled.div`

`;

export default SearchBoxContainer;
