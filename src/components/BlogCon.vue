<!--
 * @Author: nlqs
 * @Date: 2024-05-26 13:57:31
 * @Description: 博客组件
-->

<script setup>
import { ref, defineProps, onMounted, defineEmits } from 'vue'
import { format } from 'date-fns'
import { useRouter } from 'vue-router'

const router = useRouter()

// 是否收藏
const isCollect = ref(true)
// 是否点赞
const isLike = ref(false)

/** 接收父组件传递过来的参数 */
const props = defineProps({
  // 2.子组件内部通过 props 接收
  blog: Object,
})

/** 声明要触发的事件 */
const emit = defineEmits(['format-time'])

onMounted(() => {
  // 格式化博客的发布时间和更新时间
  const createdAt = format(props.blog.createdAt, 'yyyy-MM-dd HH:mm:ss')
  const updatedAt = format(props.blog.updatedAt, 'yyyy-MM-dd HH:mm:ss')
  // 触发自定义事件，传递参数
  emit('format-time', createdAt, updatedAt)
})

// TODO: 获取博客详情
const getDetail = () => {
  router.push({
    path: `/detail/${props.blog._id}`
  })
}
</script>

<template>
  <div class="blog">
    <div class="content" @click="getDetail">
      <div class="title">{{ blog.title }}</div>
      <div class="text">{{ blog.content }}</div>
      <div class="pub-time">{{ blog.createdAt }}</div>
    </div>
    <div class="iconitem">
      <ul>
        <li>
          <i
            class="iconfont icon-shoucang"
            @click="doCollect"
            :class="isCollect ? 'active' : ''"
          ></i>
          <p>1</p>
        </li>
        <li>
          <i
            class="iconfont icon-dianzan"
            @click="doCollect"
            :class="isLike ? 'active' : ''"
          ></i>
          <p>1</p>
        </li>
        <li>
          <i class="iconfont icon-icon-"></i>
          <p>1</p>
        </li>
      </ul>
    </div>
  </div>

</template>

<style lang="less" scoped>
.active {
  color: #d81e06;
}

.blog {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-top: 1rem;
  width: 24rem;
  height: 18.5rem;
  background-color: #fff;
  cursor: pointer;
  transition: 0.8s;

  &:hover {
    width: 24.5rem;
    height: 20rem;
    box-shadow: 0 0 10px 10px rgba(51, 51, 51, 0.25);
  }

  .content {
    // display: flex;
    // align-items: space-between;
    width: 100%;
    padding: 0 1.4rem;

    .title {
      width: 100%;
      margin-bottom: 1rem;
      color: #494949;
      font-weight: 800;
      font-size: 1.25rem;
      // 文本不换行
      white-space: nowrap;
      overflow: hidden;
      // 文本过长用省略号代替
      text-overflow: ellipsis;
    }

    .text {
      // 使用弹性盒子，仅用于支持基于 WebKit 的浏览器（比如 Safari 和旧版本的 Chrome）。
      display: -webkit-box;
      // 文本最多显示 5 行
      -webkit-line-clamp: 5;
      // 文本按垂直方向排列
      -webkit-box-orient: vertical;
      margin-bottom: 1.1rem;
      width: 100%;
      color: #919191;
      line-height: 1.7rem;
      // 超出部分显示省略号
      overflow: hidden;
      text-overflow: ellipsis;
      text-indent: 2em;
    }

    .pub-time {
      color: #cf4848;
      font-size: 0.9rem;
    }
  }

  .iconitem {
    width: 100%;
    height: 3.5rem;
    // background-color: #ccc;
    border-top: 1px solid rgb(226, 226, 226);
    font-size: 1rem;

    ul {
      display: flex;
      justify-content: space-around;
      align-items: center;

      li {
        padding: 0.5rem 0;
        height: 3.5rem;
        text-align: center;

        p {
          color: #666;
          font-size: 0.8rem;
        }
      }
    }
  }
}
</style>