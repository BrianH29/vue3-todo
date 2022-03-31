<script setup>  

  const props = defineProps({
    todoList : Array
  })
</script>

<template>
  <TransitionGroup name="list" tag="ul">
      <li v-for="(item, index) in todoList" :key="index">
        {{ item.title }}
      </li>
  </TransitionGroup>
</template>


<style lang="scss" scoped>
li{
  font-size:  map-get($font-size, "xlarge" );
}

.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>