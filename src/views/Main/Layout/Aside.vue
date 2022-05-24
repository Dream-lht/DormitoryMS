<template>
  <div class="aside">
    <el-aside>
      <div class="icon_box">
        <img src="@/assets/image/logoIcon.svg" class="icon" />
        <span>宿舍管理系统</span>
      </div>
      <el-scrollbar max-height="700px" :native="false">
        <el-menu
          default-active="1"
          class="el-menu-vertical-demo"
          background-color="#545c64"
          @open="handleOpen"
        >
          <SubMenu
            v-for="buildItem in buildings"
            :key="buildItem.build"
            :index="buildItem.build + ''"
            :floor-name="buildItem.build + ''"
            :floor-data="buildItem.floors"
          ></SubMenu>
        </el-menu>
      </el-scrollbar>
    </el-aside>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { useStore } from 'vuex'
import SubMenu from '@/components/subMenu/index.vue'
import { computed } from '@vue/reactivity'
export default defineComponent({
  components: {
    SubMenu,
  },
  setup() {
    // 通过后台的列表来动态渲染页面
    const store = useStore()
    const userPower = reactive(store.getters['login/getUserPower'])
    console.log(userPower)

    const handleOpen = (key: string, keyPath: string[]) => {
      console.log(key)
    }
    // const handleClose = (key: string, keyPath: string[]) => {
    //   console.log(key, keyPath)
    // }
    store.dispatch('getBuildAction')

    return {
      handleOpen,
      userPower,
      buildings: computed(() => store.getters.getBuildInfo),
    }
  },
})
</script>

<style scoped lang="less">
.aside {
  width: 200px;
  /deep/ .el-aside {
    width: 230px;
    height: 100vh;
    background-color: #545c64;
  }
}

.icon_box {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 80px;
  color: #fff;
  background-color: #545c64;

  .icon {
    width: 55px;
    height: 55px;
  }
}

/deep/ .el-scrollbar {
  height: calc(100vh - 80px);
  .el-menu {
    height: 100%;

    .el-sub-menu__title {
      color: #fff;
    }

    .el-menu--inline {
      .el-menu-item {
        color: #fff;
      }
      .is-active {
        color: #ffd04b;
      }
    }
  }
}
</style>
