import React from 'react';
import styled from 'styled-components';

import Visual from '../views/main/components/Visual';
import HeaderContainer from '../views/shared/containers/HeaderContainer';
import Place from '../views/main/components/place/Place';
import Experience from '../views/main/components/experience';

const Main = () => (
  <Container>
    <Alert>에어비앤비의 코로나19 대응 방안에 대한 최신 정보를 확인하세요.</Alert>
    <HeaderContainer />
    <Visual />
    <Place />
    <Experience />
  </Container>
);

const Container = styled.div`

`;

const Alert = styled.div`
  height: 50px;
  background: #000;
  color: #fff;
  padding: 16px 80px;
  text-align: center;
  font-size: 14px;
  font-weight: 600;
  text-decoration: underline;
  line-height: 18px;
`;

export default Main;
