<template>
  <div class="login_box">
    <h2>后台管理系统</h2>
    <el-tabs type="border-card" stretch>
      <el-tab-pane>
        <template #label>
          <span class="center">
            <el-icon><User /></el-icon>手机登录
          </span>
        </template>
        <LoginUser ref="LoginUserRef" />
      </el-tab-pane>
      <!-- <el-tab-pane>
        <template #label>
          <span class="center">
            <el-icon><Iphone /></el-icon>手机登录
          </span>
        </template>
        <LoginIphone />
      </el-tab-pane> -->
    </el-tabs>
    <div class="options">
      <el-checkbox v-model="isKeepPass" label="记住密码" />
      <a href="https://cn.bing.com" class="link">忘记密码</a>
    </div>
    <el-button class="login_btn" type="primary" @click="handleLogin"
      >登录</el-button
    >
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import LoginUser from './login_user.vue'
import { Cache } from '@/utils/cache'

export default defineComponent({
  components: {
    LoginUser,
  },
  setup() {
    // 是否记住密码
    const isKeepPass = ref(false)

    // 保存LoginUser组件实例
    const LoginUserRef = ref<InstanceType<typeof LoginUser>>(null)
    const handleLogin = () => {
      LoginUserRef.value.handleLogin()
      if (isKeepPass.value) {
        const cache = new Cache()
        cache.set('phone', LoginUserRef.value.loginInfo.phone, 'local')
        cache.set('pwd', LoginUserRef.value.loginInfo.pwd, 'local')
      }
    }
    return {
      isKeepPass,
      handleLogin,
      LoginUserRef,
    }
  },
})
</script>

<style lang="less" scoped>
h2 {
  padding: 0;
  margin-bottom: 20px;
}
.center {
  display: flex;
  align-items: center;
  justify-content: center;
}
.login_box {
  width: 400px;
  text-align: center;
  /deep/.el-tabs {
    border-radius: 10px;
    overflow: hidden;
    opacity: 0.8;
  }
}
.options {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  margin-top: 10px;
}
.link {
  font-size: 10px;
  color: #ccc;
}
.link:hover {
  color: skyblue;
}
.login_btn {
  width: 100%;
  margin-top: 10px;
}
</style>
