<script setup lang="ts">
import { useTodoListStore } from '@/stores/todoListStore'

const todoListStore = useTodoListStore()
</script>

<template>
  <div class="options-wrapper">
    <select name="sortSelect" id="sortSelect" class="sort-select" v-model="todoListStore.sortType">
      <option value="">Sort</option>
      <option value="flagDescending">By Flag (H > L)</option>
      <option value="flagAscending">By Flag (L > H)</option>
    </select>
  </div>
</template>

<style lang="scss">
@use '../assets/main.scss';

.options-wrapper {
  margin-bottom: 12px;
}

.sort-select {
  @extend %select;
}
</style>
