module.exports=[
    ["link", { rel: "icon", href: "/img/favicon.ico" }],
    ["link", { rel: "manifest", href: "/manifest.json" }],
    ["link", { rel: "apple-touch-icon", href: "/img/favicon/favicon.ico" }],
    ["link", { rel: "stylesheet", href: "/css/style.css" }],

    // ['meta', { name: 'theme-color', content: '#3eaf7c' }],
    // ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    // ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    // ['link', { rel: 'mask-icon', href: '/img/favicon.ico', color: '#3eaf7c' }],
    // ['meta', { name: 'msapplication-TileImage', content: '/img/favicon.ico' }],
    // ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
    ['script', { src: "https://www.googletagmanager.com/gtag/js?id=UA-154773036-1",async: true}],
    ['script', {},
                " window.dataLayer = window.dataLayer || [];\
                function gtag(){dataLayer.push(arguments);}\
                gtag('js', new Date());\
                gtag('config', 'UA-154773036-1');"],
                
    //  ['script', { src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js" ,async: true}],
    //  ['script', {},
    //             '(adsbygoogle = window.adsbygoogle || []).push({\
    //             google_ad_client: "ca-pub-000000000000",\
    //             enable_page_level_ads: true});'],
]