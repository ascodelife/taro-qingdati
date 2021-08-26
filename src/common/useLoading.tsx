import { useMemo, useState } from 'react';

class PromiseManager {
  pendingPromise: Set<string>;
  setLoading: (value: boolean) => void;
  constructor(setLoading: (value: boolean) => void) {
    this.pendingPromise = new Set();
    this.setLoading = setLoading;
  }
  generateKey = ()=> {
    return `${new Date().getTime()}-${Math.floor(Math.random() * 1000)}`;
  }
  push = (...promises: Promise<any>[]) => {
    console.log('入队',...promises);
    for (const p of promises) {
      const key = this.generateKey();
      this.pendingPromise.add(key);
      this.setLoading(true);
      p.finally(() => {
        this.pendingPromise.delete(key);
        this.setLoading(this.pendingPromise.size !== 0);
      });
    }
  }
}

const useLoading = () => {
  const [loading, setLoading] = useState(false);

  const manager = useMemo(() => new PromiseManager(setLoading), [setLoading]);

  return { loading, setLoading, push: manager.push };
};

export default useLoading;
