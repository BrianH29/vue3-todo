<script setup>
import HeaderTodo from './components/HeaderTodo.vue';
import InputTodo from './components/InputTodo.vue';

function submitValue(e) {
  console.log('check value', e);
}
</script>

<template>
  <div class="wrapper">
    <HeaderTodo />
    <InputTodo @submitValue="submitValue" />
  </div>
</template>

<style lang="scss" scoped></style>
