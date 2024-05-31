/*
 * @Author: nlqs
 * @Date: 2024-05-26 21:20:44
 * @Description: 封装 axios 请求
 */
// 导入 axios 库
import axios from "axios"
// 导入进度条库
import nprogress from 'nprogress'
// 导入进度条样式
import 'nprogress/nprogress.css'

// 创建 axios 实例，指定基础 URL
const http = axios.create({
  baseURL: 'http://localhost:3000/api'
})

// 添加请求拦截器
http.interceptors.request.use(config => {
  // 开始进度条动画
  nprogress.start()
  const user = window.sessionStorage.getItem('user')
  console.log(JSON.parse(user))
  if (user !== null) {
    config.headers.token = JSON.parse(user).token
  }
  return config
}, err => {
  console.log(err)
})

// 添加响应拦截器
http.interceptors.response.use(response => {
  // 结束进度条动画
  nprogress.done()
  // 返回响应数据
  return response.data
}, err => {
  console.log(err)
  // 处理 token 过期
  if (err.response.status === 401) {
    // 清除用户数据
    window.sessionStorage.removeItem('user')
  }
  return Promise.reject(err)
})

// 导出
export default http