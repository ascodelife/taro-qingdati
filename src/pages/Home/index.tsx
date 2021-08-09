import React, { useEffect } from 'react';
import { styled } from 'linaria/react';
import BasicLayout from '@/components/BasicLayout';
import useLoading from '@/utils/hooks/useLoading';
import { LoadingContext } from '@/components/LoadingContext';

type IHomeProps = {
  className?: string;
  style?: React.CSSProperties;
};

const Root = styled.div``;

const Home: React.FC<IHomeProps> = ({ className, style }) => {
  const { loading, setLoading, push } = useLoading();
  useEffect(() => {
    push(new Promise(resolve=>{
      setTimeout(resolve,10000);
    }));
  }, [push]);
  return (
    <LoadingContext.Provider value={{ loading, push }}>
      <BasicLayout showTabBar loading={loading} setLoading={setLoading}>
        <Root className={className} style={style}>
          主页
        </Root>
      </BasicLayout>
    </LoadingContext.Provider>
  );
};

export default Home;
