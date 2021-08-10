import { useEffect, useState, useContext } from 'react';
import Taro from '@tarojs/taro';
import { AtIcon } from 'taro-ui';
import { CoverView } from '@tarojs/components';
import clx from 'classnames';
import { GlobalContext } from '@/GlobalContext';
import './index.scss';

const tabList = [
  { title: '主页', iconType: 'home', path: '/pages/Home/index' },
  { title: '搜索', iconType: 'search', path: '/pages/Search/index' },
  { title: '我的', iconType: 'user', path: '/pages/User/index' },
];

const isEqualPath = (a: string, b: string) =>
  (a || '').replace(/^\//, '') === (b || '').replace(/^\//, '');

const switchTo = (path) => () => {
  Taro.switchTab({
    url: path,
  });
};

const CustomTabbar = () => {
  const { tabPath, setTabPath } = useContext(GlobalContext);

  useEffect(() => {
    wx.onAppRoute(function (res) {
      setTabPath(res.path);
    });
  }, []);

  return (
    <CoverView className="tabbar">
      {tabList.map((item, index) => {
        const isSelected = isEqualPath(tabPath, item.path);
        return (
          <CoverView
            className={clx('tabbar__item', {
              'tabbar__item--active': isSelected,
            })}
            key={index}
            onClick={switchTo(item.path)}
          >
            {/* <CoverImage
              className="tabbar-item__image"
              // src={`../${isSelected ? item.selectedIconPath : item.iconPath}`}
            /> */}
            <AtIcon value={item.iconType} />
            <CoverView className="tabbar-item__text">{item.title}</CoverView>
          </CoverView>
        );
      })}
    </CoverView>
  );
};

export default CustomTabbar;
