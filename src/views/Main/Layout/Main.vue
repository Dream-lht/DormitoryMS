<template>
  <div class="main card">
    <MainHeader></MainHeader>
    <MainView></MainView>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import MainView from '@/components/mainView/index.vue'
import MainHeader from '@/components/mainHeader/index.vue'
export default defineComponent({
  components: {
    MainView,
    MainHeader,
  },
  setup() {
    console.log('被加载了')
  },
})
</script>

<style scoped lang="less">
.main {
  width: 95%;
  height: calc(100vh - 120px);
  margin-top: 20px;
  background-color: #ffff;
}
.card {
  border-radius: 20px;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.12);
}
</style>
