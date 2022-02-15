<!--
 * @Author: xkloveme
 * @Date: 2022-02-13 15:11:13
 * @LastEditTime: 2022-02-15 13:06:38
 * @LastEditors: xkloveme
 * @Description: 设置页
 * @FilePath: /hexo-blog-admin/src/pages/setting/index.vue
 * @Copyright © xkloveme
-->
<template>
  <div class="p-1 h-full dark:text-gray-500 dark:bg-gray-900">
    <div
      class="bg-gradient-to-r from-green-400 to-blue-500 text-white text-center italic px-4 py-2 rounded cursor-default transition-all duration-400 hover:rounded-2xl dark:(from-teal-400 to-yellow-500)"
      @click="change"
    >
      {{ t("settings") }}
    </div>
    <el-divider border-style="dashed"></el-divider>
    <el-form ref="formRef" :model="config" label-width="120px">
      <el-form-item :label="t('settingTitlePath')">
        <el-input v-model="config.path"></el-input>
      </el-form-item>
      <el-form-item :label="t('theme')">
        <el-select
          v-model="config.theme"
          default-first-option
          :placeholder="t('thesettingThemePlaceholderme')"
          style="width: 100%"
          @change="setTheme"
        >
          <el-option :label="t('light')" value="light"></el-option>
          <el-option :label="t('dark')" value="dark"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item :label="t('settingTitleLanguage')">
        <el-select
          v-model="config.language"
          default-first-option
          :placeholder="t('settingLanguagePlaceholder')"
          style="width: 100%"
          @change="configLanguage"
        >
          <el-option :label="t('chinese')" value="zh-CN"></el-option>
          <el-option :label="t('english')" value="en-US"></el-option>
        </el-select>
      </el-form-item>
      <!-- <el-form-item label="命令行自动部署">
        <el-switch v-model="config.shellDeploy"></el-switch>
      </el-form-item> -->

      <el-form-item :label="t('settingTitleImageServer')">
        <el-select
          v-model="config.uploadType"
          default-first-option
          :placeholder="t('settingImageServerPlaceholder')"
          style="width: 100%"
        >
          <el-option label="GitHub" value="github"></el-option>
          <el-option label="七牛" value="qiniu"></el-option>
          <el-option label="阿里云OSS" value="aliyunOss"></el-option>
          <el-option label="腾讯云OSS" value="tencentOss"></el-option>
          <el-option label="sm.ms" value="sm.ms"></el-option>
        </el-select>
      </el-form-item>
      <transition name="el-zoom-in-top">
        <div v-show="config.uploadType === 'qiniu'">
          <el-form-item label="七牛存储区域">
            <el-select
              v-model="config.qiniuZone"
              default-first-option
              placeholder="请选择机房"
              style="width: 100%"
            >
              <el-option label="华东" value="huadong"></el-option>
              <el-option label="华北" value="huabei"></el-option>
              <el-option label="华南" value="huanan"></el-option>
              <el-option label="北美" value="beimei"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="AccessKey">
            <el-input
              v-model="config.qiniuAccessKey"
              style="width: 100%"
              placeholder="七牛AccessKey"
            />
          </el-form-item>
          <el-form-item label="SecretKey">
            <el-input
              v-model="config.qiniuSecretKey"
              style="width: 100%"
              placeholder="七牛SecretKey"
            />
          </el-form-item>
          <el-form-item label="Bucket">
            <el-input
              v-model="config.qiniuBucket"
              style="width: 100%"
              placeholder="七牛Bucket"
            />
          </el-form-item>
          <el-form-item label="Host">
            <el-input
              v-model="config.qiniuHost"
              style="width: 100%"
              placeholder="七牛Host"
            />
          </el-form-item>
        </div>
      </transition>

      <transition name="el-zoom-in-top">
        <div v-show="config.uploadType === 'aliyunOss'">
          <el-form-item label="Endpoint">
            <el-input
              v-model="config.aliyunOssEndpoint"
              style="width: 100%"
              placeholder="Aliyun oss endpoint"
            />
          </el-form-item>
          <el-form-item label="AccessId">
            <el-input
              v-model="config.aliyunOssAccessKeyId"
              style="width: 100%"
              placeholder="Aliyun oss accessKeyId"
            />
          </el-form-item>
          <el-form-item label="AccessSecret">
            <el-input
              v-model="config.aliyunOssAccessKeySecret"
              style="width: 100%"
              placeholder="Aliyun oss accessKeySecret"
            />
          </el-form-item>
          <el-form-item label="Bucket">
            <el-input
              v-model="config.aliyunOssBucket"
              style="width: 100%"
              placeholder="Aliyun oss bucket"
            />
          </el-form-item>
          <el-form-item label="Host">
            <el-input
              v-model="config.aliyunOssHost"
              style="width: 100%"
              placeholder="Aliyun oss host"
            />
          </el-form-item>
        </div>
      </transition>

      <transition name="el-zoom-in-top">
        <div v-show="config.uploadType === 'tencentOss'">
          <el-form-item label="SecretId">
            <el-input
              v-model="config.tencentOssSecretId"
              style="width: 100%"
              placeholder="Tencent oss SecretId"
            />
          </el-form-item>
          <el-form-item label="SecretKey">
            <el-input
              v-model="config.tencentOssSecretKey"
              style="width: 100%"
              placeholder="Tencent oss SecretKey"
            />
          </el-form-item>
          <el-form-item label="COS_REGION">
            <el-input
              v-model="config.tencentOssCOS_REGION"
              style="width: 100%"
              placeholder="Tencent oss COS_REGION"
            />
          </el-form-item>
          <el-form-item label="Bucket">
            <el-input
              v-model="config.tencentOssBucket"
              style="width: 100%"
              placeholder="Tencent oss bucket"
            />
          </el-form-item>
        </div>
      </transition>

      <el-form-item>
        <el-button type="primary" @click="submitForm">{{ t("save") }}</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts" setup>
import { useI18n } from "vue-i18n";
import { useStore } from "vuex";
const $store = useStore();
const { t, locale } = useI18n({ useScope: "global" });
const config = reactive({
  base: "",
  path: "",
  theme: $store.state.Config.theme,
  language: $store.state.Config.language,
  uploadType: "",
  qiniuZone: "",
  qiniuAccessKey: "",
  qiniuSecretKey: "",
  qiniuBucket: "",
  qiniuHost: "",
  aliyunOssEndpoint: "",
  aliyunOssAccessKeyId: "",
  aliyunOssAccessKeySecret: "",
  aliyunOssBucket: "",
  aliyunOssHost: "",
  tencentOssSecretId: "",
  tencentOssSecretKey: "",
  tencentOssCOS_REGION: "",
  tencentOssBucket: "",
  shellDeploy: false,
});

const onSubmit = () => {
  console.log("submit!");
};
function configLanguage() {
  $store.commit("Config/updateLanguage", config.language);
  locale.value = config.language;
}

// 切换明暗主题
const setTheme = function() {
  $store.commit("Config/updateTheme", config.theme);
  let theme = $store.state.Config.theme || 'light'
  if (theme === 'dark') {
    document.querySelector('html').classList.add('dark')
  } else {
    document.querySelector('html').classList.remove('dark')
  }
}
const submitForm = (formEl) => {
  if (!formEl) return
  formEl.validate((valid) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!')
      return false
    }
  })
}

const resetForm = (formEl) => {
  if (!formEl) return
  formEl.resetFields()
}
</script>
