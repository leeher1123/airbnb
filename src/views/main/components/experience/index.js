import React from 'react';
import styled from 'styled-components';

const Experience = () => (
  <Container>
    <Title>에어비엔비 체험 둘러보기</Title>
    <Grid>
      <Item className="first">
        <Content>
          <h2>
            {
              `여행 중 만나는
               이색적인 즐길 거리`
            }
          </h2>
          <Btn>체험</Btn>
        </Content>
      </Item>
      <Item className="second">
        <Content>
          <h2>
            {
              `집에서 만나는
               다양한 즐길 거리`
            }
          </h2>
          <Btn>체험</Btn>
        </Content>
      </Item>
    </Grid>
  </Container>
);

const Container = styled.div`
  padding: 96px 0;
  margin: 0 160px;
`;

const Title = styled.div`
  font-size: 42px;
  font-weight: 600;
  padding-bottom: 48px;
`;

const Grid = styled.div`
  display: flex;
`;

const Item = styled.div`
  position: relative;
  flex: 1;
  padding: 80px;
  border-radius: 12px;
  padding-top: 50%;
  &.first {
    background-image: url('https://images.unsplash.com/photo-1531084753305-8d3c45df1424?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80');
    background-size: cover;
  }
  &.second {
    background-image: url('https://images.unsplash.com/photo-1546825551-8475648fcfe9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80');
    background-size: cover;
  }
  + div {
    margin-left: 24px;
  }
`;

const Content = styled.div`
  position: absolute;
  top: 80px;
  left: 80px;
  display: flex;
  flex-direction: column;
  h2 {
    white-space: pre-line;
    font-size: 53px;
    font-weight: 500;
    color: #fff;
    line-height: 60px;
  }
`;

const Btn = styled.div`
  width: 75.69px;
  padding: 14px 24px;
  background-color: #fff;
  color: #222;
  border-radius: 8px;
  margin-top: 15px;
`;

export default Experience;
