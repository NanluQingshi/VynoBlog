<!--
 * @Author: nlqs
 * @Date: 2024-05-26 15:48:16
 * @Description: 登录注册页通用组件
-->
<script setup>
import { ref, defineProps } from 'vue'
import { useUserStore } from '@/store/userStore'
import { useRouter } from 'vue-router'

// 用户仓库
const userStore = useUserStore()
// 路由
const router = useRouter()

// 用户名
const username = ref('')
// 密码
const password = ref('')

// 接收父组件传递的参数
defineProps({
  op: String
}) 

const goLoginOrRegister = async (op) => {
  if (op === 'Login') {
    await userStore.login({ username: username.value, password: password.value })
    // 800 ms 后跳转到首页
    setTimeout(() => {
      if (sessionStorage.getItem('user')) {
        router.push('/home')
      }
    }, 800)
  }
  
  if (op === 'Register') {
    console.log(username.value, password.value)
    await userStore.register({ username: username.value, password: password.value })
  }
}

</script>

<template>
  <div class="side-box">
    <div class="title">
      <p class="name">{{ op }} - Vynon Blog</p>
      <p>Talk is cheap, Show me the code</p>
    </div>
    <div class="form">
      <input 
        type="text" 
        placeholder="请输入用户名"
        v-model="username"
      >
      <input 
        type="password"
        placeholder="请输入密码"
        v-model="password" 
      >
      <button @click="goLoginOrRegister(op)">{{ op }}</button>
    </div>
  </div>
</template>

<style lang="less" scoped>
.side-box {
  padding: 1.5rem 3.8rem;


  .title {
    text-align: center;
    height: 6rem;
    font-size: 1.6rem;
    color: #7e7e7e;

    .name {
      margin-bottom: 1.5rem;
      color: #333;
      font-size: 2rem;
    }
  }

  .form {
    height: 20rem;
    background-color: #fff;
    text-align: center;

    input {
      margin-bottom: 3.2rem;
      padding-left: 1.2rem;
      width: 20.75rem;
      height: 3.2rem;
      font-size: 1.1rem;
      border: 1px solid #333;
      border-radius: 1.3rem;
      outline: nine;
      transition: 0.8s;

      &:nth-child(1) {
        margin-top: 3.2rem;
      }

      &:focus {
        font-size: 1.5rem;
        box-shadow: 0 0 5px 5px rgba(129, 146, 202, 0.356);
      }
    }

    button {
      margin: 0 auto;
      display: block;
      width: 20.75rem;
      height: 2.5rem;
      font-size: 1rem;
      cursor: pointer;
    }
  }
}

</style>
