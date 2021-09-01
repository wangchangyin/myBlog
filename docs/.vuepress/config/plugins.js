// 插件配置
module.exports = [
  // 本地插件
  // [require('./plugins/love-me'), { // 鼠标点击爱心特效
  //   color: '#11a8cd', // 爱心颜色，默认随机色
  //   excludeClassName: 'theme-vdoing-content' // 要排除元素的class, 默认空''
  // }],

  'vuepress-plugin-baidu-autopush', // 百度自动推送

  // 可以添加第三方搜索链接的搜索框（原官方搜索框的参数仍可用）
  // [
  //   'thirdparty-search',
  //   {
  //     thirdparty: [
  //       // 可选，默认 []
  //       {
  //         title: '在MDN中搜索',
  //         frontUrl: 'https://developer.mozilla.org/zh-CN/search?q=', // 搜索链接的前面部分
  //         behindUrl: '', // 搜索链接的后面部分，可选，默认 ''
  //       },
  //       {
  //         title: '在Runoob中搜索',
  //         frontUrl: 'https://www.runoob.com/?s=',
  //       },
  //       {
  //         title: '在Vue API中搜索',
  //         frontUrl: 'https://cn.vuejs.org/v2/api/#',
  //       },
  //       {
  //         title: '在Bing中搜索',
  //         frontUrl: 'https://cn.bing.com/search?q=',
  //       },
  //       {
  //         title: '通过百度搜索本站的',
  //         frontUrl: 'https://www.baidu.com/s?wd=site%3Axugaoyi.com%20',
  //       },
  //     ],
  //   },
  // ],

  //引入fulltext-search搜索插件
  [
    'fulltext-search'
  ],

  //要在标签栏当时选中和离开页面时会有变化
  [
    "dynamic-title",
    {
      showIcon: "/favicon.ico",
      showText: "(/≧▽≦/)咦！又好了！",
      hideIcon: "/failure.ico",
      hideText: "(●—●)喔哟，崩溃啦！",
      recoverTime: 2000
    }
  ],

  //引入音乐播放器
  [
    "meting",
    {
      meting: {
        server: "tencent", // netease:网易云;tencent:qq音乐，xiami:虾米音乐 "kuwo" | "kugou" | "baidu"
        type: "playlist",
        mid: "8072838999",     //网易云:37432514   tencent:8072838999
      },
      aplayer: {
        autoplay: true,  //是否开启自动播放
        mini: true,  //是否开启迷你模式
        theme: '#282c34',
        lrcType:3  //显示歌词  3 | 1 | 0（0：禁用 lrc 歌词，1：lrc 格式的字符串，3：lrc 文件 url）
      },
      mobile: {
        cover: false,
        lrc: false
      }
    }
  ],



  [
    'one-click-copy',
    {
      // 代码块复制按钮
      copySelector: ['div[class*="language-"] pre', 'div[class*="aside-code"] aside'], // String or Array
      copyMessage: '复制成功,请标注来源哦', // default is 'Copy successfully and then paste it for use.'
      duration: 1000, // prompt message display time.
      showInMobile: false, // whether to display on the mobile side, default: false.
    },
  ],
  [
    'demo-block',
    {
      // demo演示模块 https://github.com/xiguaxigua/vuepress-plugin-demo-block
      settings: {
        // jsLib: ['http://xxx'], // 在线示例(jsfiddle, codepen)中的js依赖
        // cssLib: ['http://xxx'], // 在线示例中的css依赖
        // vue: 'https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js', // 在线示例中的vue依赖
        jsfiddle: false, // 是否显示 jsfiddle 链接
        codepen: true, // 是否显示 codepen 链接
        horizontal: false, // 是否展示为横向样式
      },
    },
  ],
  [
    'vuepress-plugin-zooming', // 放大图片
    {
      selector: '.theme-vdoing-content img:not(.no-zoom)', // 排除class是no-zoom的图片
      options: {
        bgColor: 'rgba(0,0,0,0.6)',
      },
    },
  ],
  [
    'vuepress-plugin-baidu-tongji', // 百度统计
    {
      hm: '503f098e7e5b3a5b5d8c5fc2938af002',
    },
  ],
  [
    'vuepress-plugin-comment', // 评论
    {
      choosen: 'gitalk',
      options: {
        clientID: '2a3aacfb1444109984e5',
        clientSecret: 'e5e9eef7810b3761279ff3b782f0e821ecc53318',
        repo: 'myBlog', // GitHub 仓库
        owner: 'wangchangyin', // GitHub仓库所有者
        admin: ['wangchangyin'], // 对仓库有写权限的人
        // distractionFreeMode: true,
        pagerDirection: 'last', // 'first'正序 | 'last'倒序
        id: '<%- (frontmatter.permalink || frontmatter.to.path).slice(-16) %>', //  页面的唯一标识,长度不能超过50
        title: '「评论」<%- frontmatter.title %>', // GitHub issue 的标题
        labels: ['Gitalk', 'Comment'], // GitHub issue 的标签
        body:
          '页面：<%- window.location.origin + (frontmatter.to.path || window.location.pathname) %>', // GitHub issue 的内容
      },
    },
  ],
  [
    '@vuepress/last-updated', // "上次更新"时间格式
    {
      transformer: (timestamp, lang) => {
        const dayjs = require('dayjs') // https://day.js.org/
        return dayjs(timestamp).format('YYYY/MM/DD, HH:mm:ss')
      },
    },
  ],
]
