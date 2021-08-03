import React, { useEffect, useState } from 'react';
import { styled } from 'linaria/react';
import { AtTabBar } from 'taro-ui';
import { getCurrentInstance } from '@tarojs/taro';

const instance = getCurrentInstance();

const tabList = [
  { title: '主页', iconType: 'home', url: 'pages/Home/index' },
  { title: '搜索', iconType: 'search', url: 'pages/Search/index' },
  { title: '我的', iconType: 'user', url: 'pages/User/index' },
];

type ITabBarProps = {};

const Root = styled(AtTabBar)``;

const TabBar: React.FC<ITabBarProps> = ({}) => {
  const initCurrent = Number.isNaN(Number(instance.router?.params.current))
    ? 0
    : Number(instance.router?.params.current);

  function handleChange(index: number) {
    if (initCurrent !== index) {
      Taro.redirectTo({ url: `${tabList[index].url}?current=${index}` });
    }
  }

  return <Root fixed tabList={tabList} current={initCurrent} onClick={handleChange} />;
};

export default TabBar;
