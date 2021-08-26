const { getQVData } = require('./getQVData');

module.exports = {
  'GET /api/getQV': getQVData,

  'POST /api/upload': {
    file: 'xxxx',
  },
};
