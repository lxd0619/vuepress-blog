module.exports = [
  ['autobar'],
  // [
  //   "ribbon",
  //   {
  //     size: 90, // 彩带的宽度,默认为 90
  //     opacity: 0.7, // 彩带的不透明度,默认为 0.3
  //     zIndex: 0 // 彩带的 z-index 属性,默认值为 -1
  //   }
  // ],
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
  // ["go-top"],
  ['@vuepress/back-to-top', true],
  [
    "vuepress-plugin-live2d",
    {
      modelName: [
        "z16",
        "Epsilon2.1",
        "izumi",
        "koharu",
        "shizuku",
        "miku",
        "hijiki",
        "tororo"
      ], // 模型名称,可传入一个字符串或者数组,可选值8个类型（z16,Epsilon2.1,izumi,koharu,shizuku,miku, hijiki, tororo),也可传入一个数组['hijiki','tororo',...](传入数组时刷新页面或者访问不同页面随机展示 )
      mobileShow: true, // 是否在移动设备上显示
      position: "left" // 显示在左下角还是右下角
    }
  ],
  // [
  //   "@vssue/vuepress-plugin-vssue",
  //   {
  //     // 设置 `platform` 而不是 `api`
  //     platform: "github",
  //     // 其他的 Vssue 配置
  //     owner: "lxd0619",
  //     repo: "lxd0619.github.io",
  //     clientId: "a584f756d8fd0d85d0a1",
  //     clientSecret: "96fa17fa7b6f72b5d08adb794e79c46dd4d2c0e8"
  //   }
  // ],
  [
    "@vuepress/pwa",
    {
      serviceWorker: true,
      updatePopup: true
    }
  ],
  [
    "@vuepress/google-analytics",
    {
      ga: "UA-154773036-1" // UA-00000000-0
    }
  ],
  [
    'vuepress-plugin-comment',
    {
      choosen: 'valine', 
      // options选项中的所有参数，会传给Valine的配置
      options: {
        el: '#valine-vuepress-comment',
        appId: 'aV8lquhY5GiCYoNFnV8WoxDp-9Nh9j0Va',
        appKey: 'fH9GGWpjhRPWzNmxlMbLO278'
      }
    }
  ]
];
