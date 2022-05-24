<script setup lang="ts">
import { defineProps } from 'vue'
import MenuItem from '@/components/menuItem/index.vue'

const props = defineProps({
  index: {
    type: String,
    default: '',
  },
  floorName: {
    type: String,
    default: '',
  },
  floorData: {
    type: Object,
    default: () => {
      return {}
    },
  },
})
</script>

<template>
  <el-sub-menu :index="props.index">
    <template #title>
      <span>{{ props.floorName + '栋' }}</span>
    </template>
    <MenuItem
      v-for="floorItem in floorData"
      :key="floorItem.floor"
      :rooms="floorItem.rooms"
      :index="`${index}-${floorItem.floor}`"
      :layer-name="floorItem.floor + ''"
    >
    </MenuItem>
  </el-sub-menu>
</template>

<style></style>
