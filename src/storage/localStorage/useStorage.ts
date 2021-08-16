import { useEffect, useState } from 'react';
import { produce } from 'immer';
import { setStorageSync, getStorageSync, removeStorageSync } from './utils';

type IUseStorageProps<T> = {
  key: string;
  initData: T;
};

const useStorage = <T>({
  key,
  initData,
}: IUseStorageProps<T>): [T, (fn: (draft: T) => void) => void, () => void] => {
  const [data, setData] = useState(getStorageSync<T>(key) ?? initData);

  useEffect(() => {
    setStorageSync(key, data);
  }, [data, key]);

  const _setData = (fn: (draft: T) => void) => {
    setData(produce(data, fn));
  };

  const clear = () => {
    removeStorageSync(key);
  };

  return [data, _setData, clear];
};

export default useStorage;
