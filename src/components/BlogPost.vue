<script>
export default {
  props: ['title'],
  emits: ['enlarge-text']
}
</script>

<template>
  <h4 autoFocus className="red">{{ title }}</h4>
  <button @click="$emit('enlarge-text')">Enlarge text</button>
</template>

<style scoped>
.red{
  color: red;
}
</style>
