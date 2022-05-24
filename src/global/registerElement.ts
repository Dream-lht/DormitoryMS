import ElementPlus from 'element-plus'
// 样式
import 'element-plus/dist/index.css'
import {
  Iphone,
  User,
  Location,
  Document,
  Menu as IconMenu,
  Setting,
} from '@element-plus/icons-vue'

import type { App } from 'vue'

const ElementIcon = [Iphone, User, Location, Document, IconMenu, Setting]

export default function registerElement(app: App) {
  // 注册Element-plus
  app.use(ElementPlus)
  // 注册图标
  for (const icon of ElementIcon) {
    app.component(icon.name, icon)
  }
}
