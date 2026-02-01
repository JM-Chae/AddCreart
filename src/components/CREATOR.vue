<script setup>
import { ref } from 'vue';

// 팝업 상태 관리
const isModalOpen = ref(false);
const modalImgSrc = ref('');

// 이미지 클릭 시 실행될 함수
const openModal = (e) => {
  modalImgSrc.value = e.target.src;
  isModalOpen.value = true;
};

// 닫기 함수
const closeModal = () => {
  isModalOpen.value = false;
};
</script>


<template>
  <div class="container">
    <div class="container-title">CREATOR</div>

    <div class="creator-card">
      <div class="creator-music">
        <div class="creator-card-title">Music Engineer</div>
        <div style="display: flex; gap: 5em;">
          <img alt="icon" class="creator-card-icon" src="../img/tsubasa_icon.jpg"/>
          <div class="creator-card-name">tsubasa.add AddCreart Lab.代表</div>
        </div>

        <div class="creator-works-title">WORKS</div>
        <div class="creator-works-container">
          <div class="work-container">
            <iframe
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
                class="work"
                frameborder="0"
                referrerpolicy="strict-origin-when-cross-origin"
                src="https://www.youtube.com/embed/GxeUhFq7OEg?si=zmmA_72Xz4gpXOPJ"
                title="YouTube video player"></iframe>
            <div class="work-title">ずうっといっしょ【歌ってみた】tsubasa.add</div>
          </div>
          <div class="work-container">
            <iframe
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
                class="work"
                frameborder="0"
                referrerpolicy="strict-origin-when-cross-origin"
                src="https://www.youtube.com/embed/BB-l_skjim4?si=cDlE7DSXrsmA5pL6"
                title="YouTube video player"></iframe>
            <div class="work-title">
              ただ声一つ-ロクデナシ/りにぃ（cover）【オリジナルMV】【歌い手甲子園23春】
            </div>
          </div>
          <div class="work-container">
            <iframe
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
                class="work"
                frameborder="0"
                referrerpolicy="strict-origin-when-cross-origin"
                src="https://www.youtube.com/embed/txL368rzuEA?si=SSJGJ_Y5UrgZZbEM"
                title="YouTube video player"></iframe>
            <div class="work-title">
              独奏 / Cover ゆきみもっち
            </div>
          </div>
          <div class="work-container">
            <iframe
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
                class="work"
                frameborder="0"
                referrerpolicy="strict-origin-when-cross-origin"
                src="https://www.youtube.com/embed/Hro4VZmfM3o?si=9Xi7TovDoIr-tL8n"
                title="YouTube video player"></iframe>
            <div class="work-title">
              【#歌ってみた/オリジナルMV】そこに在る、光。【covered by #桃宮弥生/#兎未むむ/#和澄ちことん/#豹道メイ】
            </div>
          </div>
        </div>
      </div>

      <div style="margin-bottom: 5em"></div>

      <div class="creator-movie">
        <div class="creator-card-title">Movie Engineer</div>
        <div style="display: flex; gap: 5em;">
          <img alt="icon" class="creator-card-icon" src="../img/yukimimochi_icon.jpg"/>
          <div class="creator-card-name">ゆきみもっち</div>
        </div>

        <div class="creator-works-title">WORKS</div>
        <div class="creator-works-container">
          <div class="work-container">
            <iframe
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
                class="work"
                frameborder="0"
                referrerpolicy="strict-origin-when-cross-origin"
                src="https://www.youtube.com/embed/9ZtIdu4HyaQ?si=EQ3QSSPIL2ULUjQQ"
                title="YouTube video player"></iframe>
          </div>
          <div class="work-container">
            <iframe
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
                class="work"
                frameborder="0"
                referrerpolicy="strict-origin-when-cross-origin"
                src="https://www.youtube.com/embed/l6WaE8_fCn0?si=KI-fBvqTOc3FDkRd"
                title="YouTube video player"></iframe>
          </div>
          <div class="work-container">

          </div>
          <div class="work-container">

          </div>
        </div>
      </div>

      <div style="margin-bottom: 5em"></div>

      <div class="creator-cord">
        <div class="creator-card-title">Illustrator</div>
        <div style="display: flex; gap: 5em;">
          <img alt="icon" class="creator-card-icon" src="../img/udon_icon.jpg"/>
          <div>
            <div class="creator-card-name">枇杷うどん</div>
            <div class="creator-comment-title"></div>
            <div class="creator-comment"></div>
          </div>
        </div>
        <div class="creator-works-title">WORKS</div>
        <div class="creator-works-container">
          <div class="work-container">
            <img alt="icon" class="work popup-img" @click="openModal" src="../img/udon_work_1.png"/>
          </div>
          <div class="work-container">
            <img alt="icon" class="work popup-img" @click="openModal" src="../img/udon_work_2.png"/>
          </div>
          <div class="work-container">

          </div>
          <div class="work-container">

          </div>

          <div v-show="isModalOpen"
               id="myModal"
               class="modal-overlay"
               @click="closeModal">
            <img alt="work_img" :src="modalImgSrc" class="modal-content">
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<style scoped>
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0, 0, 0, 0.85);
    z-index: 9999;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  .modal-content {
    max-width: 90%;
    max-height: 90%;
    object-fit: contain;
    box-shadow: 0 0 30px rgba(0,0,0,0.5);
    border-radius: 4px;
  }
</style>