const head = require("./config/head");
const nav = require("./config/nav");
const sidebar = require("./config/sidebar");
const plugins = require("./config/plugin");

module.exports = {
  head: head,
  serviceWorker: true, // 是否开启 PWA
  // ga: "UA-154773036-1",  
  themeConfig: {
    smoothScroll: true,
    lastUpdated: "Last Updated",

    repo: 'lxd0619 / lxd0619.github.io',

    docsRepo: 'lxd0619/vuepress-blog',
    docsDir: "docs",
    docsBranch: "master",
    editLinks: true,
    locales: {
      "/": {
        // 语言下拉菜单的展示文本
        selectText: "选择语言",
        // 该语言在下拉菜单中的 label 标签
        label: "简体中文",
        // github 编辑链接的文字
        editLinkText: "在 GitHub 上编辑此页",
        nav: nav.zh,
        sidebar: sidebar.zh
      },
      "/en/": {
        // text for the language dropdown
        selectText: "Languages",
        // label for this locale in the language dropdown
        label: "English",
        // text for the edit-on-github link
        editLinkText: "Edit this page on GitHub",
        nav: nav.en,
        sidebar: sidebar.en
      }
    }
  },
  searchMaxSuggestoins: 10,
  serviceWorker: {
    updatePopup: {
      message: "New content is available.",
      buttonText: "Refresh"
    }
  },
  plugins: plugins,
  locales: {
    // 键名是该语言所属的子路径
    // 作为特例，默认语言可以使用 '/' 作为其路径。
    "/": {
      lang: "zh-CN", // 将会被设置为 <html> 的 lang 属性
      title: "coder & cat",
      description: "A coder who love cat."
    },
    "/en/": {
      lang: "en-US",
      title: "coder & cat",
      description: "A coder who love cat."
    }
  }
};
