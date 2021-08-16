import React, { useContext, useEffect } from 'react';
import { styled } from 'linaria/react';
import BasicLayout from '@/components/BasicLayout';
import { LoadingContext } from '@/components/Context';
import usePageShow from '@/pages/common/usePageShow';
import HeadCard from './components/HeadCard';

const path = '/pages/Home/index';

type IHomeProps = {
  className?: string;
  style?: React.CSSProperties;
};

const Root = styled.div``;

const Home: React.FC<IHomeProps> = ({ className, style }) => {
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
        <HeadCard />
      </Root>
    </BasicLayout>
  );
};

export default Home;
