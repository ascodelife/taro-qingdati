import React, { useEffect } from 'react';
import { styled } from 'linaria/react';
import BasicLayout from '@/components/BasicLayout';
import useLoading from '@/pages/common/useLoading';
import { LoadingContext } from '@/components/LoadingContext';
import usePageShow from '@/pages/common/usePageShow';


const path = "/pages/Search/index";

type ISearchProps = {
  className?: string;
  style?: React.CSSProperties;
};

const Root = styled.div``;

const Search: React.FC<ISearchProps> = ({ className, style }) => {
  const { loading, setLoading, push } = useLoading();

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
    <LoadingContext.Provider value={{ loading, push }}>
      <BasicLayout loading={loading} setLoading={setLoading}>
        <Root className={className} style={style}>
          搜索
        </Root>
      </BasicLayout>
    </LoadingContext.Provider>
  );
};

export default Search;
