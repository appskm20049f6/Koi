<script setup>
<<<<<<< HEAD
defineProps({
  msg: {
    type: String,
    required: true,
  },
});
=======
import { ref } from 'vue'

defineProps({
  msg: String
})

const count = ref(0)
>>>>>>> parent of d06cb5f (20221019 0915 vite初體驗紀錄)
</script>

<template>
<<<<<<< HEAD
  <div class="greetings">
    <h1 class="green">{{ msg }}</h1>
    <h3>
      You've successfully created a project with
      <a href="https://vitejs.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>.
    </h3>
  </div>
</template>

<style leng="scss">
@use "./assets/sass/_RWD.scss";
=======
  <h1>{{ msg }}</h1>

  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>components/HelloWorld.vue</code> to test HMR
    </p>
  </div>

  <p>
    Check out
    <a href="https://vuejs.org/guide/quick-start.html#local" target="_blank"
      >create-vue</a
    >, the official Vue + Vite starter
  </p>
  <p>
    Install
    <a href="https://github.com/johnsoncodehk/volar" target="_blank">Volar</a>
    in your IDE for a better DX
  </p>
  <p class="read-the-docs">Click on the Vite and Vue logos to learn more</p>

  <div class="box">
    <div class="title">
      <p>測試sass語法通用性</p>
    </div>
  </div>

</template>

<style lang="scss">
@import "../assets/sass/media.scss";

.card{

  background: black;
  margin: auto;
.title {
    > p {
      color: green;
    }
}
@include pad{}

@include mobile{}
}



>>>>>>> parent of d06cb5f (20221019 0915 vite初體驗紀錄)
</style>
