<!--
 * @Author: nlqs
 * @Date: 2024-05-25 22:21:50
 * @Description: 搜索框组件
-->
<script setup>
import { ref } from 'vue'

// 搜索内容
const content = ref('')
</script>

<template>
  <div class="search">
    <input
      type="text"
      placeholder="请输入搜索内容"
      v-model.trim="content"
    >

    <div class="img">
      <img src="@/assets/search.png" alt="" @click="doSearch">
    </div>
  </div>
</template>

<style lang="less" scoped>
.search {
  position: relative;
  display: flex;
  align-items: center;
  width: 26vw;
  height: 100%;

  input {
    padding-left: 0.8vw;
    width: 100%;
    height: 5vh;
    // 移除元素的默认外边框
    outline: none;
    border: none;
    border-radius: 1vw 0 0 1vw;
    transition: .6s;

    &:focus {
      font-size: 1vw;
      box-shadow: 0 0 5px 5px rgba(200, 233, 224, 0.34);
    }
  }

  .img {
    position: absolute;
    right: 0;
    height: 5vh;
    width: 5vh;
    background-color: #ccc;
    cursor: pointer;

    img {
      width: 100%;
      height: 100%;
    }
  }
}
</style>