const CONFIG = {
  HEO_HOME_POST_TWO_COLS: true, // 首页博客两列显示，若为false则只显示一列
  HEO_LOADING_COVER: true, // 页面加载的遮罩动画

  HEO_HOME_BANNER_ENABLE: true,

  HEO_SITE_CREATE_TIME: '2024-12-23', // 建站日期，用于计算网站运行的第几天

  // 首页顶部通知条滚动内容，如不需要可以留空 []
  HEO_NOTICE_BAR: [
    { title: '欢迎来到我的博客', url: 'https://blog.netanio.com' },
    { title: '欢迎来到现实世界', url: 'https://blog.netanio.com' }
  ],

  // 英雄区左右侧组件颠倒位置
  HEO_HERO_REVERSE: false,
  // 博客主体区左右侧组件颠倒位置
  HEO_HERO_BODY_REVERSE: false,

  // 英雄区(首页顶部大卡)
  HEO_HERO_TITLE_1: '游戏开发',
  HEO_HERO_TITLE_2: '与杂七杂八',
  HEO_HERO_TITLE_3: 'BLOG.NETANIO.COM',
  HEO_HERO_TITLE_4: '欢迎登陆',
  HEO_HERO_TITLE_5: '地球Online4.0 当前在线80亿',
  HEO_HERO_TITLE_LINK: 'https://blog.netanio.com',
  // 英雄区遮罩文字
  HEO_HERO_COVER_TITLE: '随便逛逛',

  // 英雄区显示三个置顶分类
  HEO_HERO_CATEGORY_1: { title: '缸中之脑', url: '/tag/缸中之脑' },
  HEO_HERO_CATEGORY_2: { title: '游戏人生', url: '/tag/游戏人生' },
  HEO_HERO_CATEGORY_3: { title: '折腾笔记', url: '/tag/折腾笔记' },

  // 英雄区右侧推荐文章标签, 例如 [推荐] , 最多六篇文章; 若留空白''，则推荐最近更新文章
  HEO_HERO_RECOMMEND_POST_TAG: '推荐',
  HEO_HERO_RECOMMEND_POST_SORT_BY_UPDATE_TIME: false, // 推荐文章排序，为`true`时将强制按最后修改时间倒序
  //   HERO_RECOMMEND_COVER: 'https://cdn.pixabay.com/photo/2015/10/30/20/13/sunrise-1014712_1280.jpg', // 英雄区右侧图片

  // 右侧个人资料卡牌欢迎语，点击可自动切换
  HEO_INFOCARD_GREETINGS: [
    '你好矩阵！我是Messiah',
    '🕶️ 当救世主就像谈恋爱',
    '❤️ 没什么道理 你却很确定',
    '👍 全身上下都知道',
    '💡 你必须得摆脱一切',
    '🤔 犹豫和怀疑',
    '🏖️ 解放你的心灵'
  ],

  // 个人资料底部按钮
  //HEO_INFO_CARD_URL1: '/about',
  //HEO_INFO_CARD_ICON1: 'fas fa-user',
  HEO_INFO_CARD_URL1: 'https://t.me/temino666',
  HEO_INFO_CARD_ICON1: 'fab fa-telegram',
  HEO_INFO_CARD_URL2: 'https://github.com/Netanio',
  HEO_INFO_CARD_ICON2: 'fab fa-github',
  HEO_INFO_CARD_URL3: 'https://blog.netanio.com',
  HEO_INFO_CARD_TEXT3: '了解更多',

  // 用户技能图标
  HEO_GROUP_ICONS: [
    {
      title_1: 'ball',
      img_1: '/images/heo/ball.png',
      color_1: '#e4e2e2',
      title_2: 'mario',
      img_2: '/images/heo/mario.png',
      color_2: '#f2786f'
    },
    {
      title_1: 'wow',
      img_1: '/images/heo/wow.webp',
      color_1: '#57b6e6',
      title_2: 'jump',
      img_2: '/images/heo/jump.png',
      color_2: '#9fe404'
    },
    {
      title_1: 'wuyaowang',
      img_1: '/images/heo/wuyao.png',
      color_1: '#f1c232',
      title_2: 'daboluo',
      img_2: '/images/heo/da.png',
      color_2: '#f1c232'
    },
    {
      title_1: 'gta',
      img_1: '/images/heo/gta.png',
      color_1: '#ffffff',
      title_2: 'steam',
      img_2: '/images/heo/steam.png',
      color_2: '#ffffff'
    },
    {
      title_1: 'unity',
      img_1: '/images/heo/unity.png',
      color_1: '#ead1dc',
      title_2: 'unreal',
      img_2: '/images/heo/unreal.png',
      color_2: '#eeeeee'
    },
    {
      title_1: 'mw',
      img_1: '/images/heo/mw.png',
      color_1: '#f7cb4f',
      title_2: 'cod',
      img_2: '/images/heo/cod.png',
      color_2: '#e9572b'
    },
    {
      title_1: 'wf',
      img_1: '/images/heo/wf.png',
      color_1: '#0b5394',
      title_2: 'halo',
      img_2: '/images/heo/halo.png',
      color_2: '#1f1f1f'
    }
  ],

  HEO_SOCIAL_CARD: true, // 是否显示右侧，点击加入社群按钮
  HEO_SOCIAL_CARD_TITLE_1: '还没想好',
  HEO_SOCIAL_CARD_TITLE_2: '想好以后再添加现在还是进主页',
  HEO_SOCIAL_CARD_TITLE_3: '点击返回主页',
  HEO_SOCIAL_CARD_URL: 'https://blog.netanio.com',

  // *****  以下配置无效，只是预留开发 ****
  // 菜单配置
  HEO_MENU_INDEX: true, // 显示首页
  HEO_MENU_CATEGORY: true, // 显示分类
  HEO_MENU_TAG: true, // 显示标签
  HEO_MENU_ARCHIVE: true, // 显示归档
  HEO_MENU_SEARCH: true, // 显示搜索

  HEO_POST_LIST_COVER: true, // 列表显示文章封面
  HEO_POST_LIST_COVER_HOVER_ENLARGE: false, // 列表鼠标悬停放大

  HEO_POST_LIST_COVER_DEFAULT: true, // 封面为空时用站点背景做默认封面
  HEO_POST_LIST_SUMMARY: true, // 文章摘要
  HEO_POST_LIST_PREVIEW: false, // 读取文章预览
  HEO_POST_LIST_IMG_CROSSOVER: true, // 博客列表图片左右交错

  HEO_ARTICLE_ADJACENT: true, // 显示上一篇下一篇文章推荐
  HEO_ARTICLE_COPYRIGHT: true, // 显示文章版权声明
  HEO_ARTICLE_RECOMMEND: true, // 文章关联推荐

  HEO_WIDGET_LATEST_POSTS: true, // 显示最新文章卡
  HEO_WIDGET_ANALYTICS: false, // 显示统计卡
  HEO_WIDGET_TO_TOP: true,
  HEO_WIDGET_TO_COMMENT: true, // 跳到评论区
  HEO_WIDGET_DARK_MODE: true, // 夜间模式
  HEO_WIDGET_TOC: true // 移动端悬浮目录
}
export default CONFIG
