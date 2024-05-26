<!--
 * @Author: nlqs
 * @Date: 2024-05-26 12:52:58
 * @Description: 首页展示
-->
<script setup>
import BlogCon from '@/components/BlogCon.vue'

</script>

<template>
  <div class="list">
    <ul>
      <li v-for="item in 10" :key="item">
        <BlogCon></BlogCon>
      </li>
    </ul>
  </div>
</template>

<style lang="less" scoped>
.list {
  margin: 0 auto;
  width: 80%;

  ul {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;

    li {
      margin-bottom: 1.2rem;
    }
  }
}

</style>