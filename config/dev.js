const mocks = require('../src/mocks/api');

module.exports = {
  env: {
    NODE_ENV: '"development"',
  },
  plugins: [
    [
      '@tarojs/plugin-mock',
      {
        mocks,
      },
    ],
  ],
  defineConstants: {},
  mini: {},
  h5: {},
};
