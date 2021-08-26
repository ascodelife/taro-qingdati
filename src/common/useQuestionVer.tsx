import { useEffect, useState } from 'react';
import { useRequest } from 'ahooks';
import { getQV } from '@/apis';
import useStorageQuestionVer from '@/storage/localStorage/useStorageQuestionVer';
import { IQuestionVer } from '@/typings';
import useDownload from './useDownload';

// 对比版本号差异
const diff = (localQV: IQuestionVer, remoteQV: IQuestionVer) => {
  const diffCategories: IQuestionVer = [];
  for (const remoteItem of remoteQV) {
    const localItem = localQV.find((_) => _.category === remoteItem.category);
    if (localItem && localItem.version !== remoteItem.version) {
      diffCategories.push(remoteItem);
    } else if (!localItem) {
      diffCategories.push(remoteItem);
    }
  }
  return diffCategories;
};

const useQuestionVer = () => {
  const { data: remoteQV, error } = useRequest(() => getQV());
  const [localQV, setLocalQV] = useStorageQuestionVer();
  const { taskResult, progree, setTasks, abort, start } = useDownload();
  const [diffCategories, setDiffCategories] = useState<IQuestionVer>([]);

  /** 计算需要更新的分类 */
  useEffect(() => {
    console.log('remoteQV', remoteQV, localQV);
    if (error) {
      console.error('useQuestionVer', error);
    } else if (remoteQV) {
      setDiffCategories(diff(localQV, remoteQV));
    }
  }, [remoteQV, error, localQV]);

  /** 将已经更新好的分类写到版本号文件里 */
  useEffect(() => {
    const { success } = taskResult;
    setLocalQV((draft) => {
      success.forEach((taskItem) => {
        const categoryItem = remoteQV?.find((_) => _.category === taskItem.id);
        if (categoryItem) {
          const index = draft.findIndex((_) => _.category === categoryItem.category);
          if (index !== -1) {
            draft[index] = categoryItem;
          } else {
            draft.push(categoryItem);
          }
        }
      });
    });
  }, [remoteQV, setLocalQV, taskResult]);

  /** 开始更新分类 */
  const update = () => {
    setTasks(diffCategories);
    start();
  };

  return { diffCategories, taskResult, progree, update, abort };
};

export default useQuestionVer;
