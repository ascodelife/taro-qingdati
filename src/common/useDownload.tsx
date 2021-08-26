import { useMemo, useState } from 'react';
import { downloadQuestionFiles } from '@/apis';
import { useInterval } from 'ahooks';
import { TaskResult } from '@/apis/TaskList';
import { IQuestionVer } from '@/typings';
import { OnProgressUpdateCallbackResult } from '@/apis/types';

/** 下载文件 */
const useDownload = () => {
  const [tasks, setTasks] = useState<IQuestionVer>([]);
  const [taskResult, setTaskResult] = useState<TaskResult>({
    success: [],
    fail: [],
  });
  const [progree, setProgress] = useState<OnProgressUpdateCallbackResult>({
    /** 下载进度百分比 */
    progress: 0,
    /** 预期需要下载的数据总长度，单位 Bytes */
    totalBytesExpectedToWrite: 0,
    /** 已经下载的数据长度，单位 Bytes */
    totalBytesWritten: 0,
  });
  const [delay, setDelay] = useState<number | null>(null);

  const taskList = useMemo(() => {
    if (tasks.length !== 0) {
      return downloadQuestionFiles(tasks);
    }
    return null;
  }, [tasks]);

  /** 每间隔一段时间更新进度 */
  useInterval(() => {
    if (taskList) {
      setTaskResult(taskList.getTaskResult());
      setProgress(taskList.getProgress());
    }
  }, delay);

  const abort = () => {
    taskList?.abort();
    stop();
  };

  /** 开始定时器 */
  const start = (_delay = 1000) => {
    setDelay(_delay);
  };

  /** 停止定时器 */
  const stop = () => {
    setDelay(null);
  };

  return { taskResult, progree, setTasks, abort, start };
};

export default useDownload;
