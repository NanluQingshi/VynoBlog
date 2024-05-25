/*
 * @Author: nlqs
 * @Date: 2024-05-25 17:27:40
 * @Description: 
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 完整导入 EP
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'


createApp(App).use(store).use(router).use(ElementPlus).mount('#app')
