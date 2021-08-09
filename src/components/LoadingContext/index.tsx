import { createContext } from 'react';

export const LoadingContext = createContext({
  loading: false,
  push: (..._promises: Promise<any>[]) => {},
});
