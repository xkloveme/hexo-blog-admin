/*
 * @Author: xkloveme
 * @Date: 2022-02-12 18:26:49
 * @LastEditTime: 2022-02-13 12:37:07
 * @LastEditors: xkloveme
 * @Description: 状态管理
 * @FilePath: /hexo-blog-admin/src/store/index.js
 * @Copyright © xkloveme
 */
import Vuex from "vuex";
import modules from "./modules";
import VuexPersistence from 'vuex-persist'
const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

export default new Vuex.Store({
  modules,
  namespaced: true,
  // 如果启用严格默认，hexo.watch()的时候文件发生变更会抛出异常，所以这里默认关闭
  strict: false,
  // strict: process.env.NODE_ENV !== 'production'
  plugins: [vuexLocal.plugin]
});
