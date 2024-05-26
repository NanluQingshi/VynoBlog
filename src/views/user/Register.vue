<!--
 * @Author: nlqs
 * @Date: 2024-05-25 19:39:39
 * @Description: 
-->
<script setup>
import OpMain from './components/OpMain.vue'
</script>

<template>
  <div class="box">
    <div class="register">
      <OpMain op="Register"></OpMain>
    </div>
    <div class="login">
      <p>已有帐号?</p>
      <p>点击此处去登录</p>
      <p
        class="login-btn"
        @click="$router.push('/login')"
      >登录</p>
    </div>
  </div>
</template>

<style lang='less' scoped>
.box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 67.5rem;

  .register {
    flex: 1;
    height: 30rem;
    background-color: #fff;
    box-shadow: 0 0 10px 10px rgba(51, 51, 51, 0.37);
  }

  .login {
    padding-top: 2rem;
    padding-right: 2rem;
    padding-left: 18rem;
    width: 30.5rem;
    height: 13.5rem;
    background-color: #333333;
    color: #fff;
    font-size: 1.3rem;
    text-align: right;

    p {
      margin-bottom: 1.5rem;
    }

    .login-btn {
      margin-left: 4.5rem;
      width: 6rem;
      border: 1px solid #4cc9f0;
      cursor: pointer;
      text-align: center;
      background-color: transparent;
      color: #4cc9f0;

      &:hover {
        color: #fff;
        background-color: #4cc9f0;
      }
    }
  }
}
</style>