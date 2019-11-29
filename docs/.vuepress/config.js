module.exports = {
  // title: "不见长安",
  description: "~举目见日,不见长安~",
  head: [
    ["link", { rel: "icon", href: "/img/favicon.ico" }],
    ["link", { rel: "manifest", href: "/manifest.json" }],
    ["link", { rel: "apple-touch-icon", href: "/img/favicon.ico" }],
    ["link", { rel: "stylesheet", href: "/css/style.css" }]
  ],
  // base: "/",
  // repo: 'git@github.com:lxd0619/lxd0619.github.io.git',
  // repoLabel: 'My GitHub',
  serviceWorker: true, // 是否开启 PWA
  markdown: {
    lineNumbers: true
  },
  themeConfig: {
    nav: require("./nav"),
    // 添加侧边栏
    sidebar: require("./sidebar"),
    // sidebar: "auto",
    sidebarDepth: 2,
    lastUpdated: "Last Updated"
  },
  searchMaxSuggestoins: 10,
  serviceWorker: {
    updatePopup: {
      message: "New content is available.",
      buttonText: "Refresh"
    }
  },
  editLinks: true,
  editLinkText: "在 GitHub 上编辑此页 ！",
  //在背景添加一条彩带
  plugins: [
    [
      "ribbon",
      {
        size: 90, // 彩带的宽度,默认为 90
        opacity: 0.7, // 彩带的不透明度,默认为 0.3
        zIndex: 0 // 彩带的 z-index 属性,默认值为 -1
      }
    ],
    [
      "dynamic-title",
      {
        showIcon: "/img/favicon.ico",
        showText: "(/≧▽≦/)咦！又好了！",
        hideIcon: "/img/failure.ico",
        hideText: "(●—●)喔哟,崩溃啦！",
        recoverTime: 2000
      }
    ],
    [
      "cursor-effects",
      {
        size: 2, // size of the particle, default: 2
        shape: ["star"], // shape of the particle, default: 'star'   ["star" | "circle"]
        zIndex: 999999999 // z-index property of the canvas, default: 999999999
      }
    ],
    ["go-top"],
    [
      "vuepress-plugin-live2d",
      {
        modelName: ["z16","Epsilon2.1","izumi","koharu","shizuku","miku","hijiki","tororo"], // 模型名称,可传入一个字符串或者数组,可选值8个类型（z16,Epsilon2.1,izumi,koharu,shizuku,miku, hijiki, tororo),也可传入一个数组['hijiki','tororo',...](传入数组时刷新页面或者访问不同页面随机展示 )
        mobileShow: true, // 是否在移动设备上显示
        position: "left" // 显示在左下角还是右下角
      }
    ]
  ]
};
