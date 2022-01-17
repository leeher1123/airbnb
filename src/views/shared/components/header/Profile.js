import React from 'react';
import styled from 'styled-components';

import { GiHamburgerMenu } from 'react-icons/gi';

import { IconGraphics, IconUser } from '../../../../icons';

const Profile = () => (
  <Container>
    <Contents>
      <p>호스트 되기</p>
      <p><IconGraphics /></p>
    </Contents>
    <User>
      <Button>
        <Bar><GiHamburgerMenu /></Bar>
        <UserImg><IconUser /></UserImg>
      </Button>
    </User>
  </Container>
);

const Container = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
  font-size: 14px;
`;

const Contents = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  svg {
    width: 16px;
    height: 16px;
    fill: #fff;
  }
  p {
    padding: 12px;
  }
`;

const User = styled.div`
  
`;

const Button = styled.button`
  display: flex;
  align-items: center;
  width: 77px;
  height: 42px;
  padding: 5px 5px 5px 12px;
  border-radius: 21px;
  border: 0;
`;

const Bar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  fill: #212121;
`;

const UserImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left:10px;
  svg {
    width: 32px;
    height: 32px;
    fill: #717171;
  }
`;

export default Profile;
