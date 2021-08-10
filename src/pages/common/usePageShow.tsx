import { GlobalContext } from '@/GlobalContext';
import { useDidShow } from '@tarojs/taro';
import { useContext } from 'react';

const usePageShow = (path: string) => {
  const { setTabPath } = useContext(GlobalContext);
  useDidShow(() => {
    setTabPath(path);
  });
  return;
};

export default usePageShow;
