<template>
  <div class="login_user">
    <el-form>
      <el-form-item label="手机号:">
        <el-input></el-input>
      </el-form-item>
      <el-form-item>
        <span class="flex">
          <el-input class="inputVerify"></el-input>
          <el-button type="primary">验证码</el-button>
        </span>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  setup() {},
})
</script>

<style lang="less" scoped>
.flex {
  display: flex;
}
.login_user {
  /deep/.inputVerify {
    width: 75%;
    margin-right: 5%;
  }
}
</style>
