<!--
 * @Author: nlqs
 * @Date: 2024-05-27 21:07:01
 * @Description: 个人信息组件
-->
<script setup>
import { onMounted, ref } from 'vue'
import { useUserStore } from '@/store/userStore'

const userStore = useUserStore()

const  userInfo = ref({})

const defaultInfo = ref({
  username: 'Jack',
  gender: 'Female',
  age: 12,
  email: 'email'
}) 

const inputInfo = ref({
  username: '',
  gender: '',
  age: 12,
  email: ''
})

let isShow = ref(false) 
let isLogin = ref(true) 

// 获取用户信息
const getUserInfo = async () => {
  const res = await userStore.getInfo()
  const token = JSON.parse(sessionStorage.getItem('user'))
  console.log(token)
  if (token === null) {
    isLogin = false
    userInfo.value = defaultInfo.value
    return 
  }
  // console.log('获取用户信息: ', res)
  userInfo.value = res.data.userInfo
  inputInfo.value = res.data.userInfo
}

// 更新用户信息
const doUpdate = async (userInfo) => {
  isShow.value = false
  const res = await userStore.updateInfo({
    username: userInfo.username,
    gender: userInfo.gender,
    age: userInfo.age,
    email: userInfo.email
  })
  console.log('更改用户信息结果', res)
}

onMounted(() => {
  getUserInfo()
}) 

</script>

<template>
  <div class="box">
    <div class="title">
      <p>个人信息</p>
    </div>
    <div class="info" v-if="isLogin">
      <div class="left">
        <div class="img">
          <img src="@/assets/photo.png" alt="">
        </div>
        <p class="name">{{ userInfo.username }}</p>
      </div>
      <div class="right">
        <p class="username">
          用户名: 
          <span v-show="!isShow">{{ userInfo.username }}</span>
          <input type="text" v-model="inputInfo.username" v-show="isShow">
        </p>
        <p class="gender">
          性别: 
          <span v-show="!isShow">{{ userInfo.gender }}</span>
          <input type="text" v-model="inputInfo.gender" v-show="isShow">
        </p>
        <p class="age">
          年龄: 
          <span v-show="!isShow">{{ userInfo.age }}</span>
          <input type="text" v-model="inputInfo.age" v-show="isShow">
        </p>
        <p class="email">
          邮箱: 
          <span v-show="!isShow">{{ userInfo.email }}</span>
          <input type="text" v-model="inputInfo.email" v-show="isShow">
        </p>
        <div class="btn">
          <span class="update" @click="isShow =!isShow">修改</span>
          <span v-show="isShow" class="confirm" @click="doUpdate(userInfo)">确认</span>
        </div>
      </div>
    </div>
    <div class="unlogin" v-else>
      <p>您还未登录，请登录后查看...</p>
    </div>
  </div> 
</template>

<style lang="less" scoped>
.box {
  display: flex;
  flex-wrap: wrap;
  padding: 2rem 4rem 0 4rem;

  .title {
    padding-left: 1.5rem;
    width: 100%;
    height: 5rem;
    line-height: 5rem;
    background-color: #fff;
    font-size: 1.5rem;
    font-weight: 900;
  }

  .info {
    display: flex;
    margin-top: 2.2rem;
    width: 100%;
    height: 30.75rem;
    background-color: #fff;

    .left {
      text-align: center;
      width: 40%;

      .img {
        margin: 25% auto 0;
        width: 10rem;
        height: 10rem;

        img {
          width: 100%;
          height: 100%;
        }
      }

      .name {
        margin-top: 1rem;
        font-weight: 800;
        font-size: 1.5rem;
      }
    }

    .right {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 55%;

      p {
        display: flex;
        justify-content: space-between;
        width: 20rem;
        height: 4rem;
        font-size: 1.3rem;

        span {
          color: #ca4c4c;
        }

        input {
          margin-left: 1.2rem;
          padding-left: 0.6rem;
          width: 13rem;
          height: 2rem;
          background-color: #ccc;
          color: #c60a0a;
          font-size: 1rem;
        }
      }

      .btn {
        .update {
          display: inline-block;
          width: 7rem;
          height: 2.5rem;
          background-color: #ca4c4c;
          font-size: 1.2rem;
          color: #fff;
          cursor: pointer;
          text-align: center;
          line-height: 2.5rem;
        }

        .confirm {
          margin-left: 2rem;
          display: inline-block;
          width: 7rem;
          height: 2.5rem;
          font-size: 1.2rem;
          color: #fff;
          cursor: pointer;
          text-align: center;
          line-height: 2.5rem;
          background-color: #68ce4f;
        }
      }
      
    }
  }

  .unlogin {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 2.3rem auto;
    width: 100%;
    height: 28.75rem;
    background-color: #fff;
    font-size: 2rem;
    letter-spacing: 0.3rem;
  }
}
</style>
