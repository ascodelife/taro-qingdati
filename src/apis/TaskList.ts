import { OnProgressUpdateCallbackResult } from './types';

export interface TaskItem {
  id: string;
  task: Taro.DownloadTask;
}

export interface TaskResult {
  success: TaskItem[];
  fail: TaskItem[];
}

export default class TaskList {
  tasks: TaskItem[];
  progress: OnProgressUpdateCallbackResult[];
  successTasks: TaskItem[];
  failTasks: TaskItem[];

  // 设置任务
  setTask(tasks: TaskItem[]) {
    if (this.tasks) throw new Error('不可重复设置task');
    this.tasks = tasks;
    this.successTasks = [];
    this.failTasks = [];
    // 批量监听下载进度
    this.progress = new Array(tasks.length).fill(0);
    this.tasks.forEach((item) => {
      item.task.onProgressUpdate((res) => this.progress.push(res));
    });
  }

  // 通知下载成功或失败(异步)
  notify(
    taskId: string,
    isSuccess: boolean,
    res: Taro.downloadFile.FileSuccessCallbackResult | Taro.General.CallbackResult
  ) {
    Promise.resolve().then(() => {
      console.log(taskId, isSuccess, res);
      const taskItem = this.tasks.find((item) => item.id === taskId);
      if (taskItem) {
        if (isSuccess) {
          this.successTasks.push(taskItem);
        } else {
          this.failTasks.push(taskItem);
        }
      }
    });
  }

  // 获取总下载进度
  getProgress(): OnProgressUpdateCallbackResult {
    return this.progress.reduce(
      (sum, cur) => {
        return {
          progress: sum.progress + cur.progress,
          totalBytesExpectedToWrite: sum.totalBytesExpectedToWrite + cur.totalBytesExpectedToWrite,
          totalBytesWritten: sum.totalBytesWritten + cur.totalBytesWritten,
        };
      },
      {
        progress: 0,
        totalBytesExpectedToWrite: 0,
        totalBytesWritten: 0,
      }
    );
  }

  // 获取当前下载结果
  getTaskResult(): TaskResult {
    return {
      success: this.successTasks,
      fail: this.failTasks,
    };
  }

  // 取消所有任务
  abort() {
    this.tasks.forEach((item) => item.task.abort());
  }
}
