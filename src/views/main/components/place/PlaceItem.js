import React from 'react';
import styled from 'styled-components';

const PlaceItem = ({ item }) => (
  <Container>
    <Thumb>
      <img src={item.src} alt="지역 이미지" />
      <Contents className={item.color}>
        <Content>
          <h4>{item.placeName}</h4>
          <p>{item.street}</p>
        </Content>
      </Contents>
    </Thumb>
  </Container>
);

const Container = styled.div`
  + div {
    margin-left: 16px;
  }
`;

const Thumb = styled.div`
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
  overflow: hidden;
  padding-bottom: 70%;
  img {
    position: relative;
    z-index: 100;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  position: relative;
`;

const Contents = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 24px 16px 16px 16px;
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
  &.jeju {
    background-color: #D93B30;
  }
  &.busan {
    background-color: #DE3151;
  }
  &.gangleung {
    background-color: #BC1A6E;
  }
  &.sogcho {
    background-color: #D93B30;
  }
`;

const Content = styled.div`
  padding-top: 73%;
`;

export default PlaceItem;
