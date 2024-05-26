<script setup>
</script>

<template>
  <div class="footer">
    <img src="@/assets/logo.png" alt="">
    <span>Vynon博客</span>
  </div>
</template>

<style lang="less" scoped>
.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 6vw;
  background-color: #333;
  cursor: default;

  img {
    width: 3vw;
    height: 3vw;
  }

  span {
    margin-left: 1vw;
    color: #fff;
    line-height: 3vw;
  }
}
</style>