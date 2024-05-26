<!--
 * @Author: nlqs
 * @Date: 2024-05-25 19:23:21
 * @Description: 
-->
<script setup>
import LayoutHeader from '@/views/layout/components/LayoutHeader.vue'
import LayoutFooter from '@/views/layout/components/LayoutFooter.vue'

</script>

<template>
  <LayoutHeader></LayoutHeader>
  <!-- 二级路由出口 -->
  <router-view></router-view>
  <LayoutFooter></LayoutFooter>
</template>

<style scoped>
</style>