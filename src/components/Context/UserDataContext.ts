import { initUserData } from '@/constants/Storage';
import { IUserData } from '@/typings';
import React from 'react';

type IUserDataContextProps = {
  userData: IUserData;
  setUserData: (fn: (draft: IUserData) => void) => void;
  clear: () => void;
};

const UserDataContext = React.createContext<IUserDataContextProps>({
  userData: initUserData,
  setUserData: (_fn: (draft: IUserData) => void) => {},
  clear: () => {},
});

export default UserDataContext;
