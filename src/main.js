/*
 * @Author: nlqs
 * @Date: 2024-05-25 17:27:40
 * @Description: 
 */
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

// 引入初始化样式文件
import '@/styles/common.css'
// 引入 icon
import '@/assets/css/iconfont.css'
// element-plus 样式
import 'element-plus/dist/index.css'

const pinia = createPinia()

createApp(App).use(router).use(pinia).mount('#app')
