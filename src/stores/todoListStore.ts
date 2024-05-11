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
    if (sortType.value === 'flag') {
      return todoList.value.sort((a, b) => {
        return a.flag - b.flag
      })
    }
    return todoList.value
  })

  function addTodo(name: string, flag: number): void {
    todoList.value.push({
      name: name,
      done: false,
      flag: flag
    })
  }

  function deleteTodo(todo: Todo): void {
    todoList.value = todoList.value.filter((t) => todo != t)
  }



  return { todoList, sortedTodoList, addTodo, deleteTodo }
}, { persist: true })
