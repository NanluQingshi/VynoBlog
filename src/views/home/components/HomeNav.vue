<!--
 * @Author: nlqs
 * @Date: 2024-05-26 10:49:50
 * @Description: 
-->
<script setup>
import { ref } from 'vue'

const indexText = ref('推荐') 

// 导航切换
const doSwitch = (e) => {
  // console.log(e.target.innerText)
  indexText.value = e.target.innerText
}

// TODO: 推荐
const doRecommend = (e) => {
  doSwitch(e)
}

// TODO: 最新
const doNew = (e) => {
  doSwitch(e)
}

// TODO： 最热
const doHot = (e) => {
  doSwitch(e)
}
</script>

<template>
  <div class="nav">
    <p class="selectedText">{{ indexText }}</p>
    <div class="menu">
      <ul>
        <li :class="indexText === '推荐' ? 'active' : ''"><a href="javascript:void(0)" @click="doRecommend">推荐</a></li>
        <li :class="indexText === '最新' ? 'active' : ''"><a href="javascript:void(0)"  @click="doNew">最新</a></li>
        <li :class="indexText === '最热' ? 'active' : ''"><a href="javascript:void(0)" @click="doHot">最热</a></li>
      </ul>
    </div>
  </div>
</template>

<style lang="less" scoped>
.active {
  color: skyblue;
  font-weight: 1000;
  font-size: 1.5rem;
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 2rem auto;
  padding: 0 1.8rem;
  width: 80%;
  height: 3.9rem;
  background-color: #fff;

  p {
    font-size: 2rem;
    font-weight: 700;
    color: #5c3317;
  }

  ul {
    display: flex;
    justify-content: space-between;

    li {
      
      a {
        display: inline-block;
        width: 4rem;
        border: 1px solid #7d6f5c;
        text-align: center;
        font-size: 1.5rem;

        &:hover {
          color: orange;
        }
      }
    }
  }
}
</style>