import { useEffect, useContext } from 'react';
import Taro from '@tarojs/taro';
import { CoverImage, CoverView } from '@tarojs/components';
import clx from 'classnames';
import { GlobalContext } from '@/GlobalContext';
import homePng from '@/assets/icon/home.png';
import homeActivePng from '@/assets/icon/home-active.png';
import searchPng from '@/assets/icon/search.png';
import searchActivePng from '@/assets/icon/search-active.png';
import userPng from '@/assets/icon/user.png';
import userActivePng from '@/assets/icon/user-active.png';
import './index.scss';

const tabList = [
  {
    pagePath: '/pages/Home/index',
    text: '首页',
    icon: homePng,
    iconActive: homeActivePng,
  },
  {
    pagePath: '/pages/Search/index',
    text: '搜索',
    icon: searchPng,
    iconActive: searchActivePng,
  },
  {
    pagePath: '/pages/User/index',
    text: '我的',
    icon: userPng,
    iconActive: userActivePng,
  },
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
  //@ts-ignore
  wx.onAppRoute(function (res) {
    setTabPath(res.path);
  });

  return (
    <CoverView className="tabbar">
      {tabList.map((item, index) => {
        const isSelected = isEqualPath(tabPath, item.pagePath);
        return (
          <CoverView
            className={clx('tabbar__item', {
              'tabbar__item--active': isSelected,
            })}
            key={index}
            onClick={switchTo(item.pagePath)}
          >
            <CoverImage
              className="tabbar__item__image"
              src={isSelected ? item.iconActive : item.icon}
            />
            <CoverView className="tabbar__item__text">{item.text}</CoverView>
          </CoverView>
        );
      })}
    </CoverView>
  );
};

export default CustomTabbar;
