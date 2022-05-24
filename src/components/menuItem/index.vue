<script setup lang="ts">
import { defineProps } from 'vue'
import { useStore } from 'vuex'
import { IRoom } from '@/api/main'
const props = defineProps({
  index: {
    type: String,
    default: '',
  },
  rooms: {
    type: Object,
    default: () => {
      return {}
    },
  },
  layerName: {
    type: String,
    default: '',
  },
})

const store = useStore()

const handleClick = (key: string) => {
  const buildInfo: IRoom = {
    build: '',
    floor: '',
  }
  const buildArr = key.split('-')

  buildInfo.build = buildArr[0]
  buildInfo.floor = buildArr[1]

  store.dispatch('getRoomsAction', buildInfo)
}
</script>

<template>
  <el-menu-item :index="props.index" @click="handleClick(props.index)">{{
    props.layerName + '层'
  }}</el-menu-item>
</template>

<style></style>
