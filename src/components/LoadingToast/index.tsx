/** 全局Loading组件 */
import React from 'react';
import { styled } from 'linaria/react';
import { AtToast } from 'taro-ui';

type ILoadingToastProps = {
  className?: string;
  style?: React.CSSProperties;
  loading: boolean;
  setLoading: (value: boolean) => void;
};

const Root = styled(AtToast)``;

const LoadingToast: React.FC<ILoadingToastProps> = ({ className, loading }) => {
  return (
    <Root
      className={className}
      isOpened={loading}
      text="加载中"
      icon="loading"
      status="loading"
      duration={0}
      hasMask
    />
  );
};

export default LoadingToast;
