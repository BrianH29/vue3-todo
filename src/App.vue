<script setup>
import HeaderTodo from './components/HeaderTodo.vue';
import InputTodo from './components/InputTodo.vue';
import { ref, watchEffect } from 'vue';

const KEY = 'todos';
const todos = ref(JSON.parse(localStorage.getItem(KEY) || '[]'));

watchEffect(() => {
  console.log('todos value : ', todos);
  localStorage.setItem(KEY, JSON.stringify(todos.value));
});

function addTodo(e) {
  const todoObj = { completed: false, title: e.value };
  todos.value.push(todoObj);
  e.value = '';

</script>

<template>
  <div class="wrapper">
    <HeaderTodo />
    <InputTodo @addTodo="addTodo" />
  </div>
</template>

<style lang="scss" scoped></style>
