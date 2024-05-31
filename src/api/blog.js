/*
 * @Author: NanluQingshi
 * @Date: 2024-05-31 11:10:10
 * @Description: 封装博客业务相关接口
 */
import httpInstance from '@/utils/http'

/**
 * @description: 发布博客
 * @param {*} blog
 * @return {*}
 */
export const publishBlogAPI = (blog) => {
  return httpInstance.post('/blog/publish', blog)
}