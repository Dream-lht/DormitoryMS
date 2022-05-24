import request from '@/utils/http'

export interface ILoginType {
  phone: string
  pwd: string
  code: string
}

/**
 * 登录接口
 * @params username password
 * */

export function login(data: ILoginType) {
  return request({
    url: '/login',
    method: 'post',
    data: data,
  })
}

/**
 * 查询某个用户，获取用户信息
 * @params id
 * */

export function getUserInfo(id: number) {
  return request({
    url: '/users/' + id,
    method: 'get',
  })
}

/**
 * 查询某个用户的的权限
 *@params id
 * */

export function getUserPower(id: number) {
  return request({
    url: '/role/' + id + '/menu',
    method: 'get',
  })
}

// 登出
export function logout() {
  return request({
    url: '/logout',
    method: 'get',
  })
}

// 获取验证码图片
export function getCaptcha() {
  return request({
    url: '/captcha',
    method: 'get',
  })
}
