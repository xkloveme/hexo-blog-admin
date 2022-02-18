<!--
 * @Author: xkloveme
 * @Date: 2022-02-13 12:05:56
 * @LastEditTime: 2022-02-18 10:10:08
 * @LastEditors: xkloveme
 * @Description: 编辑器
 * @FilePath: /hexo-blog-admin/src/components/Edit.vue
 * @Copyright © xkloveme
-->
<template>
  <Editor
    class="w-full h-full xk-editor"
    :value="editContent"
    :locale="language"
    :plugins="plugins"
    @change="handleChange"
  />
</template>

<script setup>
import "bytemd/dist/index.min.css";
import Editor from "./editor.vue";
import Viewer from "./viewer.vue";
import gfm from "@bytemd/plugin-gfm";
import highlight from "@bytemd/plugin-highlight-ssr";
import mediumZoom from "@bytemd/plugin-medium-zoom";
import gemoji from "@bytemd/plugin-gemoji";
// 引入中文包
import zhHans from "bytemd/lib/locales/zh_Hans.json";
import gfmzhHans from "@bytemd/plugin-gfm/lib/locales/zh_Hans.json";
import { useStore } from "vuex";
const $store = useStore();

// 引入基础css
import "bytemd/dist/index.min.css";
// 引入高亮css
import "highlight.js/styles/vs.css";

const language = computed(() =>
  $store.state.Config.language == "zh-CN" ? zhHans : null
);
const editContent = ref("");
const plugins = computed(() =>
  $store.state.Config.language == "zh-CN"
    ? [gfm({ locale: gfmzhHans }), gemoji(), highlight(), mediumZoom()]
    : [gfm(), gemoji(), highlight(), mediumZoom()]
);

function handleChange(v) {
  editContent.value = v;
}
</script>
<style lang="scss">
.xk-editor {
  .bytemd {
    height: 100% !important;
  }
}
</style>
