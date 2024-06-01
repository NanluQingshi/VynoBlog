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
      },
      {
        path: '/user',
        component: () => import('@/views/user/UserIndex.vue'),
        children: [
          {
            path: '',
            component: () => import('@/views/user/components/MyInfo.vue')
          }, 
          {
            path: 'publish',
            component: () => import('@/views/user/components/Publish.vue')
          },
          {
            path: 'like',
            component: () => import('@/views/user/components/MyLike.vue')
          },
          {
            path: 'collect',
            component: () => import('@/views/user/components/MyCollect.vue')
          },
          {
            path: 'blog',
            component: () => import('@/views/user/components/MyBlog.vue')
          }
        ]
      },
      {
        path: '/detail/:id',
        component: () => import('@/views/article/Detail.vue')
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
    // 识别不到的 path，自动跳转至 404
    // vue2 使用 *，vue3 使用 :patchMatch('*') 或者 :catchAll(.*)
    path: '/:catchAll(.*)',
    redirect: '/notFound'
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
