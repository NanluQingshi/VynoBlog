/*
 * @Author: nlqs
 * @Date: 2024-05-25 17:27:40
 * @Description: 
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 引入初始化样式文件
import '@/styles/common.css'


createApp(App).use(store).use(router).mount('#app')
