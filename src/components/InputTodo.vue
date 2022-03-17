<script setup>
import { defineEmits, defineProps } from 'vue';

defineProps(['modelValue']);
defineEmits(['update:modelValue']);
</script>

<template>
  <form class="input__wrapper">
    <input
      type="text"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
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
    border: 1px solid black;
    padding: 0.5rem;
  }
}
</style>
