// nav
module.exports = [
  { text: '首页', link: '/' },
  {
    text: '后端',
    link: '/back-end/', //目录页链接，此处link是vdoing主题新增的配置项，有二级导航时，可以点击一级导航跳到目录页
    items: [
      // 说明：以下所有link的值只是在相应md文件定义的永久链接（不是什么特殊生成的编码）。另外，注意结尾是有斜杠的
      {
        text: '后端笔记',
        items: [
          { text: 'java', link: '/pages/4400b9/' },
          { text: '数据库', link: '/pages/31cb74/' },
          { text: 'linux', link: '/pages/44c61f/' },
          { text: '数据结构', link: '/pages/261ec0/' },
          // { text: 'Vue', link: '/pages/5d463fbdb172d43b/' },
        ],
      },
      {
        text: 'Spring全家桶',
        items: [
          { text: 'Spring', link: '/pages/486416/' },
          { text: 'SpringBoot', link: '/pages/9af6ea/' },
          { text: 'SpringCloud', link: '/07.java/10.spring全家桶/00.spring/' },
        ],
      },
    ],
  },
  {
    text: '前端',
    link: '/web/',
    items: [
      { text: 'JS', link: '/pages/1f749b/' },
      { text: 'Layui', link: '/pages/9ff38f/' },
    ],
  },
  {
    text: '技术',
    link: '/technology/',
    items: [
      { text: '工具使用', link: '/tool/' },
      { text: '面试笔记', link: '/interview/' },
      { text: '环境搭建', link: '/pages/9fef0c/' },
      { text: '项目笔记', link: '/pages/0d18d5/' },

      { text: '技术文档', link: '/pages/9a7ee40fc232253e/' },
      { text: 'GitHub技巧', link: '/pages/4c778760be26d8b3/' },
      { text: '博客搭建', link: '/pages/41f87d890d0a02af/' },
    ],
  },
  {
    text: '更多',
    link: '/more/',
    items: [
      { text: '学习', link: '/pages/f2a556/' },
      { text: '面试', link: '/pages/aea6571b7a8bae86/' },
      { text: '心情杂货', link: '/pages/2d615df9a36a98ed/' },
      { text: '实用技巧', link: '/pages/baaa02/' },
      { text: '友情链接', link: '/friends/' },
    ],
  },
  { text: '关于', link: '/about/' },
  {
    text: '收藏',
    link: '/pages/beb6c0bd8a66cea6/',
    // items: [
    //   { text: '网站', link: '/pages/beb6c0bd8a66cea6/' },
    //   { text: '资源', link: '/pages/eee83a9211a70f9d/' },
    //   { text: 'Vue资源', link: '/pages/12df8ace52d493f6/' },
    // ],
  },
  {
    text: '索引',
    link: '/archives/',
    items: [
      { text: '分类', link: '/categories/' },
      { text: '标签', link: '/tags/' },
      { text: '归档', link: '/archives/' },
    ],
  },
]
