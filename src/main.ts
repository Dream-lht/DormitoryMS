/* eslint-disable import/no-duplicates */
import { createApp } from 'vue'
import router from '@/router'

// 组件
import App from './App.vue'
import registerApp from '@/global'
// 标签样式初始化
import 'normalize.css'

// svg
import 'vite-plugin-svg-icons/register'
// 导入store
import Store from '@/store'

const app = createApp(App)
registerApp(app)
app.use(router)
app.use(Store)
app.mount('#app')
