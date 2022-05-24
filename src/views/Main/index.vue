<template>
  <div class="main_view">
    <el-container direction="vertical" class="aside_box">
      <Aside></Aside>
    </el-container>

    <el-container direction="vertical" class="main_box">
      <Header></Header>
      <Main></Main>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Aside from './Layout/Aside.vue'
import Header from './Layout/Header.vue'
import Main from './Layout/Main.vue'

export default defineComponent({
  components: {
    Aside,
    Header,
    Main,
  },
})
</script>

<style lang="less" scoped>
.main_view {
  display: flex;
  width: 100vw;
  height: 100vh;
}
.aside_box {
  width: 230px;
  height: 100vh;
}
.main_box {
  display: flex;
  align-items: center;
  width: calc(100vw - 230px);
  height: 100vh;
  background-color: #f3f3f3;
}
</style>
