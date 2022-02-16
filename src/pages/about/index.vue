<!--
 * @Author: xkloveme
 * @Date: 2022-02-13 17:58:34
 * @LastEditTime: 2022-02-13 20:55:58
 * @LastEditors: xkloveme
 * @Description: 关于
 * @FilePath: /hexo-blog-admin/src/pages/about/index.vue
 * @Copyright © xkloveme
-->
<template>
  <div class="p-1">
    <div
      class="bg-gradient-to-r from-red-400 to- bg-yellow-300 text-white text-center italic px-4 py-2 rounded cursor-default transition-all duration-400 hover:rounded-2xl dark:(from-teal-400 to-blue-700)"
      @click="change"
    >
      {{ t("menuAbout") }}
    </div>
    <section class="p-4 t-page-position bg-secondary">
      <h1 class="mb-2">{{ t("name") }}</h1>
      <h2 class="my-2">支持应用</h2>
      <ul class="list-disc list-inside">
        <li>◎ 2022 xklovme</li>
        <li>
          浑水摸鱼，也作“混水摸鱼”，成语，原意是，在混浊的水中，鱼晕头转向，乘机摸鱼，可以得到意外的好处。比喻趁混乱时机获取不正当的利益。此计用于军事，是指当敌人混乱无主时，乘机夺取胜利的谋略。浑水摸鱼也是三十六计第二十计。
        </li>
      </ul>
      <h2 class="my-2">支持我</h2>
      <ul class="list-disc list-inside">
        <li>
          <code
            >[谨慎如果您觉得不错,请帮助开发者喝杯咖啡 ☕️,一分也是情一分也是爱 ❤️
            当然您的鼓励会让我走的更远.]</code
          >
        </li>
        <img src="https://s1.ax1x.com/2020/07/05/UpeRIA.jpg" alt="" />
      </ul>
      <h2 class="my-2">感谢</h2>
      <ul class="list-disc list-inside break-words">
        <li>[Vue 3] <a href="https://v3.vuejs.org/">(https://v3.vuejs.org/)</a></li>
        <li>
          [Tailwind CSS v3]<a href="https://tailwindcss.com"
            >(https://tailwindcss.com/)</a
          >
        </li>
        <li>[Vite]<a href="https://vitejs.dev/guide/">(https://vitejs.dev/guide/)</a></li>
        <li>
          [Element-plus]<a href="https://element-plus.gitee.io/"
            >(https://element-plus.gitee.io/)</a
          >
        </li>
        <li>
          [bytemd]<a href="https://github.com/bytedance/bytemd"
            >(https://github.com/bytedance/bytemd)</a
          >
        </li>
        <li>
          [HexoClient]<a href="https://github.com/gaoyoubo/hexo-client.git"
            >(https://github.com/gaoyoubo/hexo-client.git)</a
          >
        </li>
        <a>◎ 2022 xklovme</a>
      </ul>
    </section>
  </div>
</template>
<script setup>
import { useI18n } from "vue-i18n";
const { t, locale } = useI18n();
</script>
