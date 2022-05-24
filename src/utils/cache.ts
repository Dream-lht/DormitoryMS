type Type = 'session' | 'local'

export class Cache {
  // 存储数据
  set(key: string, data: any, type: Type) {
    // 临时存储
    if (type === 'session') {
      window.sessionStorage.setItem(key, JSON.stringify(data))
    } else {
      // 持久存储
      window.localStorage.setItem(key, JSON.stringify(data))
    }
  }

  get(key: string, type: Type): string {
    if (type === 'session') {
      return <string>window.sessionStorage.getItem(key)
    } else {
      return <string>window.localStorage.getItem(key)
    }
  }

  removeItem(key: string, type: Type) {
    if (type === 'session') {
      window.sessionStorage.removeItem(key)
    } else {
      window.localStorage.removeItem(key)
    }
  }

  removeAll(key: string, type: Type) {
    if (type === 'session') {
      window.sessionStorage.clear()
    } else {
      window.localStorage.clear()
    }
  }
}
