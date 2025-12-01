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

  <section class="main-form">
    <div class="section-bg">
      <div class="deco1"/>
      <div class="deco2"/>
    </div>
    <div class="relative-gap">
      <div class="phrase">
        あなたの表現に、新たな創造を。
      </div>
      <div class="phrase-content">
        あなたの作品・あなたの声・あなたの世界観。<br>
        AddCreart は、そのすべてに “もうひとつの価値” を加えるための、クリエイティブ・パートナーです。
      </div>
    </div>
  </section>

  <section class="about">
    <div class="section-bg"/>
  <ABOUT id="ABOUT"/>
  </section>

  <section class="service">
    <div class="section-bg"/>
  <SERVICE id="SERVICE"/>
  </section>

  <section class="creator">
    <div class="section-bg"/>
  <CREATOR id="CREATOR"/>
  </section>
</template>

<style scoped>

</style>