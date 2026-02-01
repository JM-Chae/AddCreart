<script setup>
import { ref } from 'vue'
const open = ref(false)
</script>

<template>
  <button class="menu-btn" @click="open = !open">MENU</button>

  <nav :class="['nav', { open }]">
    <a href="#ABOUT" class="content-btn">ABOUT</a>
    <a href="#SERVICE" class="content-btn">SERVICE</a>
    <a href="#CREATOR" class="content-btn">CREATOR</a>
    <a href="#" class="content-btn">PLAN</a>
    <a title="Xへ飛ぶ" href="https://x.com/addcreart_info" target='_blank' class="content-btn">CONTACT ▶</a>
  </nav>
</template>

<style scoped>

</style>