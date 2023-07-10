import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

import HomePage from '@/pages/HomePage.vue';
import ShopPage from '@/pages/ShopPage.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/shop',
    component: ShopPage,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
