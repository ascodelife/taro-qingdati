import { useEffect, useState } from 'react';
import { produce } from 'immer';
import { setStorageSync, getStorageSync, removeStorageSync } from './utils';

type IUseStorageProps<T> = {
  key: string;
  initData: T;
};

export type UseStorageReturnType<T> = [T, (fn: (draft: T) => void) => void, () => void];

const useStorage = <T>({ key, initData }: IUseStorageProps<T>): UseStorageReturnType<T> => {
  const [data, setData] = useState(getStorageSync<T>(key) || initData);

  useEffect(() => {
    setStorageSync(key, data);
  }, [data, key]);

  const _setData = (fn: (draft: T) => void) => {
    console.log(data);
    setData(produce(data, fn));
  };

  const clear = () => {
    removeStorageSync(key);
  };

  return [data, _setData, clear];
};

export default useStorage;
