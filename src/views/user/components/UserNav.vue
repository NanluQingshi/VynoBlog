<!--
 * @Author: nlqs
 * @Date: 2024-05-27 21:11:06
 * @Description: 用户导航栏组件
-->
<script setup>
</script>

<template>
  <div class="nav">
    <ul>
      <li><a href="javascript:void(0)" @click="$router.push('/user')">个人资料</a></li>
      <li><a href="javascript:void(0)" @click="$router.push('/user/publish')">编辑博客</a></li>
      <li><a href="javascript:void(0)" @click="$router.push('/user/like')">我的点赞</a></li>
      <li><a href="javascript:void(0)" @click="$router.push('/user/collect')">我的收藏</a></li>
      <li><a href="javascript:void(0)" @click="$router.push('/user/blog')">我的博客</a></li>
    </ul>
  </div>
</template>

<style lang="less" scoped>
.nav {
  width: 15rem;
  height: 100%;
  background-color: #fff;

  ul {
    height: 100%;

    li {
      width: 15rem;
      height: 4rem;

      a {
        display: block;
        width: 15rem;
        height: 4rem;
        text-align: center;
        line-height: 4rem;
        font-size: 1.2rem;

        &:hover {
          color: #fff;
          background-color: #000;
          box-shadow: 0 0 5px 5px rgba(200, 233, 224, 0.34);
        }
      }
    }
  }
}
</style>