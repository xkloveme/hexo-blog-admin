import { createRouter, createWebHistory } from "vue-router";

import HomePage from './pages/home/index.vue';


export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: HomePage
    },
    {
      path: '/about-us',
      component: () => import('./pages/about/about-us-page.vue' /* webpackChunkName: "about-us-page" */)
    },
    {
      path: '/about',
      component: () => import('./pages/about/index.vue' /* webpackChunkName: "about" */)
    },
    {
      path: '/setting',
      component: () => import('./pages/setting/index.vue' /* webpackChunkName: "about-us-page" */)
    },
    {
      path: '/test',
      component: () => import('./pages/test/index.vue' /* webpackChunkName: "test" */)
    }
  ]
});
