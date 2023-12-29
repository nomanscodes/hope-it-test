<template>
  <div v-for="item in todo" :key="item?.id" class="single-todo">
    <!-- single todo left  -->
    <div class="single-todo__left">
      <!--single todo title  -->
      <h1>
        {{ item?.title }} 
        <svg
          v-if="item?.status"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="100%"
          height="100%"
          x="0"
          y="0"
          viewBox="0 0 367.805 367.805"
          style="enable-background: new 0 0 512 512"
          xml:space="preserve"
        >
          <g>
            <path
              d="M183.903.001c101.566 0 183.902 82.336 183.902 183.902s-82.336 183.902-183.902 183.902S.001 285.469.001 183.903C-.288 82.625 81.579.29 182.856.001h1.047z"
              style=""
              fill="#3bb54a"
              data-original="#3bb54a"
              class=""
            ></path>
            <path
              d="M285.78 133.225 155.168 263.837l-73.143-72.62 29.78-29.257 43.363 42.841 100.833-100.833z"
              style=""
              fill="#d4e1f4"
              data-original="#d4e1f4"
            ></path>
          </g>
        </svg>
      </h1>
      <!-- single todo description  -->
      <p>
        {{ item?.description }}
      </p>
    </div>
    <!-- single todo right  -->
    <div class="single-todo__right">
      <div v-if="!complete" class="single-todo__pending-icons">
        <!-- delete button  -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="100%"
          height="100%"
          x="0"
          y="0"
          viewBox="0 0 512 512"
          style="enable-background: new 0 0 512 512"
          xml:space="preserve"
          class="delete-btn"
          @click="deleteTodo(item?.id)"
        >
          <g>
            <path
              d="M424 64h-88V48c0-26.51-21.49-48-48-48h-64c-26.51 0-48 21.49-48 48v16H88c-22.091 0-40 17.909-40 40v32c0 8.837 7.163 16 16 16h384c8.837 0 16-7.163 16-16v-32c0-22.091-17.909-40-40-40zM208 48c0-8.82 7.18-16 16-16h64c8.82 0 16 7.18 16 16v16h-96zM78.364 184a5 5 0 0 0-4.994 5.238l13.2 277.042c1.22 25.64 22.28 45.72 47.94 45.72h242.98c25.66 0 46.72-20.08 47.94-45.72l13.2-277.042a5 5 0 0 0-4.994-5.238zM320 224c0-8.84 7.16-16 16-16s16 7.16 16 16v208c0 8.84-7.16 16-16 16s-16-7.16-16-16zm-80 0c0-8.84 7.16-16 16-16s16 7.16 16 16v208c0 8.84-7.16 16-16 16s-16-7.16-16-16zm-80 0c0-8.84 7.16-16 16-16s16 7.16 16 16v208c0 8.84-7.16 16-16 16s-16-7.16-16-16z"
              fill=""
              opacity="1"
              data-original="#000000"
              class=""
            ></path>
          </g>
        </svg>
        <!-- move to complete todo button  -->
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="100%"
          height="100%"
          x="0"
          y="0"
          viewBox="0 0 520 520"
          style="enable-background: new 0 0 512 512"
          xml:space="preserve"
          class="move-complete-btn"
          @click="todoStore.moveCompletedtodo(item?.id)"
        >
          <g>
            <g data-name="15-Checked">
              <circle
                cx="208.52"
                cy="288.5"
                r="176.52"
                fill="#b0ef8f"
                opacity="1"
                data-original="#b0ef8f"
                class=""
              ></circle>
              <path
                fill="#009045"
                d="m210.516 424.937-2.239-3.815c-34.2-58.27-125.082-181.928-126-183.17l-1.311-1.781 30.963-30.6 98.012 68.439c61.711-80.079 119.283-135.081 156.837-167.2C407.859 71.675 434.6 55.5 434.87 55.345l.608-.364H488l-5.017 4.468C353.954 174.375 214.1 418.639 212.707 421.093z"
                opacity="1"
                data-original="#009045"
              ></path>
            </g>
          </g>
        </svg>
        <!-- edit button  -->
        <svg
          @click="todoStore.openModal(item)"
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="100%"
          height="100%"
          x="0"
          y="0"
          viewBox="0 0 512 511"
          style="enable-background: new 0 0 512 512"
          xml:space="preserve"
          class="edit-btn"
        >
          <g>
            <path
              d="M405.332 256.484c-11.797 0-21.332 9.559-21.332 21.332v170.668c0 11.754-9.559 21.332-21.332 21.332H64c-11.777 0-21.332-9.578-21.332-21.332V149.816c0-11.754 9.555-21.332 21.332-21.332h170.668c11.797 0 21.332-9.558 21.332-21.332 0-11.777-9.535-21.336-21.332-21.336H64c-35.285 0-64 28.715-64 64v298.668c0 35.286 28.715 64 64 64h298.668c35.285 0 64-28.714 64-64V277.816c0-11.796-9.54-21.332-21.336-21.332zm0 0"
              fill=""
              opacity="1"
              data-original="#000000"
            ></path>
            <path
              d="M200.02 237.05a10.793 10.793 0 0 0-2.922 5.438l-15.082 75.438c-.703 3.496.406 7.101 2.922 9.64a10.673 10.673 0 0 0 7.554 3.114c.68 0 1.387-.063 2.09-.211l75.414-15.082c2.09-.43 3.988-1.43 5.461-2.926l168.79-168.79-75.415-75.41zM496.383 16.102c-20.797-20.801-54.633-20.801-75.414 0l-29.524 29.523 75.414 75.414 29.524-29.527C506.453 81.465 512 68.066 512 53.816s-5.547-27.648-15.617-37.714zm0 0"
              fill=""
              opacity="1"
              data-original="#000000"
            ></path>
          </g>
        </svg>
      </div>
    </div>
    <!-- todo edited form  -->
    <EditForm/>
  </div>
</template>

<script setup>
import { defineProps} from 'vue'
import { useTodo } from '@/stores/todo'
import EditForm from '../components/EditForm.vue' 

const { todo, complete } = defineProps(['todo', 'complete'])

// todos store 
const todoStore = useTodo()

// delete todo
const deleteTodo = (id) => {
  todoStore.deleteTodo(id)
}

</script>

<style lang="scss">
.single-todo {
  margin: 20px 0px;
  box-sizing: border-box;
  padding: 20px;
  display: grid;
  grid-template-columns: 10fr 2fr;
  padding: 18px 16px;
  margin-top: 15px;
  border-radius: 2px;
  box-shadow: 1px 1px 1px 1px #3a3939;
  background-color: #3a3a3a;
  &__left {
    h1 {
      color: green;
      font-size: 28px;
      line-height: 100%;
      margin-bottom: 10px;
      display: flex;
      align-items: center;
      gap: 10px;

      svg{
        width: 15px;
      }
    }
    p {
      color: rgb(187, 183, 183);
      font-size: 15px;
      line-height: 140%;
      letter-spacing: 0.2px;
    }
  }
  &__right {
    display: flex;
    align-items: center;
    justify-content: end;
    svg {
      width: 25px;
      cursor: pointer;
    }
  }
  &__pending-icons {
    display: flex;
    align-items: center;
    gap: 20px;
  }
  .delete-btn {
    fill: white;
    width: 20px;
    transition: all ease-in-out 0.2s;
    &:hover {
      fill: red;
    }
  }
  .edit-btn{
    fill: white;
    width: 20px;
  }
}
</style>
