<!--
 * @Author: xkloveme
 * @Date: 2022-02-14 13:25:48
 * @LastEditTime: 2022-02-18 22:43:33
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
      <!-- logo -->
      <a class="flex items-center justify-center flex-shrink-0 w-16 h-16 p-2" href="#">
        <router-link to="/test">
          <svg
            version="1.1"
            class="w-12 h-12 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 100 100"
            enable-background="new 0 0 100 100"
            xml:space="preserve"
          >
            <g>
              <path
                d="m81.22369,99.09873l-1.6031,-36.86365l-59.84904,0l0,37.9605l-19.77155,-94.09054l9.88578,-5.05504l9.88577,5.15042l0,37.91281l59.84904,0l0,-37.9605l9.88578,-5.05504l9.88578,5.15042l-18.16846,92.85062l0.00001,0l0.00001,0z"
                fill="#ea4336"
              ></path>
            </g>
          </svg>
        </router-link>
      </a>
      <!-- 首页 -->
      <router-link to="/">
        <a
          class="flex items-center justify-center flex-shrink-0 w-15 h-15 p-2 mt-4 rounded hover:bg-gray-400 dark:hover:bg-gray-800 dark:text-gray-500"
          :class="route.path == '/' ? 'bg-gray-300 text-primary text-green-700' : ''"
          href="#"
        >
          <svg
            class="w-8 h-8 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 512 512"
          >
            <path
              d="M261.56 101.28a8 8 0 0 0-11.06 0L66.4 277.15a8 8 0 0 0-2.47 5.79L63.9 448a32 32 0 0 0 32 32H192a16 16 0 0 0 16-16V328a8 8 0 0 1 8-8h80a8 8 0 0 1 8 8v136a16 16 0 0 0 16 16h96.06a32 32 0 0 0 32-32V282.94a8 8 0 0 0-2.47-5.79z"
              fill="currentColor"
            ></path>
            <path
              d="M490.91 244.15l-74.8-71.56V64a16 16 0 0 0-16-16h-48a16 16 0 0 0-16 16v32l-57.92-55.38C272.77 35.14 264.71 32 256 32c-8.68 0-16.72 3.14-22.14 8.63l-212.7 203.5c-6.22 6-7 15.87-1.34 22.37A16 16 0 0 0 43 267.56L250.5 69.28a8 8 0 0 1 11.06 0l207.52 198.28a16 16 0 0 0 22.59-.44c6.14-6.36 5.63-16.86-.76-22.97z"
              fill="currentColor"
            ></path>
          </svg>
        </a>
      </router-link>
      <!-- 设置 -->
      <router-link to="/setting">
        <a
          class="flex items-center justify-center flex-shrink-0 w-15 h-15 p-2 mt-4 rounded hover:bg-gray-400 dark:hover:bg-gray-800 dark:text-gray-500"
          :class="
            route.path == '/setting' ? 'bg-gray-300 text-primary text-green-700' : ''
          "
        >
          <svg
            class="w-8 h-8 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 24 24"
          >
            <g fill="none">
              <path
                d="M13.274 2.976a2 2 0 0 1-1.441 2.496l-.585.145a5.729 5.729 0 0 0 .007 1.807l.54.13a2 2 0 0 1 1.45 2.51l-.187.631c.44.386.94.7 1.485.922l.493-.519a2 2 0 0 1 2.9 0l.499.525a5.283 5.283 0 0 0 1.483-.912l-.198-.686a2 2 0 0 1 1.441-2.497l.584-.144a5.73 5.73 0 0 0-.006-1.807l-.54-.13a2 2 0 0 1-1.45-2.51l.187-.631a5.282 5.282 0 0 0-1.485-.922l-.493.518a2 2 0 0 1-2.9 0l-.499-.525c-.544.22-1.044.53-1.483.913l.198.686zM16.497 8c-.801 0-1.45-.671-1.45-1.5c0-.828.649-1.5 1.45-1.5c.8 0 1.45.672 1.45 1.5c0 .829-.65 1.5-1.45 1.5zm0 5A6.497 6.497 0 0 0 22 9.963v10.286a1.75 1.75 0 0 1-1.75 1.75H13c-.087 0-.172-.006-.255-.018V11.808a6.472 6.472 0 0 0 3.752 1.192zm-.255 4.5h-1.5l-.102.007a.75.75 0 0 0 0 1.486l.102.007h1.5l.102-.007a.75.75 0 0 0 0-1.486l-.102-.007zm-6.247-11c0-.167.007-.334.019-.499H3.75A1.75 1.75 0 0 0 2 7.751v12.496c0 .966.784 1.75 1.75 1.75H11c.083 0 .165-.006.245-.017V10.334A6.47 6.47 0 0 1 9.995 6.5zm-.75 11l.101.007a.75.75 0 0 1 0 1.486L9.245 19H7.743l-.102-.007a.75.75 0 0 1 0-1.486l.102-.007h1.502z"
                fill="currentColor"
              ></path>
            </g>
          </svg> </a
      ></router-link>
      <!-- 关于我 -->
      <router-link to="/about">
        <a
          class="flex items-center justify-center flex-shrink-0 w-15 h-15 p-2 mt-4 rounded hover:bg-gray-400 dark:hover:bg-gray-800 dark:text-gray-500"
          :class="route.path == '/about' ? 'bg-gray-300 text-primary text-green-700' : ''"
        >
          <svg
            class="w-8 h-8 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 24 24"
          >
            <g
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <circle cx="12" cy="12" r="9"></circle>
              <path d="M12 8h.01"></path>
              <path d="M11 12h1v4h1"></path>
            </g></svg></a
      ></router-link>
      <!-- 新建文章 -->
      <a
        class="flex items-center justify-center w-15 h-15 p-2 rounded-lg bg-transparent mt-4 hover:bg-gray-400"
        href="#"
      >
        <svg
          class="w-10 h-10 fill-current"
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
