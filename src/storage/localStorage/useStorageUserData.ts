import { initUserData, LocalStorage } from '@/constants/Storage';
import { IUserData } from '@/typings';
import useStorage, { UseStorageReturnType } from './useStorage';

const useStorageUserData = (): UseStorageReturnType<IUserData> => {
  const [userData, setUserData, clear] = useStorage<IUserData>({
    key: LocalStorage.UserData as string,
    initData: initUserData,
  });
  return [userData, setUserData, clear];
};

export default useStorageUserData;
