import 'virtual:windi.css';
import { createApp } from 'vue';
import routes from './routes';
import App from './app.vue';

import './plugins/configure-ynetwork';

import 'vue-global-api/ref';
import 'vue-global-api/reactive';
import 'vue-global-api/computed';
import 'vue-global-api/watch';
import 'vue-global-api/watchEffect';

// 国际化
import i18n from './locales'


const app = createApp(App);

app.use(routes);
app.use(i18n);

app.mount('#app');
