module.exports = {
  // title: "不见长安",
  description: "~举目见日,不见长安~",
  head: require('./config/head'),
  // base: "/",
  // repo: 'git@github.com:lxd0619/lxd0619.github.io.git',
  // repoLabel: 'My GitHub',
  serviceWorker: true, // 是否开启 PWA
  ga: "UA-154773036-1",
  markdown: {
    lineNumbers: false  //行号
  },
  themeConfig: {
    nav: require("./nav"),
    // 添加侧边栏
    sidebar: require("./sidebar"),
    sidebarDepth: 3,
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
  plugins: require('./config/plugin')
};
