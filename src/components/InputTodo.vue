<script setup>
import { ref } from 'vue';

const inputValue = ref('');
</script>

<template>
  <form
    class="input__wrapper"
    @submit.prevent="$emit('submitValue', inputValue)"
  >
    <input type="text" v-model="inputValue" />
    <button>submit</button>
  </form>
</template>

<style lang="scss" scoped>
.input__wrapper {
  display: flex;
  padding: 0 3rem;

  input {
    width: 100%;
    height: 3rem;
    border: 1px solid black;
    font-size: map-get($font-size, 'large');
  }

  button {
    font-size: 1.5rem;
    padding: 0.5rem;
    border: 1px solid black;
  }
}
</style>
