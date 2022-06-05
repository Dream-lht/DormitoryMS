<script setup lang="ts">
import { useStore } from 'vuex'
import { computed, ref } from 'vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import { IStudent } from './mainTypes'
import formatBuild from '@/utils/formatBuild'

const store = useStore()
// 控制弹出框
const dialogVisible = ref<boolean>(false)
//控制弹出框title
let title = ref<String>("")
// 学生信息
const studentInfo = ref<IStudent>({
  bedRoomId: '',
  build: 0,
  floor: 0,
  room: 0,
  studentId: '',
  studentName: '',
  students: [],
  buildInfo: [],
})
// 格式化级联数据
const formatBuilds = ref([])

// 宿舍信息
const rooms = computed(() => store.getters.getRoomsInfo)

// 楼栋信息
const builds = computed(() => store.getters.getBuildInfo)

const handleClose = () => {
  console.log('被关闭了')
}

//提示选择楼层
const selectFloor = () =>{
 const build = store.getters.getBuild
 if(build.build){
    return true
 }else{
   ElMessage({
        type: 'warning',
        message: '请先选择楼栋',
      })
      return false
 }
 
}

/**
 * 处理学生信息更新
 * @param row 父表行数据
 * @param scope 子表行数据
 */
const handleUpdataToStudent = (row: any, scope: any) => {
  
  if(!selectFloor()) {return}
  
  //控制对话框标题
  title.value = "修改"
  // 打开对话框
  dialogVisible.value = true
  // 获取学生信息
  studentInfo.value = { ...row, ...scope }
  
  studentInfo.value.buildInfo = [
    studentInfo.value.build,
    studentInfo.value.floor,
    studentInfo.value.bedRoomId,
  ]

  // 格式化级联列表
  formatBuild(builds.value, '', formatBuilds.value)
}

const handleCreateToStudent = (row) => {
  if(!selectFloor()) {return}
  //控制对话框标题
  title.value = "添加学生"
  // 打开对话框
  dialogVisible.value = true
 //
 
 studentInfo.value.buildInfo = [
    row.row.build,
    row.row.floor,
    row.row.bedRoomId,
  ]

  // 格式化级联列表
  formatBuild(builds.value, '', formatBuilds.value)
 
 
}


const handleRemoveToStudent = (row: any, scope: any) => {
  if(!selectFloor()) {return}
  ElMessageBox.confirm('确定删除吗？', '警告', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning',
  })
    .then(() => {
      const sid = scope.studentId
      store.dispatch('removeStudent', sid)
      ElMessage({
        type: 'success',
        message: '删除成功',
      })
    })
    .catch(() => {})
}

//点击对话框确认按钮
const submit = () => {
  dialogVisible.value = false
  
if(title.value === "修改"){
  
    studentInfo.value.bedRoomId = studentInfo.value.buildInfo[2]
    store.dispatch('updataStudentAction', studentInfo.value).then(() => {
    ElMessage({
      type: 'success',
      message: '修改成功',
    })
  })
  
}else if(title.value === "添加学生"){
  
    studentInfo.value.bedRoomId = studentInfo.value.buildInfo[2]
    store.dispatch('createStudentAction', studentInfo.value).then(() => {
    ElMessage({
      type: 'success',
      message: '添加成功',
    })
  })
  
} 

//清除原信息
studentInfo.value.studentId = ""
  studentInfo.value.studentName = ""
  formatBuilds.value = []
}

//点击对话框取消按钮
const cancle = () =>{
  //清空原信息
  studentInfo.value.studentId = ""
  studentInfo.value.studentName = ""
  formatBuilds.value = []
  //隐藏对话框
   dialogVisible.value = false
}
</script>

<template>
  <div>
    <el-table :data="rooms" style="width: 100%" max-height="500">
      <el-table-column type="expand">
        <template #default="props">
          <el-table
            :data="props.row.students"
            max-height="250"
            style="width: 100%"
          >
            <el-table-column width="50" />
            <el-table-column prop="studentId" label="学号" />
            <el-table-column prop="studentName" label="姓名" />
            <el-table-column label="操作">
              <template #default="scope">
                <el-button
                  size="small"
                  @click="handleUpdataToStudent(props.row, scope.row)"
                  >修改</el-button
                >
                <el-button
                  size="small"
                  type="danger"
                  @click="handleRemoveToStudent(props.row, scope.row)"
                  >删除</el-button
                >
              </template>
            </el-table-column>
          </el-table>
        </template>
      </el-table-column>
      <el-table-column label="楼栋" prop="build" />
      <el-table-column label="层数" prop="floor" />
      <el-table-column label="寝室号" prop="room" />
      <el-table-column label="人数" prop="students.length" />
       <el-table-column label="操作">
         <template #default="scope">
                <el-button
                  size="small"
                  :disabled="scope.row.students.length < 6 ? false : true"
                  @click="handleCreateToStudent(scope)"
                  >添加学生</el-button
                >
              </template>
       </el-table-column>
    </el-table>
    <el-dialog
      v-model="dialogVisible"
      :title="title"
      width="30%"
    >
        <el-form :inline="true" :model="studentInfo" class="demo-form-inline">
        <el-form-item label="姓名">
          <el-input v-model="studentInfo.studentName" placeholder="姓名" />
        </el-form-item>
        <el-form-item label="学号">
          <el-input v-model="studentInfo.studentId" placeholder="学号" />
        </el-form-item>
        <el-form-item label="楼栋">
          <el-cascader
            v-model="studentInfo.buildInfo"
            :options="formatBuilds"
          />
        </el-form-item>
      </el-form>
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="cancle">取消</el-button>
          <el-button type="primary" @click="submit">确定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
</template>

<script scoped lang="less"></script>
