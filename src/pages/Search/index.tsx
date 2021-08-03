import React from 'react';
import { styled } from 'linaria/react';
import TabBar from '@/components/TabBar';

type ISearchProps = {};

const Root = styled.div``;

const Search: React.FC<ISearchProps> = ({}) => {
  return (
    <Root>
      搜索页
      <TabBar />
    </Root>
  );
};

export default Search;
