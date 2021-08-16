import Taro from '@tarojs/taro';

export const setStorageSync = (key: string, data: any) => {
  Taro.setStorageSync(key, data);
};

export const getStorageSync = <T>(key: string): T => {
  return Taro.getStorageSync(key);
};

export const removeStorageSync = (key: string) => {
  Taro.removeStorageSync(key);
};
