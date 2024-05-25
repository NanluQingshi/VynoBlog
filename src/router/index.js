/*
 * @Author: nlqs
 * @Date: 2024-05-25 17:27:40
 * @Description: 
 */
/*
 * @Author: nlqs
 * @Date: 2024-05-25 17:27:40
 * @Description: 
 */
import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/views/layout/Layout.vue'
import Home from '@/views/home/Home.vue'

const routes = [
  {
    path: '/',
    redirect: '/home',
    component: Layout,
    children: [
      {
        path: '/home',
        component: Home
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/user/Login.vue')
  },
  {
    path: '/register',
    component: () => import('@/views/user/Register.vue')
  },
  {
    path: '/notFound',
    component: () => import('@/views/404/NotFound.vue')
  },
  {
    path: '*',
    component: () => import('@/views/404/NotFound.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
