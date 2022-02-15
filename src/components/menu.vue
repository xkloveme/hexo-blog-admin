<!--
 * @Author: xkloveme
 * @Date: 2022-02-14 13:25:48
 * @LastEditTime: 2022-02-15 13:29:19
 * @LastEditors: xkloveme
 * @Description: 菜单
 * @FilePath: /hexo-blog-admin/src/components/menu.vue
 * @Copyright © xkloveme
-->
<template>
  <div class="flex w-full h-screen text-gray-700 dark:text-gray-500 dark:bg-gray-900">
    <div
      class="flex flex-col items-center flex-shrink-0 w-full border-r border-gray-300 bg-gray-200 dark:text-gray-500 dark:bg-gray-900 py-3"
    >
      <a class="flex items-center justify-center flex-shrink-0 w-16 h-16 p-2" href="#">
        <el-image
          class="w-full h-full select-none"
          src="/src/assets/logo.png"
          fit="fill"
        ></el-image>
      </a>
      <!-- 首页 -->
      <router-link to="/">
        <a
          class="flex items-center justify-center flex-shrink-0 w-10 h-10 mt-4 rounded hover:bg-gray-300 dark:hover:bg-gray-800 dark:text-gray-500"
          :class="route.path == '/' ? 'bg-gray-300 text-primary' : ''"
          href="#"
        >
          <el-icon :size="32"><house /></el-icon>
        </a>
      </router-link>
      <a
        class="flex items-center justify-center flex-shrink-0 w-10 h-10 mt-4 rounded hover:bg-gray-300"
        href="#"
      >
        <el-icon :size="32"><house /></el-icon>
      </a>
      <router-link to="/setting">
        <a
          class="flex items-center justify-center flex-shrink-0 w-10 h-10 mt-4 rounded hover:bg-gray-300"
          href="#"
          :class="route.path == '/setting' ? 'bg-gray-300 text-green-400' : ''"
        >
          <el-icon :size="32"><setting /></el-icon> </a
      ></router-link>

      <a class="w-10 h-10 rounded-lg bg-gray-400 mt-4 hover:bg-gray-500" href="#"></a>
      <a
        class="flex items-center justify-center w-10 h-10 rounded-lg bg-transparent mt-4 hover:bg-gray-400"
        href="#"
      >
        <svg
          class="w-6 h-6 fill-current"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 6v6m0 0v6m0-6h6m-6 0H6"
          ></path>
        </svg>
      </a>
    </div>
  </div>
</template>
<script setup>
import { useRoute } from "vue-router";
const route = useRoute();
console.log("当前路由", route.path.value);
</script>
