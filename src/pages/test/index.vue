<template>
  <div class="p-1 h-full dark:text-gray-500 dark:bg-gray-900">
    <n-divider />

    <n-button @click="handleClick"> 打开edit </n-button>
    <n-button @click="handleClickFile"> 打开文件1{{ arch }} </n-button>
    <!-- {{ list }} -->
    <n-tree block-line :data="list" selectable   virtual-scroll
    style="height: 320px"/>
  </div>
</template>
<script setup>
import { readBinaryFile, readDir } from "@tauri-apps/api/fs";
import { useStore } from "vuex";
import { open } from "@tauri-apps/api/dialog";
const $store = useStore();
const handleClick = () => {
  // 触发mutations，用于同步修改state的信息
  // store.commit('updateInfo', 'nihao')
  // 触发actions，用于异步修改state的信息
  $store.dispatch("Config/changeEditShow");
};
let arch = ref("");
  let list = ref([{ key: 1, label: "节点" }]);
const handleClickFile = async () => {
  const dir = await open({
    directory: true,
  });
  const files = await readDir(dir);
  if (!files) {
    return;
  }
  let arr =[]
  files.map(file =>{
    if(!file.name.startsWith('.')){
      arr.push({...file,key:file.path,label:file.name})
    }
  })
  list.value =arr
  // list.value = [{ key: 1, label: "新节点",children:[{key: 2, label: "旧节点"}] }]
  // list.value = files.map(file => return {...file,key:file.name})
  console.log(dir, files, 88);
};
</script>
