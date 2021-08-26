import { useEffect, useState } from 'react';
import Taro from '@tarojs/taro';
import '@tarojs/taro/html.css';
import ContextComposer from '@/components/ContextComposer';
import 'taro-ui/dist/style/index.scss';
import { TabbarContext, LoadingContext, UserDataContext } from '@/components/Context';
import { useStorageUserData } from '@/storage/localStorage';
import { addLoadingInterceptor } from '@/apis/Interceptor';
import { useLoading } from '@/common';
import './app.scss';

type IAppProps = {};

const App: React.FC<IAppProps> = ({ children }) => {
  const [tabPath, setTabPath] = useState(Taro.getCurrentInstance().router?.path || '');
  const { loading, setLoading, push } = useLoading();
  const [userData, setUserData, clear] = useStorageUserData();

  /** 增加请求loading拦截器 */
  useEffect(() => {
    Taro.addInterceptor(addLoadingInterceptor(push));
  }, [push]);

  return (
    <ContextComposer
      contexts={[
        // { context: TabbarContext, value: { tabPath, setTabPath } },
        // { context: LoadingContext, value: { loading, setLoading, push } },
        // { context: UserDataContext, value: { userData, setUserData, clear } },
        <TabbarContext.Provider key="TabbarContext" value={{ tabPath, setTabPath }} />,
        <LoadingContext.Provider key="LoadingContext" value={{ loading, setLoading, push }} />,
        <UserDataContext.Provider key="UserDataContext" value={{ userData, setUserData, clear }} />,
      ]}
    >
      {children}
    </ContextComposer>
  );
};

export default App;
