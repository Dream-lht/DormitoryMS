<template>
  <el-header class="header card">
    <el-page-header :content="`${buildInfo.build}栋/${buildInfo.floor}层`" />
    <!-- <span>{{ `${buildInfo.build}栋/${buildInfo.floor}层` }}</span> -->
    <div class="logout">
      <Avatar></Avatar>
      <el-button type="primary" @click="logout">登出</el-button>
    </div>
  </el-header>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useStore } from 'vuex'
import { ArrowLeft } from '@element-plus/icons-vue'
import Avatar from '@/components/Avatar/index.vue'
export default defineComponent({
  components: {
    Avatar,
  },
  setup() {
    const store = useStore()

    const logout = () => {
      store.dispatch('logoutAction')
    }
    return {
      ArrowLeft,
      logout,
      buildInfo: computed(() => store.getters.getBuild),
    }
  },
})
</script>

<style scoped lang="less">
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 95%;
  margin-top: 10px;
  height: 70px;
  background-color: #fff;
}

.logout {
  display: flex;
  align-items: center;
}
.card {
  border-radius: 20px;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.12);
}
</style>
