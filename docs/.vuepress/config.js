module.exports = {
    title: '不见长安',
    description: '~举目见日，不见长安~',
    head: [
        ['link', { rel: 'icon', href: '/img/icon.ico' }],
        ['link', {rel: 'stylesheet', href: '/css/style.css'}],
    ],
    base: '/',
    repo: 'https://github.com/lxd0619/lxd0619.github.io.git',
    repoLabel: 'My GitHub',
    serviceWorker: true, // 是否开启 PWA
    markdown: {
        lineNumber: false //
    },
    themeConfig: {
        nav: require('./nav'),
        // 添加侧边栏
        sidebar: require('./sidebar'),
        // sidebar: 'auto',
        // sidebarDepth: 2
    }
}
