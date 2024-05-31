/*
 * @Author: nlqs
 * @Date: 2024-05-26 22:22:14
 * @Description: 用户状态管理库
 */
import { defineStore } from 'pinia'
import { getUserInfoAPI, loginAPI, registerAPI, updateUserInfoAPI } from '@/api/user'

export const useUserStore = defineStore('user', {

  state: () => ({
    tipsMsg: '',
    tipShow: false
  }),

  actions: {
    // 用户注册
    async register(user) {
      try {
        if (user.username.trim() === '' || user.password.trim() === '') {
          this.tipsMsg = '输入不能为空'
          return
        }
        const result = await registerAPI(user.username, user.password)
        this.tipsMsg = result
      } catch (err) {
        console.log(err)
      }
    },

    // 用户登录
    async login(user) {
      try {
        if (user.username.trim() === '' || user.password.trim() === '') {
          this.tipsMsg = '输入不能为空'
          return
        }
        const result = await loginAPI(user)
        if (result.data) {
          sessionStorage.setItem('user', JSON.stringify(result.data))
        }
      } catch (err) {
        console.log(err, 'opop')
      }
    },
    
    // 获取信息
    async getInfo(userInfo) {
      try {
        const result = await getUserInfoAPI(userInfo)
        return result
      } catch (err) {
        console.log(err)
      }
    },

    // 修改用户信息
    async updateInfo(userInfo) {
      try {
        const result = await updateUserInfoAPI(userInfo)
        return result
      } catch (err) {
        console.log(err)
      }
    }
  },
})