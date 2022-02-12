import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import WindiCSS from 'vite-plugin-windicss'
import { resolve } from 'path'
import VueI18n from '@intlify/vite-plugin-vue-i18n'
export default defineConfig({
  plugins: [
    vue(),
    WindiCSS(),
     // https://github.com/intlify/vite-plugin-vue-i18n
     VueI18n({
      // define the locales files directory
      include: [resolve(__dirname, 'src/locales/**')],
    }),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ],
  resolve: {
    alias: {
      '@': resolve('src'),
      '*': resolve('')
    }
  },
  define: {
    'process.env': {}
  },
  rollupOptions: {
    output: {
      inlineDynamicImports: true
    }
  },
});
