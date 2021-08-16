import { TabbarContext } from '@/components/Context';
import { useDidShow } from '@tarojs/taro';
import { useContext } from 'react';

const usePageShow = (path: string) => {
  const { setTabPath } = useContext(TabbarContext);
  useDidShow(() => {
    setTabPath(path);
  });
  return;
};

export default usePageShow;
