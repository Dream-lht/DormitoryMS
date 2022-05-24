import registerElement from '@/global/registerElement'
import type { App } from 'vue'
export default function registerApp(app: App) {
  // 注册element
  registerElement(app)
}
