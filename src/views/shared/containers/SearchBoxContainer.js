import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import SearchBox from '../components/header/SearchBox';

const SearchBoxContainer = () => {
  const [active, setActive] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      const a = window.scrollY;
      if (a >= 50) {
        setActive(true);
      } else {
        setActive(false);
      }
    });
  }, []);
  return (
    <Container>
      <SearchBox active={active} />
    </Container>
  );
};

const Container = styled.div`

`;

export default SearchBoxContainer;
