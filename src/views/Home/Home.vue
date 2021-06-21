<template>
  <div class="h-screen w-screen"></div>
</template>

<script lang="ts">
import SvgIcon from '@/components/SvgIcon.vue'
import { defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
  components: { SvgIcon },
  setup() {
    const state = reactive({
      ruleForm: {
        username: '',
        password: '',
      },
      rules: {
        username: [
          { required: 'true', message: '账户不能为空', trigger: 'blur' },
        ],
        password: [
          { required: 'true', message: '密码不能为空', trigger: 'blur' },
        ],
      },
    })
    return {
      ...toRefs(state),
    }
  },
})
</script>

<style scoped lang="less"></style>
