/** 通用页面布局组件
 * 已集成功能：
 * 全局loading
 */
import React from 'react';
import LoadingToast from '@/components/LoadingToast';

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
    <>
      {children}
      <LoadingToast loading={loading} setLoading={setLoading} />
    </>
  );
};

export default BasicLayout;
