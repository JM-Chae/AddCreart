<script setup>
import { onMounted, ref } from "vue";

const activeIndex = ref(0);

onMounted(() => {
  const container = document.querySelector('.plan-container');
  const cards = document.querySelectorAll('.plan-card');

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
    <div class="container-title">PLAN</div>
    <div class="plan-container">
      <div class="plan-card mix-plan">
        <div class="plan-card-title">Mix プラン（3種）</div>
        <div class="plan-card-content">Light</div>
        <div class="plan-card-content">Standard</div>
        <div class="plan-card-content">Premium</div>
      </div>

      <div class="plan-card mv-plan">
        <div class="plan-card-title">MV プラン（3種）</div>
        <div class="plan-card-content">Light</div>
        <div class="plan-card-content">Standard</div>
        <div class="plan-card-content">Premium</div>
      </div>

      <div class="plan-card mix-mv-plan">
        <div class="plan-card-title">Mix + MV セットプラン</div>
        <div class="plan-card-content">音と映像を一体で仕上げる統合プラン</div>
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

    <div class="plan-footer-note">
      ※詳細な内容・料金はお問い合わせ後に個別にご案内いたします。
    </div>
  </div>
</template>

<style scoped>

</style>