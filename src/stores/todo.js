import { defineStore } from 'pinia'

export const useTodo = defineStore('todo', {
  state: () => ({
    todo: [
      {
        title: 'Task 1',
        id: '1',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente optio aspernatur libero dicta temporaro dicta tempora',
        status: true
      },
      {
        title: 'Task 2',
        id: '2',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente optio aspernatur libero dicta temporaro dicta tempora',
        status: false
      }
    ],
    selectedTodo: null,
    isModalOpen: false
  }),

  getters: {
    completeTodo() {
      return this.todo.filter((item) => item.status === true).slice()
    }
  },

  actions: {
    openModal(todo) {
      this.selectedTodo = todo
      this.isModalOpen = true
    },
    closeModal() {
      this.isModalOpen = false
    },
    addTodo(todo) {
      this.todo = [...this.todo, todo]
    },
    deleteTodo(id) {
      this.todo = this.todo.filter((item) => item?.id !== id)
    },
    moveCompletedtodo(id) {
      const thisTodo = this.todo.find((item) => item.id === id)
      thisTodo.status = true
    },
    editTodo(updatedTodo) {
      const index = this.todo.findIndex((item) => item.id === updatedTodo.id)

      if (index !== -1) {
        this.todo[index] = updatedTodo
      }
    }
  }
})
