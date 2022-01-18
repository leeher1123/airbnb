import React from 'react';
import styled from 'styled-components';

const Visual = () => (
  <Container>
    <Image>
      <p>
        에어비엔비가
        <br />
        여행지를 찾아드릴게요!
      </p>
      <SearchBtn>
        <span>유연한 검색</span>
      </SearchBtn>
    </Image>
  </Container>
);

const Container = styled.div`
  padding: 5px 0 96px;
  background: #000;
  height: 912px;
`;

const Image = styled.div`
  margin: 0 auto;
  background-image: url('https://images.unsplash.com/photo-1519708495087-ca1b71df408c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2076&q=80');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  max-width: 1280px;
  height: 640px;
  padding: 0 80px 72px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  p {
    font-size: 48px;
    font-weight: 600;
    line-height: 54px;
    text-align: center;
    color: #fff;
    padding-bottom: 24px;
  }
`;

const SearchBtn = styled.div`
  padding: 14px 32px;
  width: 149px;
  height: 56px;
  background-color: #fff;
  margin-top: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  font-size: 18px;
  font-weight: 800;
  span {
    background-image: linear-gradient(90deg, rgb(111, 1, 156) 0%, rgb(198, 1, 126) 135.12%);
    color: transparent;
    -webkit-background-clip: text;
  }
`;

export default Visual;
