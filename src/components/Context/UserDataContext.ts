import { IUserData } from '@/typings/IUserData';
import { CategoriesLv1, UserRole } from '@/constants/UserData';
import React from 'react';

export const initUserData = {
  role: UserRole.fe,
  done: {
    [CategoriesLv1.fe]: 0,
    [CategoriesLv1.be]: 0,
    [CategoriesLv1.cb]: 0,
  },
};

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
