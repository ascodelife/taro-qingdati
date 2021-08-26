export interface OnProgressUpdateCallbackResult {
  /** 下载进度百分比 */
  progress: number;
  /** 预期需要下载的数据总长度，单位 Bytes */
  totalBytesExpectedToWrite: number;
  /** 已经下载的数据长度，单位 Bytes */
  totalBytesWritten: number;
}