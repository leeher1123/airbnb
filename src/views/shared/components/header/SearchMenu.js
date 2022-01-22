import React from 'react';
import styled from 'styled-components';
import { BiSearch } from 'react-icons/bi';

import { Button } from './SearchBox';

const SearchMenu = () => (
  <Container>
    <Form>
      <Input
        type="text"
        placeholder="검색 시작하기"
      />
      <SearchBtn>
        <span><BiSearch /></span>
      </SearchBtn>
    </Form>
  </Container>
);

const Container = styled.div`
  
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  width: 300px;
  border: 1px solid #ddd;
  padding-left: 8px;
  border-radius: 25px;
`;

const Input = styled.input`
  display: block;
  width: 100%;
  border: 0;
  outline: 0;
  padding: 0 16px;
  font-size: 14px;
  font-weight: 600;
`;

const SearchBtn = styled.button`
  background: #FF385C;
  border-radius: 50%;
  margin: 7px 7px 7px 0;
  width: 35px;
  height: 32px;
  border: 1px solid #FF385C;
  span {
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      width: 16px;
      height: 16px;
      color: #fff;
    }
  }
`;

export default SearchMenu;
