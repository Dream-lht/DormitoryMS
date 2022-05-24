import axios from 'axios'
import type { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios'
import { ElMessage } from 'element-plus'
import { Cache } from '../cache'
// 创建实例
const request: AxiosInstance = axios.create({
  baseURL: '/api',
  timeout: 2000,
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
  },
})
request.defaults.withCredentials = true

// 请求拦截
request.interceptors.request.use(
  (config: AxiosRequestConfig): AxiosRequestConfig => {
    // 请求拦截
    // 添加token
    const cache = new Cache()
    config.headers.sessionId = JSON.parse(cache.get('sessionId', 'session'))
      ? JSON.parse(cache.get('sessionId', 'session'))
      : ''
    return config
  },
  (error: any) => {
    return Promise.reject(error)
  }
)
// 响应拦截
request.interceptors.response.use(
  (response: AxiosResponse) => {
    const statusCode: number = response.data.code

    switch (statusCode) {
      case 2000:
        // 请求成功
        return response
      case 3333:
        // 登录失败
        ElMessage({
          type: 'warning',
          message: '登录失败',
        })
        // eslint-disable-next-line prefer-promise-reject-errors
        return Promise.reject()
      case 5000:
        // 参数错误
        ElMessage({
          type: 'warning',
          message: '参数失败',
        })
        // eslint-disable-next-line prefer-promise-reject-errors
        return Promise.reject()
    }
  },
  error => {
    return Promise.reject(error)
  }
)

export default request
