<template>
  <div class="todo-form">
    <div class="todo-form__continer">
      <div class="todo-form__input">
        <label for="title">Title</label>
        <input type="text" name="title" v-model="title" placeholder="Whats the title your todo?" />
      </div>
      <div class="todo-form__input">
        <label for="title">Description</label>
        <input
          type="text"
          name="description"
          v-model="description"
          placeholder="Whats the description your todo?"
        />
      </div>
    </div>
    <button @click="submitTodo">ADD TODO</button>
  </div>
</template>

<script setup>
import { useTodo } from '@/stores/todo'
import { ref } from 'vue'
import { toast } from 'vue3-toastify';
import 'vue3-toastify/dist/index.css';

const emptyNotify = () => {
  toast.error("All field are required", {
    autoClose: 2000,
  });
};
const successNotify = () => {
  toast.success("Todo add succesfully", {
    autoClose: 2000,
  });
};

const store = useTodo()

const title = ref('')
const description = ref('')

const submitTodo = () => {
  if (title.value == '' || description.value == '') {
    emptyNotify()
  } else {
    const newTodo = {
      id: Date.now(),
      title: title.value,
      description: description.value,
      status: false
    }
    store.addTodo(newTodo)
    title.value = ''
    description.value = ''
    successNotify()
  }
}
</script>

<style lang="scss">
.todo-form {
  display: flex;
  align-items: center;
  &__continer {
    display: flex;
    align-items: center;
    gap: 30px;
  }
  &__input {
    display: flex;
    flex-direction: column;
    gap: 10px;
    label {
      font-size: 22px;
      color: white;
      letter-spacing: 0.5px;
      font-weight: 600;
    }
    input {
      padding: 10px;
      height: 40px;
      box-sizing: border-box;
      font-size: 16px;
      font-weight: 500;
      color: gray;
      letter-spacing: 0.5px;
      width: 350px;
    }
  }
  button {
    width: fit-content;
    height: 40px;
    box-sizing: border-box;
    padding: 0px 20px;
    border: none;
    background-color: green;
    color: white;
    border-radius: 2px;
    margin: 35px 0px 0px 30px;
    cursor: pointer;
  }
}
</style>
