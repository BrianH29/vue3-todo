<script setup>
import HeaderTodo from './components/HeaderTodo.vue';
import InputTodo from './components/InputTodo.vue';
import { ref, watchEffect } from 'vue';

const KEYS = 'vue_todos';
const todos = ref([]);

function submitValue(inputValue) {
  const date = new Date();
  const currentDate = `${date.getFullYear()}/${
    date.getMonth() + 1
  }/${date.getDate()} `;

  todos.value.push({
    date: currentDate,
    todo: inputValue,
    completed: false,
  });
}

watchEffect(() => {
  localStorage.setItem(KEYS, JSON.stringify(todos));
});
</script>

<template>
  <div class="wrapper">
    <HeaderTodo />
    <InputTodo @submitValue="submitValue" />
  </div>
</template>

<style lang="scss" scoped></style>
