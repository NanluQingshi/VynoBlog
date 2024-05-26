/*
 * @Author: nlqs
 * @Date: 2024-05-26 21:53:54
 * @Description: 封装用户相关业务接口
 */
import httpInstance from '@/utils/http'

/**
 * @description: 用户注册
 * @param {*} username - 用户名
 * @param {*} password - 密码
 * @return {*}
 */
export const registerAPI = (username, password) => {
  return httpInstance.post('/user/register', {
    username,
    password
  })
}
