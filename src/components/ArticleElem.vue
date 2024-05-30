<!--
 * @Author: NanluQingshi
 * @Date: 2024-05-29 21:03:08
 * @Description: 博客列表展示组件
-->
<script setup>
import { ref } from 'vue'

const delBlog = () => {
  // TODO：删除博客
}

const textInfo = ref(
  '回首一年，从去年的放弃调剂本校研究生，毅然决然的走向边工作做边考研的路，到今天收到科大软院的计划录取，终于松了一大口气。这一年来，因为自己的愚蠢，失去了许多；因为自己的坚持，也收获了许多。用认识论的知识来说，事物的发展总是螺旋式上升`和波浪式前进，在不断成长。回首一年，从去年的放弃调剂本校研究生，毅然决然的走向边工作做边考研的路，到今天收到科大软院的计划录取，终于松了一大口气。这一年来，因为自己的愚蠢，失去了许多；因为自己的坚持，也收获了许多。用认识论的知识来说，事物的发展总是螺旋式上升`和波浪式前进，在不断成长。'
)
</script>

<template>
  <div class="article">
    <div class="content">
      <div class="author">
        <a
          href=""
          class="avatar"
        >
          <img
            src="@/assets/photo.png"
            alt=""
          >
        </a>
        <div class="info">
          <a
            href=""
            class="nickname"
          >昵称</a>
          <span class="time">2017.12.06 05:18</span>
        </div>
      </div>
      <a href="" class="title">为什么会活得这样痛苦</a>
      <span class="fenlei">
        文章分类
      </span>
      <p class="text">{{ textInfo }}</p>
      <div class="meta">
        <a href="">
          <i class="iconfont icon-icon-"></i>
          <span class="num">1000</span>
        </a>
        <a href="">
          <i class="iconfont icon-dianzan"></i>
          <span class="num">1000</span>
        </a>
        <a href="">
          <i class="iconfont icon-shoucang"></i>
          <span class="num">1000</span>
        </a>
      </div>
    </div>
    <span class="btn" @click="delBlog">删除</span>
  </div>
</template>

<style lang="less" scoped>
.article {
  position: relative;
  padding: 0.3rem 0 0 0.3rem;
  width: 100%;
  height: 12.5rem;
  background-color: #fff;

  .content {
    .author {
      display: flex;
      height: 2rem;
      // background-color: pink;

      .avatar {
        height: 2rem;

        img {
          height: 2rem;
          border-radius: 50%;
        }
      }

      .info {
        margin-left: 0.7rem;
        line-height: 2rem;

        a {
          color: #333;
        }

        span {
          margin-left: 0.5rem;
          font-size: 0.9rem;
          color: #969696;
        }
      }
    }

    .title {
      display: block;
      margin-top: 0.5rem;
      font-size: 1.2rem;
      font-weight: 700;
      line-height: 1.5;
      color: #2f2f2f;

      &:hover {
        text-decoration: underline;
      }
    }

    .fenlei {
      position: absolute;
      top: 10%;
      right: 5%;
      width: 5rem;
      height: 2rem;
      text-align: center;
      line-height: 2rem;
      color: #909399;
      background-color: #f4f4f5;
      border: 1px solid #dcdfe6;
      border-color: #c8c9cc;
      border-radius: 4px;
      cursor: no-drop;
      white-space: nowrap;
    }

    .text {
      display: -webkit-box;
      margin-top: 0.5rem;
      width: 55rem;
      height: 5rem;
      color: #999;
      font-size: 0.9rem;
      line-height: 1.8;
      // 文本最多显示三行
      -webkit-line-clamp: 3;
      // 文本按垂直方向排列
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .meta {
      margin-top: 0.5rem;

      a {
        margin-right: 1rem;

        .iconfont,
        .num {
          font-size: 0.8rem;
          color: #999;

          &:hover {
            color: #787878;
          }
        }

        .icon-icon- {
          font-size: 1rem;
        }

        .icon-dianzan {
          font-size: 0.9rem;
        }
      }
    }
  }

  .btn {
    position: absolute;
    bottom: 10%;
    right: 5%;
    width: 5rem;
    height: 2rem;
    text-align: center;
    line-height: 1.8rem;
    color: #fff;
    background-color: #f56c6c;
    border: 1px solid #f56c6c;
    border-radius: 4px;

    &:hover {
      background-color: #f89898;
      border-color: #f89898;
    }
  }
}
</style>
