import React from 'react';

export const GlobalContext = React.createContext({
  tabPath: '',
  setTabPath: (_value:string) => {},
});
