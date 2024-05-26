<!--
 * @Author: nlqs
 * @Date: 2024-05-25 19:26:05
 * @Description: 登录页面
-->
<script setup>
import OpMain from './components/OpMain.vue'
</script>

<template>
  <div class="box">
    <div class="register">
      <p>没有账号?</p>
      <p>点击此处去注册</p>
      <p class="register-btn" @click="$router.push('/register')">注册</p>
    </div>
    <div class="login">
      <OpMain op="Login"></OpMain>
    </div>
  </div>
</template>

<style lang="less" scoped>
.box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 67.5rem;
  position: absolute;
  // 以左上角与父元素为基准
  left: 50%;
  top: 50%;
  // 以自身中心为基准移动
  transform: translate(-50%, -50%);

  .register {
    padding: 2rem 4rem;
    width: 30.5rem;
    height: 13.5rem;
    background-color: #333333;
    color: #fff;
    font-size: 1.3rem;

    p {
      margin-bottom: 1.5rem;
    }

    .register-btn {
      text-align: center;
      width: 6rem;
      border: 1px solid #4cc9f0;
      cursor: pointer;
      background-color: transparent;
      color: #4cc9f0;

      &:hover {
        color: #fff;
        background-color: #4cc9f0;
      }
    }
  }

  .login {
    flex: 1;
    height: 30rem;
    background-color: #fff;

    box-shadow: 0 0 10px 10px rgba(51, 51, 51, 0.37)
  }
}
</style>