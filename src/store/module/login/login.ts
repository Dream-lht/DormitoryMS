import { Module } from 'vuex'
import { ILoginType, login, logout, getCaptcha } from '@/api/login'
import { ILoginState } from '@/store/module/login/types'
import { IRootState } from '@/store/types'
import { Cache } from '@/utils/cache'
import router from '@/router'

const cache = new Cache()
// 这里的Module需要传入两个类型，第一个是模块自身state的类型，第二个是跟模块的state类型
const loginModule: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      sessionId: '',
      userInfo: {},
      userPower: {},
      captcha: '',
    }
  },
  mutations: {
    // 改变token
    CHANGE_SESSIONID(state, token: string) {
      state.sessionId = token
    },
    // 获取用户信息
    CHANGE_USERINFO(state, userInfo) {
      state.userInfo = userInfo
    },
    CHANGE_USERPOWER(state, userPower) {
      state.userPower = userPower
    },
    CHANGE_CAPTCHA(state, captcha) {
      state.captcha = captcha
    },
  },
  getters: {
    // 获取token
    getSessionId(state) {
      return state.sessionId
    },
    getUserInfo(state) {
      return state.userInfo
    },
    getUserPower(state) {
      return state.userPower
    },
    getCaptcha(state) {
      return state.captcha
    },
  },
  actions: {
    // 发送异步请求
    async getLoginAction({ commit, state, getters }, products: ILoginType) {
      // 获取登录信息token
      await login(products)

      // 跳转到主页
      router.push('/main')
    },

    // 登出
    async logoutAction() {
      await logout()
      router.push('login')
    },
    // 获取验证码图片
    async getCaptchaAction({ commit }) {
      const res = await getCaptcha()

      // 持久化sission
      commit('CHANGE_SESSIONID', res.data.data.sessionId)
      cache.set('sessionId', res.data.data.sessionId, 'session')
      commit('CHANGE_CAPTCHA', res.data.data.code)
    },
  },
}

export default loginModule
