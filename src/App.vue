<script setup lang="ts">
import { onBeforeMount } from 'vue'
import TodoForm from './components/TodoForm.vue'
import TodoList from './components/TodoList.vue'
import TodoListOptions from './components/TodoListOptions.vue'

onBeforeMount(() => {
  document.body.classList.add('body')
})
</script>

<template>
  <div class="wrapper">
    <TodoForm />
    <TodoListOptions />
    <TodoList />
  </div>
</template>

<style scoped lang="scss">
@use './assets/main';
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

.wrapper {
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
