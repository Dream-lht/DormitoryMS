<script setup></script>

<template>
  <div class="avatar">
    <img src="@/assets/image/avatar.jpg" class="image" />
    <span class="username">胡歌</span>
  </div>
</template>

<style scoped lang="less">
.avatar {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;

  .image {
    width: 45px;
    height: 45px;
    border-radius: 50%;
  }
  .username {
    font-size: 12px;
  }
}
</style>
