<template>
  <el-config-provider :locale="locale">
    <splitpanes class="default-theme dark:my-theme" style="height: 100vh">
      <pane :size="5" :max-size="10" class="overflow-y-auto">
        <!-- <p>Navigation</p>
      <ul>
        <li><router-link to="/">Home view</router-link></li>
        <li><router-link to="/about-us">Another view</router-link></li>
        <li><router-link to="/setting">settting</router-link></li>
        <li><router-link to="/about">about</router-link></li>
      </ul> -->
        <Menu />
      </pane>
      <pane style="overflow-y: auto" class="dark:text-gray-500 dark:bg-gray-900">
        <router-view />
      </pane>
      <pane :min-size="20" :size="70" v-if="showEdit">
        <Edit></Edit>
      </pane>
    </splitpanes>
  </el-config-provider>
</template>
<script setup>
import { Splitpanes, Pane } from "splitpanes";
// import treeNav from './components/TreeNav.vue'
import "splitpanes/dist/splitpanes.css";
import Edit from "@/components/Edit.vue";
import Menu from "@/components/menu.vue";
import { useStore } from "vuex";
const $store = useStore();
const showEdit = computed(() => $store.state.Config.showEdit);
const language = computed(() => $store.state.Config.language);
import zhCN from "element-plus/lib/locale/lang/zh-cn";
import En from "element-plus/lib/locale/lang/en";

const locale = computed(() => (language.value == "zh-CN" ? zhCN : En));

let theme = $store.state.Config.theme || "light";
if (theme === "dark") {
  document.querySelector("html").classList.add("dark");
} else {
  document.querySelector("html").classList.remove("dark");
}
</script>
<style lang="scss">
.splitpanes {
  &--vertical > &__splitter {
    background: red;
  }
  &--horizontal > &__splitter {
    background: red;
  }
}
</style>