import { computed, ref, type Ref } from 'vue'
import { defineStore } from 'pinia'

type Todo = {
  name: string,
  done: boolean,
  flag: number
}

export const useTodoListStore = defineStore('todoList', () => {
  const todoList: Ref<Todo[]> = ref([])

  const sortType = ref('')

  const sortedTodoList = computed(() => {
    if (sortType.value === 'flagDescending') {
      const sorted = todoList.value.slice()
      return sorted.sort((a, b) => {
        return a.flag - b.flag
      })
    }
    else if (sortType.value === 'flagAscending') {
      const sorted = todoList.value.slice()
      return sorted.sort((a, b) => {
        return b.flag - a.flag
      })
    }
    else {
      return todoList.value
    }

  })

  function addTodo(name: string, flag: number): void {
    todoList.value.unshift({
      name: name,
      done: false,
      flag: flag
    })
  }

  function deleteTodo(todo: Todo): void {
    todoList.value = todoList.value.filter((t) => todo != t)
  }



  return { todoList, sortedTodoList, sortType, addTodo, deleteTodo }
}, { persist: true })
