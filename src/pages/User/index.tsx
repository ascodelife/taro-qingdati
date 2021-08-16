import React, { useContext, useEffect } from 'react';
import { styled } from 'linaria/react';
import BasicLayout from '@/components/BasicLayout';
import { LoadingContext } from '@/components/Context';
import usePageShow from '@/pages/common/usePageShow';


const path = "/pages/User/index";

type IUserProps = {
  className?: string;
  style?: React.CSSProperties;
};

const Root = styled.div``;

const User: React.FC<IUserProps> = ({ className, style }) => {
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
        用户
      </Root>
    </BasicLayout>
  );
};

export default User;
