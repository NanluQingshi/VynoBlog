/*
 * @Author: NanluQingshi
 * @Date: 2024-05-31 16:46:48
 * @Description: 博客状态管理库
 */
import { getAllBlogAPI, publishBlogAPI } from '@/api/blog'
import { defineStore } from 'pinia'

export const useBlogStore = defineStore('blog', {
  state: () => ({
    // 提示信心
    tipsInfo: '',
    // 分类列表
    categoryList: [],
    // 所有博客
    blogList: []
  }),

  actions: {
    /**
       TODO: 获取博客分类
       TODO：要设计一个分类表
     */
    async getCategoryList () {
      this.categoryList = [
        {
          value: '前端',
          label: '前端',
        },
        {
          value: 'Web',
          label: 'Web',
        },
        {
          value: 'JavaScript',
          label: 'JavaScript',
        },
        {
          value: '小程序',
          label: '小程序',
        },
        {
          value: 'HTML5',
          label: 'HTML5',
        },
        {
          value: 'Java',
          label: 'Java',
        },
        {
          value: '数据库',
          label: '数据库',
        },
        {
          value: '操作系统',
          label: '操作系统',
        },
      ]
    },

    /** 发布博客 */
    async publishBlog (blog) {
      if (blog.title.trim() === '') {
        this.tipsInfo = '标题不能为空!'
        console.log(this.tipsInfo)
        return
      }
      if (blog.content.trim() === '') {
        this.tipsInfo = '博文内容不能为空!'
        console.log(this.tipsInfo)
        return 
      }
      try {
        const result = await publishBlogAPI(blog)
        return result
      } catch (err) {
        console.log('publish blog error : ', err)
      }
    },

    /** 获取所有博客 */
    async getAllBlog () {
      try {
        const result = await getAllBlogAPI()
        this.blogList = result.data
        // console.log('blogStore: ', this.blogList)
      } catch (err) {
        console.log('get all blogs --', err)
      }
    },

    /** 格式化博客时间 */
    formatTime ({ createdAt, updatedAt }) {
      const len = this.blogList.length
      for (let i = 0; i < len; i++) {
        const blog = this.blogList[i]
        blog.createdAt = createdAt
        this.updatedAt = updatedAt
      }
    }
  }
})