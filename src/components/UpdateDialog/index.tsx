/**
 * 更新弹窗
 */
import React, { useEffect, useState } from 'react';
import {
  AtModal,
  AtModalHeader,
  AtModalContent,
  AtModalAction,
  AtButton,
  AtProgress,
} from 'taro-ui';
import { useQuestionVer } from '@/common';

type IUpdateDialogProps = {
  className?: string;
  style?: React.CSSProperties;
};

const UpdateDialog: React.FC<IUpdateDialogProps> = ({ className, style }) => {
  const { diffCategories, taskResult, progree, update, abort } = useQuestionVer();
  const [isOpened, setIsOpened] = useState(false);
  const [isUpdate, setIsUpdate] = useState(false);

  useEffect(() => {
    if (diffCategories.length > 0) {
      setIsOpened(true);
    }
  }, [diffCategories]);

  function cancel() {
    setIsOpened(false);
  }

  function confirm() {
    update();
    setIsUpdate(true);
  }

  function cancelWhenUpdate() {
    abort();
  }

  function complete() {
    setIsOpened(true);
    Taro.showToast({
      title: `更新完成，共${diffCategories}个，成功${taskResult.success.length}个，失败${taskResult.fail.length}个`,
      icon: 'success',
      duration: 2000,
    });
  }

  return (
    <AtModal className={className} isOpened={isOpened}>
      {isUpdate ? (
        <>
          <AtModalHeader>
            正在更新 {taskResult.success.length}/{diffCategories.length}
          </AtModalHeader>
          <AtModalContent>
            {/* 进度条 */}
            <AtProgress percent={progree.progress} status="progress" />
            {/* 进度条描述信息 */}
            <span>
              当前{progree.totalBytesWritten}/共{progree.totalBytesExpectedToWrite}
            </span>
          </AtModalContent>
          <AtModalAction>
            {taskResult.success.length + taskResult.fail.length === diffCategories.length ? (
              <AtButton onClick={complete}>完成 </AtButton>
            ) : (
              <AtButton onClick={cancelWhenUpdate}>取消 </AtButton>
            )}
          </AtModalAction>
        </>
      ) : (
        <>
          <AtModalHeader>题库有更新！</AtModalHeader>
          <AtModalContent>
            发现<span style={{ color: 'red' }}>{diffCategories.length}</span>
            类题目有新版本！是否立即更新？
          </AtModalContent>
          <AtModalAction>
            <AtButton onClick={cancel}>下次一定！</AtButton>
            <AtButton onClick={confirm}>马上更新！</AtButton>
          </AtModalAction>
        </>
      )}
    </AtModal>
  );
};

export default UpdateDialog;
