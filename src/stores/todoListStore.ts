import { ref, type Ref } from 'vue'
import { defineStore } from 'pinia'

type Todo = {
  name: string,
  done: boolean,
}

export const useTodoListStore = defineStore('todoList', () => {
  const todoList: Ref<Todo[]> = ref([])

  function addTodo(name: string): void {
    todoList.value.push({
      name: name,
      done: false
    })
  }

  function deleteTodo(todo: Todo): void {
    todoList.value = todoList.value.filter((t) => todo != t)
  }



  return { todoList, addTodo, deleteTodo }
}, { persist: true })
