<script setup lang="ts">
import { onBeforeMount } from 'vue'
import TodoForm from './components/TodoForm.vue'

onBeforeMount(() => {
  document.body.classList.add('body')
})
</script>

<template>
  <div class="wrapper">
    <TodoForm />
  </div>
</template>

<style scoped lang="scss">
@use './assets/main';
body {
  background-color: main.$red;
  font-family: 'Poppins', sans-serif;
}

.wrapper {
  margin: 2em auto;
  width: 80%;
}

p {
  color: main.$red;
}
</style>
