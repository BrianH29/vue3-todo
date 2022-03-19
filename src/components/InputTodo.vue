<script setup>
const emits = defineEmits(['submitValue']);

function submitValue(e) {
  emits('submitValue', e.target.value);
  e.target.value = '';
}
</script>

<template>
  <input
    type="text"
    placeholder="what's your plan?"
    @keyup.enter="submitValue"
  />
</template>

<style lang="scss" scoped>
input {
  width: 100%;
  height: 3rem;
  border: 1px solid black;
  font-size: map-get($font-size, 'large');
}
</style>
