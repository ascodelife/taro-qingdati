import React from 'react';

const TabbarContext = React.createContext({
  tabPath: '',
  setTabPath: (_value: string) => {},
});

export default TabbarContext;
