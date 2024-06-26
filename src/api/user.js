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

/**
 * @description: 用户登录
 * @param {*} username - 用户名
 * @param {*} password - 密码
 * @return {*}
 */
export const loginAPI = ({ username, password }) => {
  return httpInstance.post('/user/login', {
    username,
    password
  })
}

/**
 * @description: 获取用户信息
 * @return {*}
 */
export const getUserInfoAPI = () => {
  return httpInstance.get('/user/getInfo')
}

/**
 * @description: 修改用户信息
 * @param {*} username
 * @param {*} gender
 * @param {*} age
 * @param {*} email
 * @return {*}
 */
export const updateUserInfoAPI = ({ username, gender, age, email }) => {
  return httpInstance.post('/user/updateInfo', {
    username,
    gender,
    age,
    email
  })
}
