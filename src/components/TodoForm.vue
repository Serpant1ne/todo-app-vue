<template lang="">
  <form class="form">
    <input type="text" name="taskNameInput" id="taskNameInput" />
    <button type="submit" class="submitBtn">+</button>
  </form>
</template>
<script setup lang="ts"></script>
<style lang="scss">
@use '../assets/main.scss';

.form {
  margin: 0 auto 24px auto;
  display: flex;
  flex-direction: row;
  border-radius: main.$border-radius;
  justify-content: space-between;
  align-items: center;
  padding: main.$padding;
  box-shadow: 0px 12px 12px 12px main.$shadow-color;
  background-color: main.$white;
}

#taskNameInput {
  min-width: 50%;
  max-width: 80%;
  border: none;
  background-color: main.$white;
  font-size: 32px;
  font-weight: bold;
  margin-right: 24px;
  flex-grow: 1;

  &:focus-visible {
    outline: none;
  }
}

.submitBtn {
  border-radius: main.$btn-border-radius;
  border: none;
  height: main.$btn-size;
  min-width: main.$btn-size;
  background-color: main.$blue;
  color: main.$white;
  font-weight: bold;
  font-size: 72px;
  justify-content: center;
  display: flex;
  align-items: center;
}
</style>
