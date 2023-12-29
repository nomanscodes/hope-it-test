<template>
  <div class="todo-list">
    <div class="todo-list__container">
      <!-- tab button  -->
      <div class="todo-list__btns">
        <!-- pending and new todo btn  -->
        <button :class="{ 'active': tabName === 'justTodo' }" @click="handleTodoTab('justTodo')">
          todo
        </button>
        <!-- complete todo btn  -->
        <button
          :class="{ 'active': tabName === 'complateTodo' }"
          @click="handleTodoTab('complateTodo')"
        >
          complete
        </button>
      </div>
      <!-- pending and new add todo  -->
      <div v-if="tabName === 'justTodo'" class="">
        <SingleTodo :todo="todoStore?.todo" />
      </div>
      <!-- complate todo list  -->
      <div v-if="tabName === 'complateTodo'" class="">
        <SingleTodo :todo="todoStore.completeTodo" :complete="true"/>
      </div>
    </div>
  </div>
</template>

<script setup>
import SingleTodo from './SingleTodo.vue'
import { useTodo } from '@/stores/todo'
import { ref } from 'vue'

// todos tab name 
const tabName = ref('justTodo')

// todos store 
const todoStore = useTodo()

// handle todo tab 
const handleTodoTab = (arg) => {
  tabName.value = arg
}
</script>

<style lang="scss">
.todo-list {
  padding: 20px 0px;
  &__btns {
    display: flex;
    align-items: center;
    gap: 20px;
    button {
      width: fit-content;
      height: 40px;
      box-sizing: border-box;
      padding: 0px 20px;
      border: none;
      background-color: #525151;
      color: white;
      border-radius: 2px;
      text-transform: uppercase;
      cursor: pointer;
      font-weight: 600;
    }
  }

}  
.active {
    background-color: green !important;
    color: white !important;
  }
</style>
