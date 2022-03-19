<script setup>
import HeaderTodo from './components/HeaderTodo.vue';
import InputTodo from './components/InputTodo.vue';

function submitValue(inputValue) {
  console.log('input : ', inputValue);
  // localStorage.setItem('todo', JSON.stringify(inputValue));
}
</script>

<template>
  <div class="wrapper">
    <HeaderTodo />
    <InputTodo @submitValue="submitValue" />
  </div>
</template>

<style lang="scss" scoped></style>
