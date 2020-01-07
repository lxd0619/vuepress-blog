const vue = "/zh/front-end/vue/";
const react = "/zh/front-end/react/";
const css = "/zh/front-end/css/";
const weChat = "/zh/front-end/weChat/";
const nodejs = "/zh/back-end/nodejs/";
const database = "/zh/back-end/database/";
const vuepress = "/zh/notes/vuepress/";
const todo = '/zh/notes/todo/';

let vue_arr = []
for(let i = 0;i<4;i++){
    vue_arr.push(`${vue}${i+1}`)
}
console.log(vue_arr)

module.exports = {
  zh: {
    // "/zh/front-end/vue": [`${vue}1`, `${vue}2`, `${vue}3`, `${vue}4`],
    "/zh/front-end/vue": vue_arr,
    "/zh/front-end/react": [`${react}1`],
    "/zh/front-end/css": [`${css}`],
    "/zh/front-end/weChat": [`${weChat}1`],
    "/zh/back-end/nodejs": [`${nodejs}1`],
    "/zh/back-end/database": [`${database}1`],
    "/zh/notes/vuepress": [`${vuepress}1`, `${vuepress}2`],
    "/zh/notes/todo": [`${todo}1`]
  },
  en: {
    "/en/front-end/vue/": require("../../en/front-end/vue/sidebar"),
    "/en/front-end/react/": require("../../en/front-end/react/sidebar"),
    "/en/notes/vuepress/": require("../../en/notes/vuepress/sidebar"),
    "/en/notes/todo/": require("../../en/notes/todo/sidebar")
  }
};
