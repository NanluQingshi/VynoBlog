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
  // position: absolute;
  // bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 4rem;
  width: 100%;
  height: 6.25rem;
  background-color: #333;
  cursor: default;

  img {
    width: 3rem;
    height: 3rem;
  }

  span {
    margin-left: 1rem;
    color: #fff;
    line-height: 3rem;
  }
}
</style>