<script setup lang="ts">
import {ref} from 'vue';

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

const showCard = ref<'music' | 'movie' | 'illust' | 'none'>('none');

function cardOpenHandler(who: string) {
  if (showCard.value === 'none') {
    switch (who) {
      case 'music':
        showCard.value = 'music';
        break;
      case 'movie':
        showCard.value = 'movie';
        break;
      case 'illust':
        showCard.value = 'illust';
        break;
    }
  }
  else closeCard()
}

function closeCard() {
  showCard.value = 'none'

  const iframes = document.querySelectorAll('iframe.work');

  iframes.forEach((iframe) => {
    const win = (iframe as HTMLIFrameElement).contentWindow;
    if (win) {
      // 2. 유튜브 서버로 직접 일시정지 명령 전송
      win.postMessage(JSON.stringify({
        event: "command",
        func: "pauseVideo",
        args: ""
      }), "*");
    }
  });
}
function moveSlide(direction: number) {
  const container = document.querySelector(`.creator-${showCard.value} .creator-works-container`) as HTMLElement;

  if (container) {
    const itemWidth = container.offsetWidth * 0.8;
    const gap = 24;

    container.scrollBy({
      left: (itemWidth + gap) * direction,
      behavior: 'smooth'
    });
  }
}


</script>
<template>
  <div class="container">
    <div class="container-title">CREATOR</div>

    <!-- icon -->
    <div style="cursor: pointer; display: flex; gap: 1.5em; margin-bottom: 2em;">
      <img alt="icon" @click="cardOpenHandler('music')" class="creator-card-icon" src="../img/tsubasa_icon.jpg"/>
      <img alt="icon" @click="cardOpenHandler('movie')" class="creator-card-icon" src="../img/yukimimochi_icon.jpg"/>
      <img alt="icon" @click="cardOpenHandler('illust')" class="creator-card-icon" src="../img/udon_icon.jpg"/>

    </div>
    <!-- 전체 모달 시스템 -->
    <Transition name="bounce">
      <div v-show="showCard !== 'none'" class="creator-modal" @click.self="closeCard">
        <!-- personal card -->

        <div class="creator-card">
          <button @click="cardOpenHandler('no one')" class="close-btn">x</button>
          <div v-show="showCard==='music'" class="creator-music">
            <div class="creator-card-info">
              <img alt="icon" class="creator-card-icon" src="../img/tsubasa_icon.jpg"/>
              <div style="align-self: center">
                <div class="creator-card-title">Music Engineer</div>
                <div class="creator-card-name">tsubasa.add AddCreart Lab.代表</div>
              </div>
            </div>
            <div class="creator-works-title">WORKS</div>

            <div class="works-slide">
              <button class="slide-btn left" style="padding-right: 20px" @click="moveSlide(-1)">〈</button>
              <div ref="scrollContainer" class="creator-works-container">
                <div class="work-container">
                  <iframe
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowfullscreen
                      class="work"
                      frameborder="0"
                      referrerpolicy="strict-origin-when-cross-origin"
                      src="https://www.youtube.com/embed/GxeUhFq7OEg?si=zmmA_72Xz4gpXOPJ&enablejsapi=1"
                      title="YouTube video player"/>
                  <div class="work-title">ずうっといっしょ【歌ってみた】tsubasa.add</div>
                </div>
                <div class="work-container">
                  <iframe
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowfullscreen
                      class="work"
                      frameborder="0"
                      referrerpolicy="strict-origin-when-cross-origin"
                      src="https://www.youtube.com/embed/BB-l_skjim4?si=cDlE7DSXrsmA5pL6&enablejsapi=1"
                      title="YouTube video player"/>
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
                      src="https://www.youtube.com/embed/txL368rzuEA?si=SSJGJ_Y5UrgZZbEM&enablejsapi=1"
                      title="YouTube video player"/>
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
                      src="https://www.youtube.com/embed/Hro4VZmfM3o?si=9Xi7TovDoIr-tL8n&enablejsapi=1"
                      title="YouTube video player"></iframe>
                  <div class="work-title">
                    【#歌ってみた/オリジナルMV】そこに在る、光。【covered by #桃宮弥生/#兎未むむ/#和澄ちことん/#豹道メイ】
                  </div>
                </div>
              </div>
              <button class="slide-btn right" style="padding-left: 20px" @click="moveSlide(1)">〉</button>
            </div>
          </div>
          <div v-show="showCard==='movie'" class="creator-movie">
            <div style="display: flex; gap: 5em;">
              <div class="creator-card-info">
                <img alt="icon" class="creator-card-icon" src="../img/yukimimochi_icon.jpg"/>
                <div>
                  <div class="creator-card-title">Movie Engineer</div>
                  <div class="creator-card-name">ゆきみもっち</div>
                </div>
              </div>
            </div>
            <div class="creator-works-title">WORKS</div>
            <div class="works-slide">
              <button class="slide-btn left" style="padding-right: 20px" @click="moveSlide(-1)">〈</button>
              <div ref="scrollContainer" class="creator-works-container">
              <div class="work-container">
                <iframe
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                    class="work"
                    frameborder="0"
                    referrerpolicy="strict-origin-when-cross-origin"
                    src="https://www.youtube.com/embed/9ZtIdu4HyaQ?si=EQ3QSSPIL2ULUjQQ&enablejsapi=1"
                    title="YouTube video player"></iframe>
              </div>
              <div class="work-container">
                <iframe
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                    class="work"
                    frameborder="0"
                    referrerpolicy="strict-origin-when-cross-origin"
                    src="https://www.youtube.com/embed/l6WaE8_fCn0?si=KI-fBvqTOc3FDkRd&enablejsapi=1"
                    title="YouTube video player"></iframe>
              </div>
              <div class="work-container">
                <iframe
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                    class="work"
                    frameborder="0"
                    referrerpolicy="strict-origin-when-cross-origin"
                    src="https://www.youtube.com/embed/l6WaE8_fCn0?si=KI-fBvqTOc3FDkRd&enablejsapi=1"
                    title="YouTube video player"></iframe>
              </div>
              <div class="work-container">
                <iframe
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen
                    class="work"
                    frameborder="0"
                    referrerpolicy="strict-origin-when-cross-origin"
                    src="https://www.youtube.com/embed/l6WaE8_fCn0?si=KI-fBvqTOc3FDkRd&enablejsapi=1"
                    title="YouTube video player"></iframe>
              </div>
            </div>
              <button class="slide-btn right" style="padding-left: 20px" @click="moveSlide(1)">〉</button>
            </div>
          </div>
          <div v-show="showCard==='illust'" class="creator-illust">
            <div style="display: flex; gap: 5em;">
              <div>
                <div class="creator-card-info">
                  <img alt="icon" class="creator-card-icon" src="../img/udon_icon.jpg"/>
                  <div >
                    <div class="creator-card-title">Illustrator</div>
                    <div class="creator-card-name">枇杷うどん</div>
                  </div>
                </div>
                <div class="creator-comment-title"></div>
                <div class="creator-comment"></div>
              </div>
            </div>
            <div class="creator-works-title">WORKS</div>
            <div class="works-slide">
              <button class="slide-btn left" style="padding-right: 20px" @click="moveSlide(-1)">〈</button>
              <div ref="scrollContainer" class="creator-works-container">
              <div class="work-container">
                <img alt="icon" class="work img popup-img" @click="openModal" src="../img/udon_work_1.png"/>
              </div>
              <div class="work-container">
                <img alt="icon" class="work img popup-img" @click="openModal" src="../img/udon_work_2.png"/>
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
              <button class="slide-btn right" style="padding-left: 20px" @click="moveSlide(1)">〉</button>
            </div>
          </div>
        </div>
      </div>

    </Transition>
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