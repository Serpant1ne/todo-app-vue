<script setup lang="ts">
import { useTodoListStore } from '@/stores/todoListStore'

const todoListStore = useTodoListStore()
</script>

<template lang="">
  <list class="list">
    <li v-for="todo in todoListStore.todoList" :key="todo.id" class="todo">
      <span class="todoName">{{ todo.name }}</span>
      <div class="btnsWrapper">
        <button class="deleteBtn" @click="todoListStore.deleteTodo(todo)">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="40"
            height="40"
            viewBox="0 0 48 48"
          >
            <path
              d="M 24 4 C 20.491685 4 17.570396 6.6214322 17.080078 10 L 10.238281 10 A 1.50015 1.50015 0 0 0 9.9804688 9.9785156 A 1.50015 1.50015 0 0 0 9.7578125 10 L 6.5 10 A 1.50015 1.50015 0 1 0 6.5 13 L 8.6386719 13 L 11.15625 39.029297 C 11.427329 41.835926 13.811782 44 16.630859 44 L 31.367188 44 C 34.186411 44 36.570826 41.836168 36.841797 39.029297 L 39.361328 13 L 41.5 13 A 1.50015 1.50015 0 1 0 41.5 10 L 38.244141 10 A 1.50015 1.50015 0 0 0 37.763672 10 L 30.919922 10 C 30.429604 6.6214322 27.508315 4 24 4 z M 24 7 C 25.879156 7 27.420767 8.2681608 27.861328 10 L 20.138672 10 C 20.579233 8.2681608 22.120844 7 24 7 z M 11.650391 13 L 36.347656 13 L 33.855469 38.740234 C 33.730439 40.035363 32.667963 41 31.367188 41 L 16.630859 41 C 15.331937 41 14.267499 40.033606 14.142578 38.740234 L 11.650391 13 z M 20.476562 17.978516 A 1.50015 1.50015 0 0 0 19 19.5 L 19 34.5 A 1.50015 1.50015 0 1 0 22 34.5 L 22 19.5 A 1.50015 1.50015 0 0 0 20.476562 17.978516 z M 27.476562 17.978516 A 1.50015 1.50015 0 0 0 26 19.5 L 26 34.5 A 1.50015 1.50015 0 1 0 29 34.5 L 29 19.5 A 1.50015 1.50015 0 0 0 27.476562 17.978516 z"
            ></path>
          </svg>
        </button>
        <input v-model="todo.done" type="checkbox" name="todoCheckbox" class="todoCheckbox" />
      </div>
    </li>
  </list>
</template>

<style lang="scss">
@use '../assets/main.scss';

.list {
  display: grid;
  gap: 12px;
  margin: 0 auto;
}

.todo {
  @include main.border(main.$blue);
  border-radius: main.$border-radius;
  display: flex;
  padding: main.$padding;
  justify-content: space-between;
  align-items: center;
  font-size: 36px;
  flex-direction: row;
  min-width: 30%;
}

.taskName {
  white-space: nowrap;
  overflow: hidden; /* Hide overflowing content */
  text-overflow: ellipsis;
  font-weight: bold;
}

.btnsWrapper {
  display: flex;
  gap: 4px;
  align-items: center;
}

.deleteBtn {
  @extend %todo-buttons;

  svg {
    fill: main.$gray;
    transition: 0.3s fill;
  }
  &:hover {
    border-color: main.$red;
    svg {
      fill: main.$red;
    }
  }
}

.todoCheckbox {
  background: none;
  outline: none;
  appearance: none;

  position: relative;
  width: main.$btn-size;
  height: main.$btn-size;
  cursor: pointer;

  &::before,
  &::after {
    position: absolute;
    display: block;
    content: '';
  }

  &::before {
    @extend %todo-buttons;
    top: 0;
    left: 0;
    padding: 0;
  }

  &::after {
    top: 20px;
    left: 18px;
    width: 30px;
    height: 15px;
    @extend %todo-buttons-icons;
    border-bottom: 5px solid main.$gray;
    border-left: 5px solid main.$gray;
    transform: rotate(-45deg);
  }

  &:hover::before,
  &:hover::after {
    border-color: main.$black;
  }

  &:checked:before {
    border-color: main.$green;
  }

  &:checked::after {
    opacity: 1;
    border-color: main.$green;
  }
}
</style>
