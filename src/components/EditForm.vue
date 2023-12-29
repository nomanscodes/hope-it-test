<template>
  <div v-if="todoStore.isModalOpen" class="edit-todo">
    <div class="edit-todo__container">
      <!-- title input  -->
      <div class="edit-todo__input">
        <label for="title">Title</label>
        <input v-model="editedTodo.title" type="text" name="title" />
      </div>
      <!-- description input  -->
      <div class="edit-todo__input">
        <label for="description">Description</label>
        <textarea v-model="editedTodo.description" name="description"></textarea>
      </div>
      <!-- modal buttons group  -->
      <div class="edit-todo__btn-group">
        <!-- submit button  -->
        <button @click="saveEdit()" class="edit-todo__btn">Save</button>
        <!-- modal close button  -->
        <button @click="cancelEdit()" class="edit-todo__btn close-btn">Cancel</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useTodo } from '@/stores/todo'

// todos store
const todoStore = useTodo()

// edited todo data 
const editedTodo = ref(null)
const originalTodo = ref(null)

// watch selected todo 
watch(() => todoStore.selectedTodo, (newTodo) => {
    if (newTodo) {
        editedTodo.value = { ...newTodo } // Create a copy to avoid direct modification
        originalTodo.value = { ...newTodo } // Save the original todo for comparison
    } else {
        editedTodo.value = null
        originalTodo.value = null
    }
})

// save edited todo 
const saveEdit = () => {
    const updatedTodo = {
        id: editedTodo.value.id,
        title: editedTodo.value.title,
        description: editedTodo.value.description,
        status: false
    }
    todoStore.editTodo(updatedTodo)
    todoStore.closeModal()
}

// cancel edit
const cancelEdit = () => {
    // Reset the editedTodo to the original state
    editedTodo.value = { ...originalTodo.value }
    todoStore.closeModal()
}
</script>


<style lang="scss">
.edit-todo {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: hsl(0, 0%, 0%, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  &__container {
    border-radius: 2px;
    box-shadow: 1px 1px 1px 1px #3a3939;
    box-sizing: border-box;
    background-color: #3a3a3a;
    padding: 40px;
    position: relative;
  }
  &__input {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-bottom: 18px;
    label {
      font-size: 20px;
      color: white;
    }
    input {
      border: none;
      padding: 10px;
      width: 500px;
      box-sizing: border-box;
      font-size: 16px;
      color: gray;
    }
    textarea {
      border: none;
      padding: 10px;
      max-width: 500px;
      min-width: 500px;
      min-height: 100px;
      box-sizing: border-box;
      font-size: 16px;
      color: gray;
    }
  }
  &__btn-group {
    padding-top: 10px;
    display: flex;
    align-items: center;
    gap: 20px;
  }
  &__btn {
    width: fit-content;
    height: 40px;
    box-sizing: border-box;
    padding: 0px 20px;
    border: none;
    background-color: green;
    color: white;
    border-radius: 2px;
    cursor: pointer;
    text-transform: capitalize;
  }
  .close-btn {
    background-color: rgb(175, 113, 20) !important;
  }
}

.open-modal {
  display: flex;
}
.modal-close {
  display: none;
}
</style>
