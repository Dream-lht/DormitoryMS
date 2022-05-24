import { Module } from 'vuex'
import { IRootState } from '@/store/types'
import { IMainState } from './types'
import {
  getBedroom,
  getRooms,
  findStudentById,
  findStudentByName,
  IStudentData,
  updataStudentInfo,
  removeStudentBySid,
} from '@/api/main'
import { Cache } from '@/utils/cache'
const cache = new Cache()

const main: Module<IMainState, IRootState> = {
  state: {
    buildings: [],
    rooms: [],
    buildInfo: {
      build: '',
      floor: '',
    },
  },
  getters: {
    //   获取楼栋的所有信息
    getBuildInfo(state) {
      if (state.buildings.length) {
        return state.buildings
      } else {
        console.log()
        return JSON.parse(cache.get('buildings', 'session'))
      }
    },

    // 获取楼层宿舍信息
    getRoomsInfo(state) {
      if (state.rooms.length) {
        return state.rooms
      } else {
        return JSON.parse(cache.get('rooms', 'session'))
      }
    },

    // 获取当前选中的楼栋
    getBuild(state) {
      return state.buildInfo
    },
  },
  mutations: {
    // 改变楼栋信息
    CHANGE_BUILDINGS(state, buildings) {
      state.buildings = buildings
    },

    // 改变楼层宿舍信息
    CHANGE_ROOMS(state, rooms) {
      state.rooms = rooms
    },

    // 改边当前楼栋
    CHANGE_BUILD(state, buildInfo) {
      state.buildInfo.build = buildInfo.build
      state.buildInfo.floor = buildInfo.floor
    },
  },
  actions: {
    // 获取所有的楼栋信息
    async getBuildAction({ commit }) {
      const buildings = await getBedroom()

      // 存储楼栋信息
      commit('CHANGE_BUILDINGS', buildings.data.data.buildings)

      cache.set('buildings', buildings.data.data.buildings, 'session')
    },

    // 获取楼层信息
    async getRoomsAction({ commit }, params) {
      // 更改当前选中的楼栋
      commit('CHANGE_BUILD', params)
      const rooms = await getRooms(params)
      commit('CHANGE_ROOMS', rooms.data.data)

      cache.set('rooms', rooms.data.data, 'session')
    },

    // 按学号搜索
    async findStudentById({ commit }, sid) {
      const studentInfo = await findStudentById(sid)

      commit('CHANGE_ROOMS', studentInfo.data.data)
      cache.set('rooms', studentInfo.data.data, 'session')
    },
    // 按姓名搜索
    async findStudentByName({ commit }, name) {
      const studentInfo = await findStudentByName(name)

      commit('CHANGE_ROOMS', studentInfo.data.data)
      cache.set('rooms', studentInfo.data.data, 'session')
    },

    // 更新学生信息
    async updataStudentAction({ getters }, data: IStudentData) {
      try {
        await updataStudentInfo(data)
        this.dispatch('getRoomsAction', getters.getBuild)
      } catch (err) {
        console.log('更新失败')
      }
    },
    // 删除学生信息
    async removeStudent({ getters }, sid: string | number) {
      await removeStudentBySid(sid)
      this.dispatch('getRoomsAction', getters.getBuild)
    },
  },
}

export default main
