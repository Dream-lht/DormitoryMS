import { createWebHistory, createRouter } from 'vue-router'
import routes from './routes'
import { Cache } from '@/utils/cache'

const cache = new Cache()

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach(to => {
  if (to.path !== '/login') {
    // 如果路由不是去登录页面，则检查token是否存在，不存在就进行登录
    if (cache.get('sessionId', 'session')) {
      return true
    } else {
      router.push('/login')
      return false
    }
  }
})
export default router
