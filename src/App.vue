<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
</script>

<template>
  <body>
    <p>hello world</p>
  </body>
</template>

<style scoped lang="scss">
@import './assets/main.scss';
* {
  margin: 0;
  padding: 0;
}

body {
  background-color: $white;
  font-family: 'Poppins', sans-serif;
}

p {
  color: $red;
}
</style>
