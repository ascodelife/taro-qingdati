import Taro from '@tarojs/taro';
import { IQuestionVer } from '@/typings/IQuestionVer';
import { promisify } from '@/utils/promisify';
import { request } from '@tarojs/taro/types';
import { noop } from 'ahooks/lib/usePersistFn';
import { getDownloadUrl, getQVUrl } from './api.config';
import TaskList from './TaskList';

type IRequsetSuccessResult<T> = request.SuccessCallbackResult<{ data: T }>;

/** 获取题库版本号 */
export const getQV = () => {
  return errorWrapper(
    promisify<IRequsetSuccessResult<IQuestionVer>>(Taro.request, { url: getQVUrl })
  );
};

/** 下载题库文件 */
const getQuestionFile = (category: string, successCb: noop, failCb: noop) => {
  return Taro.downloadFile({
    url: getDownloadUrl(category),
    success: successCb,
    fail: failCb,
  });
};

/** 批量下载题库文件 */
export const downloadQuestionFiles = (categories: IQuestionVer) => {
  const taskList = new TaskList();
  const DownloadTasks = categories.map(({ category }) => {
    return {
      id: category,
      task: getQuestionFile(
        category,
        (res: Taro.downloadFile.FileSuccessCallbackResult) => taskList.notify(category, true, res),
        (err: Taro.General.CallbackResult) => taskList.notify(category, false, err)
      ),
    };
  });
  // 维护任务进度
  taskList.setTask(DownloadTasks);
  return taskList;
};

// 处理错误态 解构data
const successMsg = 'request:ok';
const errorWrapper = async <T>(promise: Promise<IRequsetSuccessResult<T>>) => {
  const res = await promise;
  if (res.statusCode !== 200 || res.errMsg !== successMsg) {
    throw new Error(`请求错误，状态码${res.statusCode}，错误信息${res.errMsg}`);
  }
  return res.data.data;
};
