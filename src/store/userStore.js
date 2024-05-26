/*
 * @Author: nlqs
 * @Date: 2024-05-26 22:22:14
 * @Description: 用户状态库
 */
import { defineStore } from 'pinia'
import { registerAPI } from '@/api/user'

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
    }
  }

})