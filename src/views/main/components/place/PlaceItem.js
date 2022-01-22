import React from 'react';
import styled from 'styled-components';

const PlaceItem = ({ item }) => (
  <Container>
    <Thumb>
      <img src={item.src} alt="서울 이미지" />
    </Thumb>
    <Content className={item.color}>
      <h4>{item.placeName}</h4>
      <p>{item.street}</p>
    </Content>
  </Container>
);

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Thumb = styled.div`
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  overflow: hidden;
  height: 201.33px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Content = styled.div`
  padding: 24px 16px 16px 16px;
  height: 50%;
  color: #fff;
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
  line-height: 36px;
  h4 {
    font-size: 35px;
    font-weight: 600;
    margin-bottom: 10px;
  }
  p {
    font-size: 20px;
    font-weight: 400;
  }
  &.seoul {
    background-color: #D93A30;
  }
  &.incheon {
    background-color: #BC196D;
  }
  &.daegu {
    background-color: #CC2D4A;
  }
  &.daejeon {
    background-color: #DD3150;
  }
`;

export default PlaceItem;
