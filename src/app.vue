<template>
  <n-config-provider
    :locale="localZhCN"
    :date-locale="localdateZhCN"
    :theme="mydarkTheme"
  >
    <splitpanes class="default-theme" style="height: 100vh" @resize="resize">
      <pane :max-size="10" :size="size" class="overflow-y-auto">
        <Menu />
      </pane>
      <pane
        :size="100 - size - editSize"
        class="overflow-y-auto dark:text-gray-500 dark:bg-gray-900"
      >
        <router-view />
      </pane>
      <pane :min-size="10"  :max-size="80" :size="editSize" v-show="showEdit">
        <Edit v-if="showEdit"></Edit>
      </pane>
    </splitpanes>
  </n-config-provider>
</template>
<script setup>
import { Splitpanes, Pane } from "splitpanes";
// import treeNav from './components/TreeNav.vue'
import "splitpanes/dist/splitpanes.css";
import Edit from "@/components/Edit.vue";
import Menu from "@/components/menu.vue";
import { NConfigProvider } from "naive-ui";
import { zhCN, dateZhCN } from "naive-ui";
import { darkTheme } from "naive-ui";
import { useStore } from "vuex";
const $store = useStore();
const showEdit = computed(() => $store.state.Config.showEdit);
const language = computed(() => $store.state.Config.language);
const theme = computed(() => $store.state.Config.theme);

const localZhCN = computed(() => (language.value == "zh-CN" ? zhCN : null));
const localdateZhCN = computed(() => (language.value == "zh-CN" ? dateZhCN : null));
const mydarkTheme = computed(() => (theme.value == "dark" ? darkTheme : null));
const color = computed(() =>
  theme.value == "dark" ? "rgba(0, 0, 0, 0.8)" : "rgba(255, 255, 255, 0.5)"
);
let size = ref(8);
let editSize = computed(() => (showEdit.value ? 50 : 0));
function resize(paneSize) {
  size.value = paneSize[0].size;
  editSize.value = paneSize[2].size;
}

onMounted(() => {
  if (theme.value === "dark") {
    document.querySelector("html").classList.add("dark");
  } else {
    document.querySelector("html").classList.remove("dark");
  }
});
</script>
<style lang="scss">
.splitpanes {
  &--vertical > &__splitter {
    background: v-bind(color) !important;
    border-left: 1px solid v-bind(color) !important;
  }
  &--horizontal > &__splitter {
    background: v-bind(color) !important;
    border-left: 1px solid v-bind(color) !important;
  }
}
</style>
