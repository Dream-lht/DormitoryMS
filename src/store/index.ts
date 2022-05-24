import { createStore } from 'vuex'
import login from '@/store/module/login/login'
import main from './module/Main/main'
import { IRootState } from '@/store/types'

// 创建store实例

const Store = createStore<IRootState>({
  state: {},
  actions: {},
  modules: {
    login,
    main,
  },
})

export function localStore() {
  Store.dispatch('login/localStore')
}

export default Store
