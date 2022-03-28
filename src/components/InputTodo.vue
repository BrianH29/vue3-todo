<script setup>
import { ref, defineEmits } from 'vue';

let inputTodo = ref('');
const emit = defineEmits(['addTodo']);

function addTodo() {
  emit('addTodo', inputTodo);
  console.log(inputTodo);
}
</script>

<template>
  <div class="input__wrapper">
    <input type="text" v-model="inputTodo" @keyup.enter="addTodo" />
    <font-awesome-icon icon="pencil" @click="addTodo" />
  </div>
</template>

<style lang="scss" scoped>
.input__wrapper {
  padding: 0 3rem;

  input {
    width: 100%;
    height: 3rem;
    border: 1px solid black;
    font-size: 30px;
  }
}
</style>
