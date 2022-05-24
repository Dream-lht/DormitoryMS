import axios from 'axios'
import type { AxiosRequestConfig, AxiosInstance } from 'axios'
import { TIME_OUT, BASE_URL, Headers } from '@/utils/http/config'

// 定义config的接口类型
interface RequestConfig extends AxiosRequestConfig {
  // 请求拦截成功
  RequestSuccess: (config: RequestConfig) => RequestConfig
  // 请求失败
  RequestError: (error: any) => any
  // 响应成功
  ResponseSuccess: (config: RequestConfig) => RequestConfig
  // 响应失败
  ResponseError: (error: any) => any
}

// 对request请求进行封装
class Request {
  // 请求实例
  instance: AxiosInstance
  constructor(config: RequestConfig) {
    // 对axios进行初始化
    this.instance = axios.create({
      baseURL: BASE_URL,
      timeout: TIME_OUT,
      headers: Headers,
    })
    this.instance.interceptors.request.use(
      config.RequestSuccess,
      config.RequestError
    )
    this.instance.interceptors.response.use(
      config.ResponseSuccess,
      config.ResponseError
    )
  }

  // 发生请求
  http(config: RequestConfig) {
    // 返回一个Promise对象
    return this.instance(config)
  }
}
