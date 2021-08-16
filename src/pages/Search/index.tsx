import React, { useContext, useEffect } from 'react';
import { styled } from 'linaria/react';
import BasicLayout from '@/components/BasicLayout';
import { LoadingContext } from '@/components/Context';
import usePageShow from '@/pages/common/usePageShow';


const path = "/pages/Search/index";

type ISearchProps = {
  className?: string;
  style?: React.CSSProperties;
};

const Root = styled.div``;

const Search: React.FC<ISearchProps> = ({ className, style }) => {
  const { push, loading, setLoading } = useContext(LoadingContext);

  usePageShow(path);

  useEffect(() => {
    push(
      new Promise((resolve) => {
        setTimeout(resolve, 300);
      })
    );
    push(
      new Promise((resolve) => {
        setTimeout(resolve, 1000);
      })
    );
  }, [push]);
  return (
    <BasicLayout loading={loading} setLoading={setLoading}>
      <Root className={className} style={style}>
        搜索
      </Root>
    </BasicLayout>
  );
};

export default Search;
