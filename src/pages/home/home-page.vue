<script setup>
import { useI18n } from "vue-i18n";
import Counter from '../../components/counter.vue';
import ColorChecker from '../../components/color-checker.vue';
import Requester from '../../components/requester.vue';
const { t,locale } = useI18n();

function change(){
locale.value = locale.value=='zh-CN'?'en-US':'zh-CN'
}
console.log(locale,99)
</script>

<template>

  <el-button type="primary">Primary</el-button>
    <el-date-picker  type="date" placeholder="Pick a day">
      </el-date-picker>
      <div class="bg-gradient-to-r from-green-400 to-blue-500
text-white text-center italic
px-4 py-2 rounded cursor-default
transition-all duration-400
hover:rounded-2xl
dark:(from-teal-400 to-yellow-500)" @click="change">
        {{t('name')}}
      </div>
      
       <el-icon color="#409EFC" class="no-inherit">
    <share />
  </el-icon>
</template>
