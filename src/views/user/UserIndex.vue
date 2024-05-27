<!--
 * @Author: nlqs
 * @Date: 2024-05-25 19:27:40
 * @Description: 用户相关信息页
-->
<script setup>
import UserNav from './components/UserNav.vue'

</script>

<template>
  <div class="box">
    <UserNav></UserNav>
    <router-view></router-view>
  </div>
</template>

<style lang="less" scoped>
.box {
  display: flex;
  width: 100%;
  height: 40rem;
  background-color: #f0f2f5;
}
</style>