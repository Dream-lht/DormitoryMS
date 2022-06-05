import request from '@/utils/http'

export interface IRoom {
  build: string
  floor: string
}

export interface IStudentData {
  studentId: string
  name: string
  bedRoomId: string
}

/**
 * 获取所有的楼栋信息
 */
export function getBedroom() {
  return request({
    url: '/bedroom',
    method: 'get',
  })
}

export function getRooms(params: IRoom) {
  return request({
    url: `/bedroom/${params.build}/${params.floor}`,
    method: 'get',
  })
}

// 按照学号搜索
export function findStudentById(sid: string) {
  return request({
    url: `/student/${sid}`,
    method: 'get',
  })
}
// 按照姓名搜索
export function findStudentByName(name: string) {
  return request({
    url: `/student/name/${name}`,
    method: 'get',
  })
}

// 修改学生信息
export function updataStudentInfo(data: IStudentData) {
  return request({
    url: '/student',
    data: data,
    method: 'PUT',
  })
}

// 删除学生信息
export function removeStudentBySid(sid: string | number) {
  return request({
    url: `/student/${sid}`,
    method: 'DELETE',
  })
}

//添加学生信息
export function createStudentInfo(data: IStudentData) {
  return request({
    url: '/student',
    data: data,
    method: 'post',
  })
}
