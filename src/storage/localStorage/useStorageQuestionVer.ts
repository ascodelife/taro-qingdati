import { initQuestionVer, LocalStorage } from '@/constants/Storage';
import { IQuestionVer } from '@/typings';
import useStorage, { UseStorageReturnType } from './useStorage';

const useStorageQuestionVer = (): UseStorageReturnType<IQuestionVer> => {
  const [questionVer, setQuestionVer, clear] = useStorage<IQuestionVer>({
    key: LocalStorage.QuestionVer as string,
    initData: initQuestionVer,
  });
  return [questionVer, setQuestionVer, clear];
};

export default useStorageQuestionVer;
