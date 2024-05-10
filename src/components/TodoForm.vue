<script setup lang="ts">
import { ref, type Ref } from 'vue'
import { useTodoListStore } from '@/stores/todoListStore'

type Flag = {
  name: string
  value: number
  default?: boolean
}

const todoListStore = useTodoListStore()
const nameInput = ref('')

const flags: Ref<Flag[]> = ref([
  {
    name: 'flag',
    value: 4,
    default: true
  },
  {
    name: 'high',
    value: 1,
    selected: false
  },
  {
    name: 'medium',
    value: 2,
    selected: false
  },
  {
    name: 'low',
    value: 3,
    selected: false
  },
  {
    name: 'none',
    value: 4,
    selected: false
  }
])

const selected = ref(flags.value[0].value)

function handleSubmit(): void {
  console.log(selected.value)
  if (nameInput.value != '') {
    todoListStore.addTodo(nameInput.value.trim(), selected.value)
  }
  nameInput.value = ''
  selected.value = flags.value[0].value
}
</script>

<template lang="">
  <form class="form" autocomplete="off" @submit.prevent="handleSubmit()">
    <div class="main-elements">
      <input
        type="text"
        name="todoNameInput"
        id="todoNameInput"
        placeholder="Type todo"
        v-model="nameInput"
      />
      <button type="submit" class="submitBtn">+</button>
    </div>
    <div class="additional-elements">
      <select name="flagSelect" id="flagSelect" class="flagSelect" v-model="selected">
        <option
          v-for="flag in flags"
          :key="flag.name"
          :value="flag.value"
          class="flagOption"
          :disabled="flag.default"
          :selected="flag.selected"
        >
          {{ flag.name }}
        </option>
      </select>
    </div>
  </form>
</template>

<style lang="scss">
@use '../assets/main.scss';

.form {
  margin: 0 auto 24px auto;
  display: flex;
  flex-direction: column;
  border-radius: main.$border-radius;
  padding: main.$padding;
  box-shadow: 0px 12px 12px 12px main.$shadow-color;
  background-color: main.$white;
}

.main-elements {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

#todoNameInput {
  min-width: 50%;
  max-width: 80%;
  border: none;
  background-color: main.$white;
  font-size: 32px;
  font-weight: bold;
  margin-right: 24px;
  flex-grow: 1;

  font-family: 'Poppins', sans-serif;

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
