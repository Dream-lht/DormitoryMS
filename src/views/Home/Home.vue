<template>
  <div class="h-screen w-screen">
    <svg-icon name="test"></svg-icon>
  </div>
</template>

<script lang="ts">
import SvgIcon from '@/components/SvgIcon.vue'
import { defineComponent, reactive, toRefs } from 'vue'

export default defineComponent({
  components: { SvgIcon },
  setup() {
    const state = reactive({})
    return {
      ...toRefs(state),
    }
  },
})
</script>

<style scoped lang="less"></style>
