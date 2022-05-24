<script setup lang="ts">
import { ref } from 'vue'
import { useStore } from 'vuex'
const store = useStore()
const sid = ref<string>('')
const sname = ref<string>('')

// 处理学号搜索

const handleSidSeach: () => void = () => {
  try {
    store.dispatch('findStudentById', sid.value)
    sid.value = ''
  } catch (err) {}
}
// 处理姓名搜索
const handleSnameSeach: () => void = () => {
  try {
    store.dispatch('findStudentByName', sname.value)
    sname.value = ''
  } catch (err) {}
}
</script>

<template>
  <div class="main_header">
    <el-input v-model="sid" placeholder="请输入学号" clearable />
    <el-button type="primary" @click="handleSidSeach">搜索</el-button>
    <el-input v-model="sname" placeholder="请输入姓名" clearable />
    <el-button type="primary" @click="handleSnameSeach">搜索</el-button>
  </div>
</template>

<style scoped lang="less">
.main_header {
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 60px;
  border-radius: 20px;
  /deep/ .el-input {
    width: 30%;
    margin-left: 30px;
    margin-right: 10px;
  }
  /deep/ .el-button {
    width: 7vw;
  }
}
</style>

rooms:[ build:5, floor:4, roomsNo:210, students:[] ]
