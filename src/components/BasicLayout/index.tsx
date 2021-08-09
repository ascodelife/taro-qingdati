/** 通用页面布局组件
 * 已集成功能：
 * 全局loading
 * 自定义tabbar
 */
import React from 'react';
import LoadingToast from '@/components/LoadingToast';
import TabBar from '@/components/TabBar';

type IBasicLayoutProps = {
  showTabBar?: boolean;
  loading: boolean;
  setLoading: (value: boolean) => void;
};

const BasicLayout: React.FC<IBasicLayoutProps> = ({
  showTabBar,
  loading,
  setLoading,
  children,
}) => {
  return (
    <>
      {children}
      <LoadingToast loading={loading} setLoading={setLoading} />
      {showTabBar && <TabBar />}
    </>
  );
};

export default BasicLayout;
