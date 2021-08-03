import React from 'react';
import { styled } from 'linaria/react';
import TabBar from '@/components/TabBar';

type IHomeProps = {};

const Root = styled.div``;

const Home: React.FC<IHomeProps> = ({}) => {
  return (
    <Root>
      主页
      <TabBar />
    </Root>
  );
};

export default Home;
