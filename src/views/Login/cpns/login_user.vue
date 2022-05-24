<template>
  <div class="login_user">
    <el-form ref="elFormRef" :rules="rules" :model="loginInfo">
      <el-form-item label="" prop="phone">
        <el-input
          v-model="loginInfo.phone"
          placeholder="请输入手机号"
        ></el-input>
      </el-form-item>
      <el-form-item label="" prop="pwd">
        <el-input
          v-model="loginInfo.pwd"
          type="password"
          placeholder="请输入密码"
        ></el-input>
      </el-form-item>
      <el-form-item label="" prop="code" class="code_box">
        <el-input
          v-model="loginInfo.code"
          placeholder="请输入验证码"
        ></el-input>
        <img class="image" :src="imageUrl" @click="refresh" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref, computed } from 'vue'

// 登录类型
import { ILoginType } from '@/api/login'
import type { ElForm } from 'element-plus'
import { useStore } from 'vuex'
import { Cache } from '@/utils/cache'

export default defineComponent({
  // eslint-disable-next-line max-lines-per-function
  setup() {
    const store = useStore()
    const cache = new Cache()

    const imageUrl = computed(() => store.getters['login/getCaptcha'])
    console.log(imageUrl)
    // 定义用户名和密码
    const loginInfo = reactive<ILoginType>({
      phone: JSON.parse(cache.get('phone', 'local'))
        ? JSON.parse(cache.get('phone', 'local'))
        : '',
      pwd: JSON.parse(cache.get('pwd', 'local'))
        ? JSON.parse(cache.get('pwd', 'local'))
        : '',
      code: '',
    })

    // 定义规则
    const rules = reactive({
      phone: [
        {
          required: true,
          trigger: ['blur', 'change'],
          message: '请输入手机号',
        },
      ],
      pwd: [
        {
          required: true,
          trigger: ['blur', 'change'],
          message: '请输入密码',
        },
      ],
      code: [
        {
          required: true,
          trigger: ['blur', 'change'],
          message: '请输入验证码',
        },
      ],
    })

    // 获取表单ref
    const elFormRef = ref<InstanceType<typeof ElForm> | null>(null)

    // 获取验证码
    const getCaptcha = () => {
      store.dispatch('login/getCaptchaAction')
    }

    getCaptcha()

    // 真正的登录方法
    const handleLogin = () => {
      // 判断验证是否成功
      elFormRef.value?.validate(async valid => {
        if (valid) {
          console.log(loginInfo)
          // let res = await login(loginInfo);
          store.dispatch('login/getLoginAction', { ...loginInfo })
        }
      })
    }

    const refresh = () => {
      getCaptcha()
    }
    return {
      rules,
      loginInfo,
      elFormRef,
      refresh,
      imageUrl,
      handleLogin,
    }
  },
})
</script>

<style lang="less" scoped>
.login_user {
  /deep/ .el-form-item {
    .el-input {
      // width: 200px;
    }
  }
  /deep/ .code_box {
    .el-form-item__content {
      display: flex;
      justify-content: flex-start;
      .el-input {
        width: 200px;
      }
      .image {
        width: 120px;
        margin-left: 30px;
      }
    }
  }
}
</style>
