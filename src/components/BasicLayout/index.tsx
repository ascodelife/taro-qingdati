/** 通用页面布局组件
 * 已集成功能：
 * 全局loading
 */
import React from 'react';
import LoadingToast from '@/components/LoadingToast';
import { styled } from 'linaria/react';

const Root = styled.div`
  min-height: 100vh;
`;

type IBasicLayoutProps = {
  loading: boolean;
  setLoading: (value: boolean) => void;
};

const BasicLayout: React.FC<IBasicLayoutProps> = ({
  loading,
  setLoading,
  children,
}) => {
  return (
    <Root>
      {children}
      <LoadingToast loading={loading} setLoading={setLoading} />
    </Root>
  );
};

export default BasicLayout;
