import { useState } from 'react';
import Taro from '@tarojs/taro';
import '@tarojs/taro/html.css';
import 'taro-ui/dist/style/index.scss';
import { GlobalContext } from '@/GlobalContext';
import './app.scss';

type IAppProps = {};

const App: React.FC<IAppProps> = ({ children }) => {
  const [tabPath, setTabPath] = useState(Taro.getCurrentInstance().router?.path ?? '');
  return (
    <GlobalContext.Provider value={{ tabPath, setTabPath }}>{children}</GlobalContext.Provider>
  );
};

export default App;