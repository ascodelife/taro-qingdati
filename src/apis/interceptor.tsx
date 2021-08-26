import Taro from '@tarojs/taro';

// 默认拦截器
Taro.addInterceptor(Taro.interceptors.logInterceptor);
Taro.addInterceptor(Taro.interceptors.timeoutInterceptor);

/** 绑定全局loading拦截器 */
export const addLoadingInterceptor = (push) => (chain) => {
  const p = chain.proceed(chain.requestParams);
  // pending态入队
  push(p);
  return p;
};