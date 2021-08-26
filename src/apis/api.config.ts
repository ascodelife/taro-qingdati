const isMock = true;

const baseUrl = isMock ? 'http://127.0.0.1:9527' : 'https://www.answer.asia/boot_crud/weixin';

/** 临时文件存放地址（仅mock时用）
 * https://app.mediafire.com/myfiles // 有问题 待修复
 * 将项目目录下mock_files上传到网站
 */
const fileUrls = {
  前端_html基础: 'file:///D://taro-qingdati//mock_files//%E5%90%8E%E7%AB%AF_java%E8%99%9A%E6%8B%9F%E6%9C%BA.json',
  前端_css基础: 'file:///D://taro-qingdati//mock_files//%E5%90%8E%E7%AB%AF_java%E8%99%9A%E6%8B%9F%E6%9C%BA.json',
  前端_js基础:
    'https://download1965.mediafire.com/ibp9iecx20yg/vw2xalrfyc7xz2a/%E5%89%8D%E7%AB%AF_js%E5%9F%BA%E7%A1%80.json',
  后端_数据库:
    'https://download1662.mediafire.com/bhe08nbfgxpg/wye45y8ehl2chc6/%E5%90%8E%E7%AB%AF_%E6%95%B0%E6%8D%AE%E5%BA%93.json',
  后端_java虚拟机:
    'https://download1662.mediafire.com/szmic18eqspg/eh55bqssoljqfoa/%E5%90%8E%E7%AB%AF_java%E8%99%9A%E6%8B%9F%E6%9C%BA.json',
  计算机基础_操作系统:
    'https://download1662.mediafire.com/pexefoccottg/b5nka2d1h53uyjp/%E8%AE%A1%E7%AE%97%E6%9C%BA%E5%9F%BA%E7%A1%80_%E6%93%8D%E4%BD%9C%E7%B3%BB%E7%BB%9F.json',
  计算机基础_计算机网络:
    'https://download1662.mediafire.com/vlyuvmb5eowg/x1jg1b34dqtcaoq/%E8%AE%A1%E7%AE%97%E6%9C%BA%E5%9F%BA%E7%A1%80_%E8%AE%A1%E7%AE%97%E6%9C%BA%E7%BD%91%E7%BB%9C.json',
};

export const getDownloadUrl = (category: string) =>
  isMock ? fileUrls[category] : `${baseUrl}/download/${category}.json`;

export const getQVUrl = `${baseUrl}/api/getQV`;

export const getTagsUrl = `${baseUrl}/api/getTags`;

export const getQsByTagsUrl = `${baseUrl}/api/getQsByTags`;
