module.exports = [
  "@vuepress/back-to-top",
  "@vuepress/active-header-links",
  "@vuepress/medium-zoom"[
    ("@vuepress/pwa",
    {
      serviceWorker: true,
      updatePopup: true,
    })
  ],
  [
    "@vuepress/google-analytics",
    {
      ga: "UA-154773036-1",
    },
  ],
  ["autobar"],
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
      showIcon: "/img/favicon/cat.ico",
      showText: "(/≧▽≦/)咦！又好了！",
      hideIcon: "/img/favicon/failure.ico",
      hideText: "(●—●)喔哟,崩溃啦！",
      recoverTime: 2000,
    },
  ],
  [
    "cursor-effects",
    {
      size: 2, // size of the particle, default: 2
      shape: ["star"], // shape of the particle, default: 'star'   ["star" | "circle"]
      zIndex: 999999999, // z-index property of the canvas, default: 999999999
    },
  ],
  // ["go-top"],
  [
    "@vuepress-reco/vuepress-plugin-kan-ban-niang",
    {
      theme: [
        "blackCat",
        "whiteCat",
        "miku",
        "haruto",
        "koharu",
        "izumi",
        "shizuku",
        "wanko",
        "z16",
        "haru1",
        "haru2",
      ],
      clean: false, //是否开启clean模式(隐藏所有按钮)
      messages: {
        welcome: "欢迎来到我的博客！",
        home: "心里的花，我想要带你回家。",
        theme: "好吧，希望你能喜欢我的其他小伙伴。",
        close: "你知道我喜欢吃什么吗？痴痴地望着你。",
      },
      messageStyle: { right: "68px", bottom: "190px" },
      modelStyle: { right: "90px", bottom: "20px", opacity: "0.9" },
      btnStyle: { right: "90px", bottom: "60px" },
      width: 150,
      height: 220,
    },
  ],
  [
    "register-components",
    {
      components: [
        {
          name: "hello",
          path: "../components/hello.vue",
        },
      ],
    },
  ],
  // [
  //   'vuepress-plugin-comment',
  //   {
  //     choosen: 'valine',
  //     // options选项中的所有参数，会传给Valine的配置
  //     options: {
  //       el: '#valine-vuepress-comment',
  //       appId: 'aV8lquhY5GiCYoNFnV8WoxDp-9Nh9j0Va',
  //       appKey: 'fH9GGWpjhRPWzNmxlMbLO278'
  //     }
  //   }
  // ],

  [
    "@vssue/vuepress-plugin-vssue",
    {
      // 设置 `platform` 而不是 `api`
      platform: "github",
      // 其他的 Vssue 配置
      owner: "lxd0619",
      repo: "lxd0619.github.io",
      clientId: "a584f756d8fd0d85d0a1",
      clientSecret: "96fa17fa7b6f72b5d08adb794e79c46dd4d2c0e8",
    },
  ],
];
