/*
 * @Author: xkloveme
 * @Date: 2022-02-08 00:48:55
 * @LastEditTime: 2022-02-13 17:53:50
 * @LastEditors: xkloveme
 * @Description: 国际化
 * @FilePath: /hexo-blog-admin/src/locales/index.js
 * @Copyright © xkloveme
 */
import { createI18n } from 'vue-i18n'        //引入vue-i18n组件
import store from '@/store'
//引入同级目录下文件
const modules = import.meta.globEager('./*')

//假设你还有其他目录下的语言文件 它的路径是 src/views/home/locales/en-US.js
//那么你就可以 使用 :lower:（小写） :upper:（大写） 来引入文件
const viewModules = import.meta.globEager('../views/**/locales/[[:lower:]][[:lower:]]-[[:upper:]][[:upper:]].js')

function getLangAll () {
  let message = {}
  getLangFiles(modules, message)
  getLangFiles(viewModules, message)
  return message
}
/**
 * 获取所有语言文件
 * @param {Object} mList
 */
function getLangFiles (mList, msg) {
  for (let path in mList) {
    if (mList[path].default) {
      //  获取文件名
      let pathName = path.substr(path.lastIndexOf('/') + 1, 5)
      if (msg[pathName]) {
        msg[pathName] = {
          ...mList[pathName],
          ...mList[path].default
        }
      } else {
        msg[pathName] = mList[path].default
      }
    }
  }
}

//注册i8n实例并引入语言文件
const i18n = createI18n({
  legacy: false,
  globalInjection: true, // 全局注册 $t方法
  locale: store.getters['Config/getLanguage'] || 'zh-CN',
  gLobalInjection: true,
  messages: getLangAll()
})

export default i18n; //将i18n暴露出去，在main.js中引入挂载