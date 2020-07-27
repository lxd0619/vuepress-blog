const vue = "/zh/front_end/vue/";
const react = "/zh/front_end/react/";
const css = "/zh/front_end/css/";
const javascript = "/zh/front_end/javascript/";
const vuepress = "/zh/front_end/vuepress/";
const weChat = "/zh/front_end/weChat/";
const nodejs = "/zh/back_end/nodejs/";
const database = "/zh/back_end/database/";
const sundries = "/zh/notes/sundries/";
const todo = "/zh/notes/todo/";

const vue_en = "/en/front_end/vue/";
const react_en = "/en/front_end/react/";
const css_en = "/en/front_end/css/";
const javascript_en = "/en/front_end/javascript/";
const vuepress_en = "/en/front_end/vuepress/";
const weChat_en = "/en/front_end/weChat/";
const nodejs_en = "/en/back_end/nodejs/";
const database_en = "/en/back_end/database/";
const sundries_en = "/en/notes/sundries/";
const todo_en = "/en/notes/todo/";

nav = (type, num) => {
  let arr = [];
  arr.push(type);
  for (let i = 0; i < num; i++) {
    arr.push(`${type}${i + 1}`);
  }
  return arr;
};

module.exports = {
  zh: {
    "/zh/front_end/vue/": nav(vue, 4),
    "/zh/front_end/react/": nav(react, 1),
    "/zh/front_end/css/": nav(css, 1),
    "/zh/front_end/javascript/": nav(javascript, 1),
    "/zh/front_end/vuepress/": nav(vuepress, 5),
    "/zh/front_end/weChat/": nav(weChat, 1),
    "/zh/back_end/nodejs/": nav(nodejs, 1),
    "/zh/back_end/database/": nav(database, 1),
    "/zh/notes/sundries/": nav(sundries, 3),
    "/zh/notes/todo/": nav(todo, 3),
  },
  en: {
    "/en/front_end/vue/": nav(vue_en, 4),
    "/en/front_end/react/": nav(react_en, 1),
    "/en/front_end/css/": nav(css_en, 1),
    "/en/front_end/javascript/": nav(javascript_en, 1),
    "/en/front_end/vuepress/": nav(vuepress_en, 5),
    "/en/front_end/weChat/": nav(weChat_en, 1),
    "/en/back_end/nodejs/": nav(nodejs_en, 1),
    "/en/back_end/database/": nav(database_en, 1),
    "/en/notes/sundries/": nav(sundries_en, 3),
    "/en/notes/todo/": nav(todo_en, 2),
  },
};
