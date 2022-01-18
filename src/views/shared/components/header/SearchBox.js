import React from 'react';
import styled from 'styled-components';

import { BiSearch } from 'react-icons/bi';

const SearchBox = () => (
  <Container>
    <Form>
      <SearchItem className="first">
        <h4>위치</h4>
        <Input type="text" placeholder="어디로 여행가세요?" />
        <Bar />
      </SearchItem>
      <SearchItem>
        <h4>체크인</h4>
        <p>날짜 입력</p>
        <Bar />
      </SearchItem>
      <SearchItem>
        <h4>체크아웃</h4>
        <p>날짜 입력</p>
        <Bar />
      </SearchItem>
      <SearchItem>
        <h4>인원</h4>
        <p>게스트 추가</p>
      </SearchItem>
      <Button>
        <span><BiSearch /></span>
      </Button>
    </Form>
  </Container>
);

const Container = styled.div`
  background: #000;
  padding-bottom: 16px;
`;

const Form = styled.div`
  max-width: 850px;
  margin: 0 auto;
  height: 66px;
  background: #fff;
  border-radius: 32px;
  display: flex;
  align-items: center;
`;

const SearchItem = styled.div`
  position: relative;
  line-height: 20px;
  padding: 14px 34px;
  height: 100%;
  flex: 1;
  color: #717171;
  font-size: 14px;
  &.first {
    flex: 1.5;
  }
  h4 {
    font-size: 12px;
    font-weight: 800;
    color: #222;
    line-height: unset;
  }
`;

const Input = styled.input`
  border: 0;
`;

const Button = styled.div`
  width: 52px;
  background: #FF385C;
  border-radius: 50%;
  margin-right: 10px;
  span {
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      width: 22px;
      height: 22px;
      color: #fff;
    }
  }
`;

const Bar = styled.div`
  position: absolute;
  top: 15px;
  right: 0;
  width: 1px;
  height: 33px;
  background: #ddd;
`;

export default SearchBox;
