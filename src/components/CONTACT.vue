<script setup lang="ts">
import { ref } from 'vue';

const WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbyXYdD6eoAraqguSXP3Mp2K6u0GuXGJ6i6awd040oUuc2UxoRb17oVd5bmJVHbL4P0V/exec';

const formData = ref({
  name: '',
  platform: '',
  contact: '',
  message: ''
});

const isSubmitting = ref(false);

const handleSubmit = async () => {
  isSubmitting.value = true;

  try {
    const params = new URLSearchParams();
    params.append('name', formData.value.name);
    params.append('platform', formData.value.platform);
    params.append('contact', formData.value.contact);
    params.append('message', formData.value.message);

    const response = await fetch(WEB_APP_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: params
    });

    alert('Success!');
    formData.value = { name: '', platform: '', contact: '', message: '' };
  } catch (error) {
    console.error('Error!', error.message);
    alert('Fail!');
  } finally {
    isSubmitting.value = false;
  }
};
</script>

<template>
  <div class="container contact-container">
    <div class="container-title">CONTACT</div>
    <form class="contact-form" @submit.prevent="handleSubmit">
      <input class="contact-content" v-model="formData.name" type="text" name="name" placeholder="Your Name" required/>
      <select class="contact-content" v-model="formData.platform" name="platform" required>
        <option value="" disabled selected hidden>Contact method</option>
        <option value="X">X</option>
        <option value="discord">discord</option>
        <option value="email">E-mail</option>
      </select>
      <input class="contact-content" v-model="formData.contact" type="text" name="contact" placeholder="Your contact" required/>
      <textarea  class="contact-content" v-model="formData.message" name="message" placeholder="Your message"></textarea>
      <button class="contact-submit-btn" type="submit" :disabled="isSubmitting">
        {{ isSubmitting ? 'Submitting...' : 'Submit' }}
      </button>
    </form>
  </div>
</template>

<style scoped>
/* 간단한 스타일 추가 */
form { display: flex; flex-direction: column; gap: 10px; max-width: 300px; }
input, select, textarea { padding: 8px; }
button { cursor: pointer; background: #4caf50; color: white; border: none; padding: 10px; }
button:disabled { background: #ccc; }
</style>
