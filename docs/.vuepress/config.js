const head = require('./config/head')
const nav = require('./config/nav')
const sidebar = require('./config/sidebar')
const plugins = require('./config/plugin')

module.exports = {
  // title: "不见长安",
  description: "~举目见日,不见长安~",
  head: head,
  // base: "/",
  // repo: 'git@github.com:lxd0619/lxd0619.github.io.git',
  // repoLabel: 'My GitHub',
  serviceWorker: true, // 是否开启 PWA
  ga: "UA-154773036-1",
  markdown: {
    lineNumbers: false  //markdown行号
  },
  themeConfig: {
    nav: nav,
    // 添加侧边栏
    sidebar: sidebar,
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
  plugins: plugins
};
