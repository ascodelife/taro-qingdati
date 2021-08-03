import React from 'react';
import { styled } from 'linaria/react';
import TabBar from '@/components/TabBar';

type IUserProps = {};

const Root = styled.div``;

const User: React.FC<IUserProps> = ({}) => {
  return (
    <Root>
      用户页
      <TabBar />
    </Root>
  );
};

export default User;
