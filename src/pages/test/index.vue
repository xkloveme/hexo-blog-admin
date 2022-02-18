<template>
  <div class="p-1 h-full dark:text-gray-500 dark:bg-gray-900">
    <n-divider />

    <n-button @click="handleClick"> 打开edit </n-button>
    <n-button @click="handleClickFile"> 打开文件 </n-button>
  </div>
</template>
<script setup>
import { useStore } from "vuex";
import { app, dialog, event, fs, globalShortcut } from '@tauri-apps/api'
const $store = useStore();
const handleClick = () => {
  // 触发mutations，用于同步修改state的信息
  // store.commit('updateInfo', 'nihao')
  // 触发actions，用于异步修改state的信息
  $store.dispatch("Config/changeEditShow");
};
const handleClickFile = () => {
  console.log(11)
  fs.redirect('.')
};
</script>
