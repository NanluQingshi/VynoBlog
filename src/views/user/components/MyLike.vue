<!--
 * @Author: NanluQingshi
 * @Date: 2024-05-27 21:10:00
 * @Description: 我的点赞组件
-->
<script setup>
import ArticleElem from '@/components/ArticleElem.vue'

</script>

<template>
  <div class="box">
    <div class="title">
      <p>我的点赞</p>
    </div>
    <div class="content">
      <ul>
        <li
          v-for="item in 10"
          :key="item"
        >
          <ArticleElem></ArticleElem>
        </li>
      </ul>
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

  .content {
    width: 100%;

    ul {
      margin-top: 2rem;

      li {
        margin-bottom: 2rem;
      }
    }
  }
}
</style>