<template>
 <div class="container">
   ddd
 </div>
 <div @click="handleClick">
   222
 </div>
</template>
<script setup>
import { useStore } from 'vuex'
const $store = useStore()
   const handleClick = () => {
      // 触发mutations，用于同步修改state的信息
      // store.commit('updateInfo', 'nihao')
      // 触发actions，用于异步修改state的信息
      $store.dispatch('Config/changeEditShow')
    }
</script>