import React from 'react';

const LoadingContext = React.createContext({
  loading: false,
  setLoading: (_value: boolean) => {},
  push: (..._promise) => {},
});

export default LoadingContext;
