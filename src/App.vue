<template>
<div class="my-todo">
  <!-- heading  -->
 <div class="my-todo__heading">
  <p>My Todo App</p>
 </div>
 <!-- main container  -->
 <div class="my-todo__container">
<TaskForm/>
<TodoList/>
 </div>
</div>
</template>

<script setup>
import TaskForm from './components/TaskForm.vue';
import TodoList from './components/TodoList.vue';
</script>

<style lang="scss">
.my-todo{
  padding: 100px;
  &__heading{
    display: flex;
    align-items: center;
    justify-content: center;
    color: aliceblue;
    font-size: 40px;
    font-weight: 600;
    letter-spacing: .5px;
    margin-bottom: 40px;
  }
  &__container{
    width: fit-content;
    max-width: 900px;
    width: 100%;
    min-height: 500px;
    margin: auto;
    padding: 40px;
    background-color:#292b2e ;
    border-radius: 3px;
  }
}
</style>