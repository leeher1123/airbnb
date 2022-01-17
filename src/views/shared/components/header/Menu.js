import React from 'react';
import styled from 'styled-components';

const Menu = () => (
  <Container>
    <ul>
      <li>숙소</li>
      <li>체험</li>
      <li>온라인 체험</li>
    </ul>
  </Container>
);

const Container = styled.div`
  ul {
    display: flex;
    align-items: center;
  }
  color: #fff;
  padding: 0 24px;
  li {
    padding: 10px 16px;
    font-weight: 400;
  }
`;

export default Menu;
