<!--
 * @Author: nlqs
 * @Date: 2024-05-26 12:52:58
 * @Description: 首页展示
-->
<script setup>
import BlogCon from '@/components/BlogCon.vue'
import { useBlogStore } from '@/store/blogStore'
import { onMounted } from 'vue'

const blogStore= useBlogStore()

/** 格式化博客时间 */
const handleFormatTime = function () {
  const [ createdAt, updatedAt ] = arguments 
  blogStore.formatTime({ createdAt, updatedAt })
}

onMounted(() => {
  blogStore.getAllBlog()
}) 
</script>

<template>
  <div class="list">
    <ul>
      <li v-for="item in blogStore.blogList" :key="item">
        <!-- 1.给子组件以添加属性的方式传值 -->
        <BlogCon :blog="item" @format-time="handleFormatTime"></BlogCon>
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