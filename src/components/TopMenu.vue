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
    <a href="#PLAN" class="content-btn">PLAN</a>
    <a href="#FLOW" class="content-btn">FLOW</a>
    <a href="#CONTACT" class="content-btn">CONTACT</a>
    <a title="Xへ飛ぶ" href="https://x.com/addcreart_info?s=20" target='_blank' class="content-btn x-link">
      OFFICIAL<svg class="x-logo" viewBox="0 0 24 24" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
      </svg>
    </a>
  </nav>
</template>

<style scoped>

</style>