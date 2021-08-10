export default {
  pages: ['pages/Home/index', 'pages/Search/index', 'pages/User/index'],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
  },
  tabBar: {
    custom: true,
    list: [
      {
        pagePath: 'pages/Home/index',
        text: '首页',
      },
      {
        pagePath: 'pages/Search/index',
        text: '搜索',
      },
      {
        pagePath: 'pages/User/index',
        text: '我的',
      },
    ],
  },
};
