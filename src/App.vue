<script setup>
import HeaderTodo from './components/HeaderTodo.vue';
import InputTodo from './components/InputTodo.vue';
import { ref } from 'vue';

const inputValue = ref('');
</script>

<template>
  <div class="wrapper">
    <HeaderTodo />
    <InputTodo v-model="inputValue" />
  </div>
</template>

<style lang="scss" scoped></style>
