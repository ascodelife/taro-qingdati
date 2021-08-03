import React, { useState } from 'react';
import { styled } from 'linaria/react';
import { AtTabBar } from 'taro-ui';

const tabList = [
  { title: '主页', iconType: 'camera' },
  { title: '搜索', iconType: 'camera' },
  { title: '我的', iconType: 'camera' },
];

type ITabBarProps = {};

const Root = styled(AtTabBar)``;

const TabBar: React.FC<ITabBarProps> = ({}) => {
  const [current, setCurrent] = useState(0);

  function handleChange(index: number) {
    setCurrent(index);
  }

  return <Root fixed tabList={tabList} current={current} onClick={handleChange} />;
};

export default TabBar;
