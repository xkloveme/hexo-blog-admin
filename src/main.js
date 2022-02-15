import 'virtual:windi.css';
import { createApp } from 'vue';
import routes from './routes';
import App from './app.vue';

import './plugins/configure-ynetwork';

import 'vue-global-api/getCurrentInstance';
import 'vue-global-api/ref';
import 'vue-global-api/reactive';
import 'vue-global-api/computed';
import 'vue-global-api/watch';
import 'vue-global-api/watchEffect';
import store from "@/store";
// 国际化
import i18n from '@/locales'
// import * as ElIconModules from '@element-plus/icons-vue'


const app = createApp(App);

app.use(routes);
app.use(i18n);
app.use(store);
// // 统一注册Icon图标
// for (const iconName in ElIconModules) {
//   if (Reflect.has(ElIconModules, iconName)) {
//     const item = ElIconModules[iconName]
//     app.component(iconName, item)
//   }
// }

app.mount('#app');
