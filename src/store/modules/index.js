/**
 * The file enables `@/store/index.js` to import all vuex modules
 * in a one-shot manner. There should not be any reason to edit this file.
 */
const files = import.meta.globEager('./*.js')
const modules = {}
for (const key in files) {
  const file = files[key].default;
  if (file != undefined) {
    // 截取文件名
    modules[key.replace(/(\.\/)|(\.js)/g, '')] = file
  }
}

export default modules