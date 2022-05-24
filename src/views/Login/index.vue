<template>
  <div class="login">
    <LoginBox></LoginBox>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

// 引入登录盒子
import LoginBox from './cpns/login_box.vue'
export default defineComponent({
  components: {
    LoginBox,
  },
})
</script>

<style lang="less" scoped>
.login {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 100vw;
  height: 100vh;
  background: url('@/assets/image/login_bg.jpg') no-repeat;
  background-size: 100% 100%;
}
</style>
