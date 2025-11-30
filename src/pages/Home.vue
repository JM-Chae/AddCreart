<script setup>

import TopMenu from "@/components/TopMenu.vue";
import ABOUT from "@/components/ABOUT.vue";
import SERVICE from "@/components/SERVICE.vue";
import CREATOR from "@/components/CREATOR.vue";
</script>

<template>
  <header class="header">
    <a class="home-btn" href="#">HOME</a>
    <TopMenu/>
  </header>

  <div class="relative-gap">
    <div class="phrase">
      あなたの表現に、新たな創造を。
    </div>
    <div class="phrase-content">
      あなたの作品・あなたの声・あなたの世界観。<br>
      AddCreart は、そのすべてに “もうひとつの価値” を加えるための、クリエイティブ・パートナーです。
    </div>
  </div>

  <ABOUT id="ABOUT"/>
  <div style="margin-bottom: 5em"/>
  <SERVICE id="SERVICE"/>
  <div style="margin-bottom: 5em"/>
  <CREATOR id="CREATOR"/>
</template>

<style scoped>
  .home-btn {
    position: relative;
    top: 0;
    left: 0;
  }

  .phrase {
    margin-bottom: 1em;
    font-size: 2.5em;
  }
  .phrase-content {
    font-size: 1.5em;
  }
</style>