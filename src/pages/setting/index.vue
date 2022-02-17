<!--
 * @Author: xkloveme
 * @Date: 2022-02-13 15:11:13
 * @LastEditTime: 2022-02-17 17:49:34
 * @LastEditors: xkloveme
 * @Description: 设置页
 * @FilePath: /hexo-blog-admin/src/pages/setting/index.vue
 * @Copyright © xkloveme
-->
<template>
  <div class="p-1 h-full dark:text-gray-500 dark:bg-gray-900">
    <div
      class="bg-gradient-to-r from-green-400 to-blue-500 text-white text-center italic px-4 py-2 rounded cursor-default transition-all duration-400 hover:rounded-2xl dark:(from-teal-400 to-yellow-500)"
    >
      {{ t("settings") }}
    </div>
    <n-divider border-style="dashed"></n-divider>
    <n-form
      ref="formRef"
      :model="config"
      label-placement="left"
      :label-width="160"
    >
      <n-form-item :label="t('settingTitlePath')">
        <n-input v-model="config.path"></n-input>
      </n-form-item>
      <n-form-item :label="t('theme')">
        <n-radio-group
          v-model:value="config.theme"
          name="light"
          @change="setTheme"
        >
          <n-space>
            <n-radio value="light">{{ t("light") }}</n-radio>
            <n-radio value="dark">{{ t("dark") }}</n-radio>
          </n-space>
        </n-radio-group>
      </n-form-item>
      <n-form-item :label="t('settingTitleLanguage')">
        <n-radio-group
          name="zh-CN"
          v-model:value="config.language"
          @change="configLanguage"
        >
          <n-space>
            <n-radio value="zh-CN">{{ t("chinese") }}</n-radio>
            <n-radio value="en-US">{{ t("english") }}</n-radio>
          </n-space>
        </n-radio-group>
      </n-form-item>
      <!-- <n-form-item label="命令行自动部署">
        <n-switch v-model="config.shellDeploy"></n-switch>
      </n-form-item> -->

      <n-form-item :label="t('settingTitleImageServer')">
        <!-- <n-select
          v-model="config.uploadType"
          default-first-option
          :placeholder="t('settingImageServerPlaceholder')"
          style="width: 100%"
        >
          <n-option label="GitHub" value="github"></n-option>
          <n-option label="七牛" value="qiniu"></n-option>
          <n-option label="阿里云OSS" value="aliyunOss"></n-option>
          <n-option label="腾讯云OSS" value="tencentOss"></n-option>
          <n-option label="sm.ms" value="sm.ms"></n-option>
        </n-select> -->
      </n-form-item>
      <!-- <transition name="n-zoom-in-top">
        <div v-show="config.uploadType === 'qiniu'">
          <n-form-item label="七牛存储区域">
            <n-select
              v-model="config.qiniuZone"
              default-first-option
              placeholder="请选择机房"
              style="width: 100%"
            >
              <n-option label="华东" value="huadong"></n-option>
              <n-option label="华北" value="huabei"></n-option>
              <n-option label="华南" value="huanan"></n-option>
              <n-option label="北美" value="beimei"></n-option>
            </n-select>
          </n-form-item>
          <n-form-item label="AccessKey">
            <n-input
              v-model="config.qiniuAccessKey"
              style="width: 100%"
              placeholder="七牛AccessKey"
            />
          </n-form-item>
          <n-form-item label="SecretKey">
            <n-input
              v-model="config.qiniuSecretKey"
              style="width: 100%"
              placeholder="七牛SecretKey"
            />
          </n-form-item>
          <n-form-item label="Bucket">
            <n-input
              v-model="config.qiniuBucket"
              style="width: 100%"
              placeholder="七牛Bucket"
            />
          </n-form-item>
          <n-form-item label="Host">
            <n-input
              v-model="config.qiniuHost"
              style="width: 100%"
              placeholder="七牛Host"
            />
          </n-form-item>
        </div>
      </transition>

      <transition name="n-zoom-in-top">
        <div v-show="config.uploadType === 'aliyunOss'">
          <n-form-item label="Endpoint">
            <n-input
              v-model="config.aliyunOssEndpoint"
              style="width: 100%"
              placeholder="Aliyun oss endpoint"
            />
          </n-form-item>
          <n-form-item label="AccessId">
            <n-input
              v-model="config.aliyunOssAccessKeyId"
              style="width: 100%"
              placeholder="Aliyun oss accessKeyId"
            />
          </n-form-item>
          <n-form-item label="AccessSecret">
            <n-input
              v-model="config.aliyunOssAccessKeySecret"
              style="width: 100%"
              placeholder="Aliyun oss accessKeySecret"
            />
          </n-form-item>
          <n-form-item label="Bucket">
            <n-input
              v-model="config.aliyunOssBucket"
              style="width: 100%"
              placeholder="Aliyun oss bucket"
            />
          </n-form-item>
          <n-form-item label="Host">
            <n-input
              v-model="config.aliyunOssHost"
              style="width: 100%"
              placeholder="Aliyun oss host"
            />
          </n-form-item>
        </div>
      </transition>

      <transition name="n-zoom-in-top">
        <div v-show="config.uploadType === 'tencentOss'">
          <n-form-item label="SecretId">
            <n-input
              v-model="config.tencentOssSecretId"
              style="width: 100%"
              placeholder="Tencent oss SecretId"
            />
          </n-form-item>
          <n-form-item label="SecretKey">
            <n-input
              v-model="config.tencentOssSecretKey"
              style="width: 100%"
              placeholder="Tencent oss SecretKey"
            />
          </n-form-item>
          <n-form-item label="COS_REGION">
            <n-input
              v-model="config.tencentOssCOS_REGION"
              style="width: 100%"
              placeholder="Tencent oss COS_REGION"
            />
          </n-form-item>
          <n-form-item label="Bucket">
            <n-input
              v-model="config.tencentOssBucket"
              style="width: 100%"
              placeholder="Tencent oss bucket"
            />
          </n-form-item>
        </div>
      </transition> -->

      <n-form-item>
        <n-button type="primary" @click="submitForm">{{ t("save") }}</n-button>
      </n-form-item>
    </n-form>
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
const setTheme = function () {
  console.log(2222, config.theme);
  $store.commit("Config/updateTheme", config.theme);
  let theme = $store.state.Config.theme || "light";
  if (theme === "dark") {
    document.querySelector("html").classList.add("dark");
  } else {
    document.querySelector("html").classList.remove("dark");
  }
};
const submitForm = (formEl) => {
  if (!formEl) return;
  formEl.validate((valid) => {
    if (valid) {
      console.log("submit!");
    } else {
      console.log("error submit!");
      return false;
    }
  });
};

const resetForm = (formEl) => {
  if (!formEl) return;
  formEl.resetFields();
};
</script>
