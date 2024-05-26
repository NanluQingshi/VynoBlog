<!--
 * @Author: nlqs
 * @Date: 2024-05-25 19:49:01
 * @Description: 顶部导航
-->
<script setup>
import Search from '@/components/Search.vue'
import { ref } from 'vue'

// 用户名
const username = ref('default') 
// 退出登录和信息按钮框是否显示
const boxShow = ref(false) 
// 是否登录
const isLogin = ref(false) 

</script>

<template>
  <nav>
    <div class="nav">
      <div class="logo">
        <img
          src="@/assets/logo.png"
          alt=""
          @click="goHome"
        >
        <span>Vynon博客</span>
      </div>
      <ul>
        <router-link to="/home">首页</router-link>
        <router-link to="/user">个人</router-link>
      </ul>
      <Search></Search>
      <div class="user">
        <router-link to="/login" v-if="!isLogin" class="login">登录</router-link>
        <div class="logined" v-else @mousemove="boxShow = true" @mouseleave="boxShow = false">
          <img src="@/assets/photo.png" alt="">
          <p>{{ username }}</p>
          <div class="hide-box" v-show="boxShow">
            <button @click="logout">退出登录</button>
            <button @click="$router.push('/user')">个人信息</button>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style lang="less" scoped>
nav {
  width: 100%;
  height: 5rem;
  background-color: #333;

  .nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    width: 80%;
    height: 5rem;

    .logo {
      display: flex;
      align-items: center;
      width: 13.5rem;
      height: 100%;
      color: #fff;
      line-height: 5rem;
      font-size: 1.5rem;
      cursor: pointer;

      img {
        margin-right: 0.7rem;
        width: 3rem;
        height: 3rem;
      }
    }

    ul {
      display: flex;
      justify-content: space-around;
      width: 20rem;

      a {
        color: #fff;
        font-size: 1.2rem;
        transition: .8s;
        &:hover {
          color: skyblue;
        }
      }
    }

    .user {
      display: flex;
      align-items: center;
      height: 100%;

      .login {
        font-size: 1.3rem;
        color: #fff;
      }

      .logined {
        position: relative;
        text-align: center;
        cursor: pointer;

        img {
          width: 2.5rem;
          height: 2.5rem;
        }

        p {
          color: #fff;
        }

        .hide-box {
          position: absolute;
          bottom: -4rem;
          left: -1.5rem;
          width: 9.8rem;
          text-align: center;
          transition: .5s;

          button {
            display: block;
            margin-bottom: 0.5rem;
            color: purple;
            background-color: #fff;
            width: 100%;
            height: 1.5rem;
            border-radius: 1rem;

            &:hohver {
              background-color: #ccc;
            }
          }
        }
      }
    }

  }
}
</style>