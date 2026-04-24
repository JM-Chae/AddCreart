import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

export {};

createApp(App).mount('#app')
