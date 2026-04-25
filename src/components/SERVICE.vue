<script setup>
import { onMounted, ref } from "vue";

const activeIndex = ref(0);

onMounted(() => {
  const container = document.querySelector('.service-container');
  const cards = document.querySelectorAll('.service-card');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-active');

        const index = Array.from(cards).indexOf(entry.target);
        if (index !== -1) activeIndex.value = index;
      } else {
        entry.target.classList.remove('is-active');
      }
    });
  }, {
    root: container,
    threshold: 0.7
  });

  cards.forEach(card => observer.observe(card));
});
</script>

<template>
  <div class="container">
    <div class="container-title">SERVICE</div>
    <div class="service-container">
      <div class="service-card">
        <div class="service-card-icon"></div>
        <div class="service-card-title">Music Creative</div>
        <div class="service-card-content">
          ミックス、マスタリング、ボーカルエディット、ボーカルディレクション
        </div>
      </div>

      <div class="service-card">
        <div class="service-card-icon"></div>
        <div class="service-card-title">Movie Creative</div>
        <div class="service-card-content">
          オリジナル楽曲MV、<br/>歌ってみたMV、Short動画
        </div>
      </div>

      <div class="service-card">
        <div class="service-card-icon"></div>
        <div class="service-card-title">Visual Creative</div>
        <div class="service-card-content">
          ロゴデザイン、立ち絵、<br/>パーツ分けイラスト、<br/>イラスト
        </div>
      </div>
    </div>

    <div class="indicator-container">
      <span
          v-for="(_, i) in 3"
          :key="i"
          class="dot"
          :class="{ active: activeIndex === i }"
      ></span>
    </div>
  </div>
</template>

<style scoped>

</style>