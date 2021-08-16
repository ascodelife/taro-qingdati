import { useState } from 'react';
import Taro from '@tarojs/taro';
import '@tarojs/taro/html.css';
import ContextComposer from '@/components/ContextComposer';
import 'taro-ui/dist/style/index.scss';
import { TabbarContext, LoadingContext, UserDataContext, initUserData } from '@/components/Context';
import useLoading from '@/pages/common/useLoading';
import { localStorage } from '@/constants/Storage';
import useStorage from '@/storage/localStorage/useStorage';
import { IUserData } from '@/typings/IUserData';
import './app.scss';

type IAppProps = {};

const App: React.FC<IAppProps> = ({ children }) => {
  const [tabPath, setTabPath] = useState(Taro.getCurrentInstance().router?.path ?? '');
  const { loading, setLoading, push } = useLoading();
  const [userData, setUserData, clear] = useStorage<IUserData>({
    key: localStorage.UserData as string,
    initData: initUserData,
  });
  return (
    <ContextComposer
      contexts={[
        { context: TabbarContext, value: { tabPath, setTabPath } },
        { context: LoadingContext, value: { loading, setLoading, push } },
        { context: UserDataContext, value: { userData, setUserData, clear } },
        // <TabbarContext.Provider key="TabbarContext" value={{ tabPath, setTabPath }} />,
        // <LoadingContext.Provider key="LoadingContext" value={{ loading, setLoading, push }} />,
        // <UserDataContext.Provider key="UserDataContext" value={{ userData, setUserData, clear }} />,
      ]}
    >
      {children}
    </ContextComposer>
  );
};

export default App;
