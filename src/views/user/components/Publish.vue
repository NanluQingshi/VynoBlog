<!--
 * @Author: nlqs
 * @Date: 2024-05-27 21:09:17
 * @Description: 
-->
<script setup>
import { ElSelect, ElOption } from 'element-plus'
import { onMounted, ref } from 'vue'
import { useBlogStore } from '@/store/blogStore'

const blogStore = useBlogStore()

/** 博客 */
const title = ref('') // 标题
const blogLabel = ref([]) // 分类标签
const content = ref('') // 博客内容

// 发布博客功能
const doPublish = async () => {
  // 判空
  await blogStore.publishBlog({
    title: title.value,
    label: blogLabel.value,
    content: content.value,
    cover: ''
  })
  // 清空输入框信息
  title.value = ''
  blogLabel.value = []
  content.value = ''
}

onMounted(() =>{
  // 获取博客分类列表
  blogStore.getCategoryList()
}) 
</script>

<template>
  <div class="box">
    <div class="title">
      <p>发布博客</p>
    </div>
    <div class="publish">
      <div class="name">
        <label>
          <span>文章标题：</span>
          <input
            type="text"
            placeholder="请输入文章标题"
            v-model="title"
          >
        </label>
      </div>
      <div class="classify">
        <label for="article-category">
          <span>文章分类: </span>
        </label>
        <el-select
          v-model="blogLabel"
          filterable
          multiple
          multiple-limit="3"
          placeholder="--请选择文章标签--"
          id="article-category"
          class="category"
        >
          <el-option
            v-for="item in blogStore.categoryList"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          />
        </el-select>
      </div>
      <div class="content">
        <label for="article-content">
          <span>文章内容: </span>
        </label>
        <textarea
          id="article-content"
          placeholder="请输入文章内容"
          v-model="content"
        ></textarea>
      </div>
      <div class="btn">
        <span
          class="confirm"
          @click="doPublish"
        >确认发布</span>
      </div>
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

  .publish {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 2.2rem;
    width: 100%;
    height: 30.75rem;
    background-color: #fff;

    span {
      font-size: 1.5rem;
      font-weight: 1000;
      color: #5a5959;
    }

    .name,
    .classify,
    .content {
      width: 80%;
    }

    .name {
      height: 3rem;

      input {
        width: 36rem;
        height: 2.8rem;
        border: 0.1rem solid rgb(167, 164, 164);
        border-radius: 0.7rem;
        font-size: 1.1rem;
        transition: 0.6s;

        &:focus {
          font-size: 1.3rem;
          -moz-box-shadow: 0 0 5px 5px #06c;
          -webkit-box-shadow: 0 0 5px 5px #06c;
          box-shadow: 0 0 5px 5px #06c;
        }
      }
    }

    .classify {
      height: 3rem;

      .category {
        margin-left: 0.7rem;
        padding-left: 0.6rem;
        width: 36rem;
        height: 2.8rem;
        // border: 0.1rem solid rgb(167, 164, 164);
        font-size: 1.1rem;
      }
    }

    .content {
      display: flex;
      align-items: flex-start;
      height: 18rem;

      textarea {
        margin-left: 1rem;
        padding: 0.9rem 0 0 1.2rem;
        width: 36rem;
        height: 18rem;
        /** 内容溢出时显示滚动条 */
        overflow: auto;
        outline: none;
        resize: none;
        border: 0.1rem solid rgb(167, 164, 164);
        border-radius: 0.7rem;
        font-size: 1rem;
        transition: 0.8s;

        &:focus {
          font-size: 1.3rem;
          box-shadow: 0 5px 3px 3px rgba(51, 51, 51, 0.11);
        }
      }
    }

    .btn {
      display: flex;
      justify-content: center;
      width: 80%;

      .confirm {
        display: block;
        width: 6rem;
        height: 2.3rem;
        font-size: 1.3rem;
        font-weight: 400;
        color: #fff;
        text-align: center;
        line-height: 2.3rem;
        background-color: #409eff;
        outline-color: #a0cfff;
        border: 1px solod #409eff;
        border-radius: 4px;
        cursor: pointer;
        transition: 0.7s;

        &:hover {
          color: #fff;
          background-color: #79bbff;
          border: 1px solid #79bbff;
        }
      }
    }
  }
}
</style>